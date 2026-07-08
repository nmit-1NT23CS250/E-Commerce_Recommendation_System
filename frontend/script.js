function fillSearch(term) {
  document.getElementById('searchInput').value = term;
  searchProducts();
}


document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('searchInput').addEventListener('keydown', e => {
    if (e.key === 'Enter') searchProducts();
  });
});


function renderStars(rating) {
  const full    = Math.floor(rating);
  const hasHalf = (rating - full) >= 0.5;
  const empty   = 5 - full - (hasHalf ? 1 : 0);

  let html = '<div class="stars">';
  for (let i = 0; i < full;  i++) html += '<span class="star on">&#9733;</span>';
  if (hasHalf)                     html += '<span class="star half">&#9733;</span>';
  for (let i = 0; i < empty; i++) html += '<span class="star off">&#9733;</span>';
  html += '</div>';
  return html;
}


function toggleReview(index) {
  const panel = document.getElementById(`review-${index}`);
  const btn   = document.getElementById(`rev-btn-${index}`);
  const isOpen = panel.style.display === 'block';

  panel.style.display = isOpen ? 'none' : 'block';
  btn.textContent     = isOpen ? 'Review' : 'Hide';
  btn.classList.toggle('open', !isOpen);
}


async function searchProducts() {
  const query      = document.getElementById('searchInput').value.trim();
  const resultsDiv = document.getElementById('results');
  const loading    = document.getElementById('loading');
  const emptyState = document.getElementById('emptyState');
  const header     = document.getElementById('resultsHeader');
  const countBadge = document.getElementById('resultsCount');
  const titleEl    = document.getElementById('resultsTitle');

  
  resultsDiv.innerHTML     = '';
  emptyState.style.display = 'none';
  header.style.display     = 'none';

  if (!query) return;

  loading.style.display = 'flex';
  document.querySelector('.results-section')
    .scrollIntoView({ behavior: 'smooth', block: 'start' });

  try {
    
    const response = await fetch(`http://127.0.0.1:5000/recommend/${query}`);
    const data     = await response.json();

    loading.style.display = 'none';

    if (data.length === 0) {
      emptyState.style.display = 'flex';
      return;
    }

    titleEl.textContent    = `Results for "${query}"`;
    countBadge.textContent = `${data.length} product${data.length !== 1 ? 's' : ''} found`;
    header.style.display   = 'block';

    resultsDiv.innerHTML = data.map((product, index) => `
      <div class="card">

        <div class="card-img-area">
          <span class="card-badge">Top Pick</span>
          <a href="${product.product_link}" target="_blank" rel="noopener">
            <img
              src="${product.img_link}"
              alt="${product.product_name}"
              onerror="this.src='https://via.placeholder.com/160?text=No+Image'"
              loading="lazy"
            />
          </a>
        </div>

        <div class="card-body">

          <p class="card-name">${product.product_name}</p>

          <p class="card-price">&#8377;${product.discounted_price}</p>

          <div class="card-rating">
            ${renderStars(product.predicted_rating)}
            <span class="rating-num">${product.predicted_rating.toFixed(1)}</span>
          </div>

          <div class="card-actions">
            <a class="btn-view"
               href="${product.product_link}"
               target="_blank" rel="noopener">
              View Product
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                   stroke-width="2.5" width="14" height="14">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
            </a>
            <button
              id="rev-btn-${index}"
              class="btn-review"
              onclick="toggleReview(${index})"
            >Review</button>
          </div>

          <div id="review-${index}" class="review-panel" style="display:none;">
            ${product.review || 'No review available for this product.'}
          </div>

        </div>
      </div>
    `).join('');

  } catch (error) {
    loading.style.display = 'none';
    resultsDiv.innerHTML = `
      <div style="
        text-align:center; padding:60px 24px;
        grid-column: 1 / -1; color: #8896aa;
      ">
        <svg style="width:56px;height:56px;color:#d0d7e6;margin-bottom:16px;"
             viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <circle cx="12" cy="12" r="10"/>
          <line x1="12" y1="8" x2="12" y2="12"/>
          <line x1="12" y1="16" x2="12.01" y2="16"/>
        </svg>
        <h3 style="
          font-family:'Fraunces',serif; font-size:22px;
          color:#1c2333; margin-bottom:8px;
        ">Server Unreachable</h3>
        <p style="font-size:14px; font-weight:500;">
          Make sure the Flask server is running on
          <code style="
            background:#f0f4ff; color:#7c5cfc;
            padding:2px 8px; border-radius:6px; font-size:13px;
          ">localhost:5000</code>
        </p>
      </div>
    `;
    console.error('BuyWise fetch error:', error);
  }
}