/* JEETSWAP - Compact Dark Professional Theme */

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --bg-dark: #0a0a0a;
  --bg-elevated: #1a1a1a;
  --bg-subtle: #151515;
  --text-primary: #ffffff;
  --text-secondary: #a0a0a0;
  --text-muted: #6b6b6b;
  --primary: #0066FF;
  --primary-hover: #0052CC;
  --border: rgba(255, 255, 255, 0.1);
  --border-subtle: rgba(255, 255, 255, 0.05);
  --success: #10b981;
  --error: #ef4444;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  background: var(--bg-dark);
  color: var(--text-primary);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  position: relative;
  overflow-x: hidden;
}

/* Subtle Animated Background */
body::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    radial-gradient(ellipse 600px 400px at 20% 30%, rgba(0, 102, 255, 0.03), transparent),
    radial-gradient(ellipse 500px 600px at 80% 70%, rgba(16, 185, 129, 0.02), transparent);
  animation: bgPulse 15s ease-in-out infinite;
  z-index: -1;
  pointer-events: none;
}

@keyframes bgPulse {
  0%, 100% { opacity: 0.5; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.05); }
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 24px;
}

/* Compact Header */
.header {
  padding: 12px 0;
  border-bottom: 1px solid var(--border);
  background: var(--bg-dark);
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(8px);
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}

.branding {
  display: flex;
  flex-direction: column;
}

.brand-name {
  font-size: 1.5rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: var(--text-primary);
}

.brand-slogan {
  font-size: 0.75rem;
  color: var(--text-secondary);
  font-weight: 500;
}

.wallet-btn {
  background: var(--primary);
  color: white;
  font-size: 0.875rem;
  font-weight: 600;
  padding: 8px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 150ms;
}

.wallet-btn:hover {
  background: var(--primary-hover);
  transform: translateY(-1px);
}

/* Compact Wallet Info */
.wallet-info {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 8px 16px;
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  border-radius: 8px;
}

.wallet-addresses {
  display: flex;
  flex-direction: column;
  gap: 4px;
  border-right: 1px solid var(--border-subtle);
  padding-right: 16px;
}

.wallet-address-item {
  display: flex;
  flex-direction: column;
}

.wallet-label {
  font-size: 0.625rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-muted);
  margin-bottom: 2px;
}

.wallet-value {
  font-family: 'Monaco', 'Courier New', monospace;
  font-size: 0.6875rem;
  color: var(--text-secondary);
  max-width: 120px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.wallet-balances-compact {
  display: flex;
  gap: 12px;
}

.balance-compact {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.balance-compact-token {
  font-size: 0.625rem;
  font-weight: 600;
  color: var(--text-muted);
  text-transform: uppercase;
  margin-bottom: 2px;
}

.balance-compact-amount {
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--text-primary);
  font-variant-numeric: tabular-nums;
}

.balance-compact-usd {
  font-size: 0.625rem;
  color: var(--text-muted);
  font-variant-numeric: tabular-nums;
}

.disconnect-btn {
  background: transparent;
  color: var(--text-secondary);
  font-size: 0.75rem;
  font-weight: 500;
  padding: 6px 12px;
  border: 1px solid var(--border);
  border-radius: 6px;
  cursor: pointer;
  transition: all 150ms;
}

.disconnect-btn:hover {
  border-color: var(--error);
  color: var(--error);
}

.main {
  padding: 48px 0;
  min-height: calc(100vh - 80px);
}

.content-wrapper {
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 32px;
  max-width: 1200px;
  margin: 0 auto;
}

.hero-section {
  text-align: center;
  margin-bottom: 32px;
}

.hero-title {
  font-size: 3rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  color: var(--text-primary);
  margin-bottom: 16px;
  line-height: 1.1;
}

.hero-subtitle {
  font-size: 1.125rem;
  color: var(--text-secondary);
  font-weight: 400;
}

.swap-card {
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 24px;
}

.swap-header {
  margin-bottom: 24px;
  text-align: center;
}

.swap-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 4px;
}

.swap-description {
  font-size: 0.875rem;
  color: var(--text-secondary);
}

.form-group {
  margin-bottom: 20px;
}

.form-label {
  display: flex;
  justify-content: space-between;
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 8px;
}

.form-balance {
  font-weight: 500;
  color: var(--text-secondary);
}

.token-selector, .stablecoin-selector {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
}

.token-btn, .stablecoin-btn {
  background: var(--bg-subtle);
  border: 2px solid transparent;
  border-radius: 10px;
  padding: 12px;
  cursor: pointer;
  transition: all 150ms;
  text-align: center;
}

.token-btn:hover, .stablecoin-btn:hover {
  background: var(--bg-elevated);
  border-color: var(--border);
}

.token-btn.active, .stablecoin-btn.active {
  background: var(--bg-elevated);
  border-color: var(--primary);
}

.token-name {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 2px;
}

.token-price {
  font-size: 0.75rem;
  color: var(--text-secondary);
}

.input-wrapper {
  position: relative;
}

.input-field {
  width: 100%;
  font-size: 0.9375rem;
  font-weight: 500;
  padding: 12px 16px;
  border: 1px solid var(--border);
  border-radius: 10px;
  background: var(--bg-subtle);
  color: var(--text-primary);
  transition: all 150ms;
}

.input-field:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(0, 102, 255, 0.1);
  background: var(--bg-elevated);
}

.input-field::placeholder {
  color: var(--text-muted);
}

.max-btn {
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  background: var(--bg-elevated);
  color: var(--text-primary);
  font-size: 0.75rem;
  font-weight: 600;
  padding: 4px 8px;
  border: 1px solid var(--border);
  border-radius: 6px;
  cursor: pointer;
  transition: all 150ms;
}

.max-btn:hover {
  background: var(--primary);
  color: white;
  border-color: var(--primary);
}

.usd-display {
  text-align: center;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary);
  margin: 16px 0;
  font-variant-numeric: tabular-nums;
}

.action-btn {
  width: 100%;
  background: var(--primary);
  color: white;
  font-size: 1rem;
  font-weight: 600;
  padding: 14px 24px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 150ms;
  margin-top: 20px;
}

.action-btn:hover:not(:disabled) {
  background: var(--primary-hover);
  transform: translateY(-2px);
}

.action-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.status-message {
  background: var(--bg-subtle);
  border-left: 4px solid var(--primary);
  border-radius: 8px;
  padding: 12px;
  margin-top: 16px;
  font-size: 0.875rem;
  color: var(--text-primary);
}

.status-message.success {
  background: rgba(16, 185, 129, 0.1);
  border-left-color: var(--success);
}

.status-message.error {
  background: rgba(239, 68, 68, 0.1);
  border-left-color: var(--error);
}

.tx-link {
  color: var(--primary);
  font-weight: 600;
  text-decoration: none;
}

.tx-link:hover {
  text-decoration: underline;
}

/* Recent Sales Sidebar */
.sales-sidebar {
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 20px;
  height: fit-content;
  position: sticky;
  top: 80px;
}

.sales-title {
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-muted);
  margin-bottom: 16px;
}

.sales-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.sale-item {
  padding: 12px;
  background: var(--bg-subtle);
  border: 1px solid var(--border-subtle);
  border-radius: 8px;
  animation: slideIn 0.3s ease;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.sale-address {
  font-family: 'Monaco', monospace;
  font-size: 0.6875rem;
  color: var(--text-muted);
  margin-bottom: 4px;
}

.sale-details {
  font-size: 0.8125rem;
  color: var(--text-secondary);
  margin-bottom: 2px;
}

.sale-value {
  font-size: 0.75rem;
  color: var(--success);
  font-weight: 600;
}

.stats-section {
  max-width: 800px;
  margin: 32px auto 0;
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 24px;
  text-align: center;
}

.stats-title {
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--text-muted);
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.stats-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}

.stat-value {
  font-size: 2rem;
  font-weight: 800;
  color: var(--primary);
  margin-bottom: 4px;
  font-variant-numeric: tabular-nums;
}

.stat-label {
  font-size: 0.875rem;
  color: var(--text-secondary);
  font-weight: 500;
}

.progress-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.progress-card {
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 32px;
  max-width: 400px;
  width: 90%;
  text-align: center;
}

.progress-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 20px;
  color: var(--text-primary);
}

.progress-bar-container {
  background: var(--bg-subtle);
  border-radius: 8px;
  height: 8px;
  overflow: hidden;
  margin-bottom: 16px;
}

.progress-bar-fill {
  background: linear-gradient(90deg, var(--primary), var(--success));
  height: 100%;
  animation: progressFill 3s ease-out forwards;
}

@keyframes progressFill {
  from { width: 0%; }
  to { width: 100%; }
}

.progress-message {
  font-size: 0.875rem;
  color: var(--text-secondary);
}

.info-box {
  background: var(--bg-subtle);
  border: 1px solid var(--border-subtle);
  border-radius: 10px;
  padding: 16px;
  margin-top: 16px;
}

.info-box-title {
  font-size: 0.8125rem;
  font-weight: 600;
  margin-bottom: 8px;
}

.info-list {
  font-size: 0.8125rem;
  color: var(--text-secondary);
  line-height: 1.6;
  padding-left: 20px;
}

.connect-prompt {
  text-align: center;
  padding: 48px;
}

.connect-prompt-text {
  font-size: 1rem;
  color: var(--text-secondary);
  margin-bottom: 24px;
}

@media (max-width: 968px) {
  .content-wrapper {
    grid-template-columns: 1fr;
  }
  .sales-sidebar {
    display: none;
  }
}

@media (max-width: 768px) {
  .hero-title { font-size: 2rem; }
  .wallet-info {
    flex-direction: column;
    align-items: flex-start;
  }
  .wallet-addresses {
    border-right: none;
    border-bottom: 1px solid var(--border-subtle);
    padding-right: 0;
    padding-bottom: 8px;
    width: 100%;
  }
  .stats-grid {
    grid-template-columns: 1fr;
  }
}

.connect-prompt { text-align: center; padding: 48px; }
.info-box { background: var(--bg-subtle); border: 1px solid var(--border-subtle); border-radius: 10px; padding: 16px; margin-top: 16px; }
.balance-compact { display: flex; flex-direction: column; align-items: flex-end; }
.balance-compact-token { font-size: 0.625rem; font-weight: 600; color: var(--text-muted); text-transform: uppercase; margin-bottom: 2px; }
.balance-compact-usd { font-size: 0.625rem; color: var(--text-muted); }
.wallet-balances-compact { display: flex; gap: 12px; }
.input-wrapper { position: relative; }
.tx-link { color: var(--primary); font-weight: 600; text-decoration: none; }
.tx-link:hover { text-decoration: underline; }
.info-list { font-size: 0.8125rem; color: var(--text-secondary); line-height: 1.6; padding-left: 20px; }
.wallet-address-item { display: flex; flex-direction: column; }
.form-balance { font-weight: 500; color: var(--text-secondary); }
.token-price { font-size: 0.75rem; color: var(--text-secondary); }
.stats-title { font-size: 0.75rem; font-weight: 700; color: var(--text-muted); margin-bottom: 20px; text-transform: uppercase; letter-spacing: 0.05em; }
.info-box-title { font-size: 0.8125rem; font-weight: 600; margin-bottom: 8px; }
.connect-prompt-text { font-size: 1rem; color: var(--text-secondary); margin-bottom: 24px; }
.progress-title { font-size: 1.25rem; font-weight: 700; margin-bottom: 20px; color: var(--text-primary); }
.progress-message { font-size: 0.875rem; color: var(--text-secondary); }

/* Manual Send Option */
.manual-send-option { margin-top: 24px; padding-top: 24px; border-top: 1px solid var(--border-subtle); }
.divider { text-align: center; margin-bottom: 16px; position: relative; }
.divider::before, .divider::after { content: ''; position: absolute; top: 50%; width: 40%; height: 1px; background: var(--border); }
.divider::before { left: 0; }
.divider::after { right: 0; }
.divider span { background: var(--bg-elevated); padding: 0 12px; font-size: 0.75rem; color: var(--text-muted); font-weight: 600; }
.manual-send-btn { width: 100%; background: transparent; color: var(--primary); font-size: 0.9375rem; font-weight: 600; padding: 12px 24px; border: 2px solid var(--primary); border-radius: 10px; cursor: pointer; transition: all 150ms; }
.manual-send-btn:hover:not(:disabled) { background: var(--primary); color: white; transform: translateY(-2px); }
.manual-send-btn:disabled { opacity: 0.3; cursor: not-allowed; }
.manual-send-hint { text-align: center; font-size: 0.75rem; color: var(--text-muted); margin-top: 8px; }

/* Manual Send Page */
.manual-send-page { min-height: 100vh; padding: 24px; }
.manual-send-container { max-width: 600px; margin: 0 auto; }
.back-btn { background: transparent; color: var(--text-secondary); font-size: 0.875rem; font-weight: 500; padding: 8px 16px; border: 1px solid var(--border); border-radius: 8px; cursor: pointer; transition: all 150ms; margin-bottom: 24px; }
.back-btn:hover { color: var(--text-primary); border-color: var(--text-primary); }
.manual-send-card { background: var(--bg-elevated); border: 1px solid var(--border); border-radius: 16px; padding: 32px; }
.manual-send-header { text-align: center; margin-bottom: 32px; }
.manual-send-title { font-size: 1.75rem; font-weight: 700; color: var(--text-primary); margin-bottom: 8px; }
.manual-send-description { font-size: 1rem; color: var(--text-secondary); }
.info-banner { display: flex; gap: 12px; padding: 16px; background: rgba(0, 102, 255, 0.1); border: 1px solid rgba(0, 102, 255, 0.3); border-radius: 10px; margin-bottom: 24px; }
.info-icon { font-size: 1.25rem; flex-shrink: 0; }
.info-text { font-size: 0.875rem; color: var(--text-secondary); line-height: 1.5; }
.qr-section { text-align: center; margin: 32px 0; }
.qr-label { font-size: 0.875rem; font-weight: 600; color: var(--text-primary); margin-bottom: 16px; }
.qr-container { display: inline-block; padding: 20px; background: var(--bg-subtle); border: 2px solid var(--border); border-radius: 12px; margin-bottom: 16px; }
.address-display { display: flex; align-items: center; gap: 8px; padding: 12px; background: var(--bg-subtle); border: 1px solid var(--border); border-radius: 10px; max-width: 100%; }
.address-code { font-family: 'Monaco', monospace; font-size: 0.75rem; color: var(--text-primary); word-break: break-all; flex: 1; }
.copy-btn-small { background: var(--primary); color: white; font-size: 0.75rem; font-weight: 600; padding: 6px 12px; border: none; border-radius: 6px; cursor: pointer; transition: all 150ms; white-space: nowrap; }
.copy-btn-small:hover { background: var(--primary-hover); }
.amount-summary { background: var(--bg-subtle); border: 1px solid var(--border); border-radius: 10px; padding: 16px; margin: 24px 0; }
.summary-row { display: flex; justify-content: space-between; align-items: center; font-size: 0.9375rem; margin-bottom: 8px; }
.summary-row:last-child { margin-bottom: 0; }
.summary-row span { color: var(--text-secondary); }
.summary-row strong { color: var(--text-primary); font-weight: 600; }
.input-hint { font-size: 0.75rem; color: var(--text-muted); margin-top: 4px; }
.warning-note { background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.3); border-radius: 10px; padding: 12px; margin-top: 16px; font-size: 0.8125rem; color: var(--text-secondary); }
.progress-section { padding: 24px 0; }
.progress-stage { text-align: center; margin-bottom: 32px; }
.stage-icon { font-size: 3rem; margin-bottom: 12px; }
.stage-message { font-size: 1.125rem; font-weight: 600; color: var(--text-primary); }
.progress-bar-wrapper { margin-bottom: 40px; }
.progress-bar-bg { background: var(--bg-subtle); border-radius: 10px; height: 12px; overflow: hidden; margin-bottom: 8px; }
.progress-bar-fill-manual { height: 100%; border-radius: 10px; transition: width 0.3s ease, background-color 0.3s ease; }
.progress-percent { text-align: center; font-size: 0.875rem; font-weight: 600; color: var(--text-secondary); }
.progress-timeline { display: flex; flex-direction: column; gap: 20px; margin-bottom: 32px; }
.timeline-step { display: flex; align-items: center; gap: 12px; opacity: 0.4; transition: opacity 0.3s; }
.timeline-step.active { opacity: 1; }
.timeline-dot { width: 12px; height: 12px; border-radius: 50%; background: var(--text-muted); flex-shrink: 0; }
.timeline-step.active .timeline-dot { background: var(--primary); box-shadow: 0 0 0 4px rgba(0, 102, 255, 0.2); }
.timeline-label { font-size: 0.875rem; color: var(--text-secondary); }
.timeline-step.active .timeline-label { color: var(--text-primary); font-weight: 600; }
.delivery-info { background: var(--bg-subtle); border: 1px solid var(--border); border-radius: 10px; padding: 16px; margin-bottom: 24px; }
.delivery-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; font-size: 0.875rem; }
.delivery-row:last-child { margin-bottom: 0; }
.delivery-row span { color: var(--text-muted); }
.delivery-address { font-family: 'Monaco', monospace; font-size: 0.75rem; color: var(--text-primary); background: var(--bg-dark); padding: 4px 8px; border-radius: 6px; max-width: 60%; overflow: hidden; text-overflow: ellipsis; }
.success-message { display: flex; gap: 16px; padding: 20px; background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.3); border-radius: 10px; }
.success-icon { font-size: 2rem; flex-shrink: 0; }
.success-text strong { display: block; font-size: 1rem; color: var(--text-primary); margin-bottom: 4px; }
.success-text p { font-size: 0.875rem; color: var(--text-secondary); margin: 0; }
