import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { QRCodeCanvas } from 'qrcode.react';

const RECIPIENT_MLDSA = '0x1fb89a7c4f373801139debbc5553e679cf9e50620c147e3602382b6f5251ca9c';

const PRICES = {
  PILL: 0.00002,
  MOTO: 0.05,
};

export default function ManualSendPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token') || 'MOTO';
  const amount = searchParams.get('amount') || '0';
  
  const [baseAddress, setBaseAddress] = useState('');
  const [hasStarted, setHasStarted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState(0);
  const [copied, setCopied] = useState(false);

  const usdValue = (parseFloat(amount) * PRICES[token]).toFixed(2);

  // Load saved state from localStorage
  useEffect(() => {
    const savedState = localStorage.getItem(`jeetswap_manual_${token}_${amount}`);
    if (savedState) {
      const state = JSON.parse(savedState);
      setBaseAddress(state.baseAddress || '');
      setHasStarted(state.hasStarted || false);
      
      if (state.hasStarted && state.startTime) {
        const elapsed = Date.now() - state.startTime;
        const minutes = elapsed / 60000;
        
        if (minutes < 5) {
          setStage(0);
          setProgress((minutes / 5) * 100);
        } else if (minutes < 15) {
          setStage(1);
          setProgress(((minutes - 5) / 10) * 100);
        } else {
          setStage(2);
          setProgress(100);
        }
      }
    }
  }, [token, amount]);

  // Progress timer
  useEffect(() => {
    if (!hasStarted) return;

    const startTime = Date.now();
    localStorage.setItem(`jeetswap_manual_${token}_${amount}`, JSON.stringify({
      baseAddress,
      hasStarted: true,
      startTime,
    }));

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const minutes = elapsed / 60000;

      if (minutes < 5) {
        // Stage 0: Confirming receipt (0-5 min)
        setStage(0);
        setProgress((minutes / 5) * 100);
      } else if (minutes < 15) {
        // Stage 1: Received successfully (5-15 min)
        setStage(1);
        setProgress(((minutes - 5) / 10) * 100);
      } else {
        // Stage 2: USDT on the way (15+ min)
        setStage(2);
        setProgress(100);
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [hasStarted, token, amount, baseAddress]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(RECIPIENT_MLDSA);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Copy failed:', err);
    }
  };

  const handleStart = () => {
    if (!baseAddress || !baseAddress.startsWith('0x')) {
      alert('Please enter a valid Base address');
      return;
    }
    setHasStarted(true);
  };

  const getStageMessage = () => {
    switch (stage) {
      case 0:
        return `Confirming ${token} receipt...`;
      case 1:
        return `${token} received successfully! 🎉`;
      case 2:
        return 'USDT is on their way! 🚀';
      default:
        return '';
    }
  };

  const getStageColor = () => {
    switch (stage) {
      case 0:
        return 'var(--primary)';
      case 1:
        return 'var(--success)';
      case 2:
        return 'var(--success)';
      default:
        return 'var(--primary)';
    }
  };

  return (
    <div className="manual-send-page">
      <div className="manual-send-container">
        <button className="back-btn" onClick={() => navigate('/')}>
          ← Back to Swap
        </button>

        <div className="manual-send-card">
          <div className="manual-send-header">
            <h2 className="manual-send-title">
              {hasStarted ? 'Processing Your Transfer' : 'Send Tokens Manually'}
            </h2>
            <p className="manual-send-description">
              {hasStarted 
                ? `Tracking your ${amount} ${token} transfer`
                : `Send ${amount} ${token} directly from your OPWallet`
              }
            </p>
          </div>

          {!hasStarted ? (
            <>
              <div className="info-banner">
                <div className="info-icon">ℹ️</div>
                <div className="info-text">
                  <strong>Why manual send?</strong> Use this option if you don't have enough UTXOs 
                  or BTC for transaction fees. Simply send tokens directly from your wallet.
                </div>
              </div>

              <div className="qr-section">
                <div className="qr-label">Send {token} to this address:</div>
                <div className="qr-container">
                  <QRCodeCanvas
                    value={RECIPIENT_MLDSA}
                    size={200}
                    level="H"
                    includeMargin={true}
                    bgColor="#1a1a1a"
                    fgColor="#ffffff"
                  />
                </div>
                <div className="address-display">
                  <code className="address-code">{RECIPIENT_MLDSA}</code>
                  <button className="copy-btn-small" onClick={handleCopy}>
                    {copied ? '✓ Copied' : 'Copy'}
                  </button>
                </div>
              </div>

              <div className="amount-summary">
                <div className="summary-row">
                  <span>Sending:</span>
                  <strong>{amount} {token}</strong>
                </div>
                <div className="summary-row">
                  <span>You'll receive:</span>
                  <strong>≈ ${usdValue} USDT</strong>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Your Base USDT Address</label>
                <input
                  type="text"
                  className="input-field"
                  placeholder="0x..."
                  value={baseAddress}
                  onChange={(e) => setBaseAddress(e.target.value)}
                />
                <div className="input-hint">
                  Where you want to receive your USDT on Base Chain
                </div>
              </div>

              <button
                className="action-btn"
                onClick={handleStart}
                disabled={!baseAddress || !baseAddress.startsWith('0x')}
              >
                I Already Sent The Tokens
              </button>

              <div className="warning-note">
                <strong>⚠️ Important:</strong> Only click "I Already Sent" after you've 
                confirmed the transaction in your OPWallet. Processing time: ~4 hours.
              </div>
            </>
          ) : (
            <div className="progress-section">
              <div className="progress-stage">
                <div className="stage-icon">
                  {stage === 0 && '🔍'}
                  {stage === 1 && '✅'}
                  {stage === 2 && '🚀'}
                </div>
                <div className="stage-message">{getStageMessage()}</div>
              </div>

              <div className="progress-bar-wrapper">
                <div className="progress-bar-bg">
                  <div 
                    className="progress-bar-fill-manual"
                    style={{
                      width: `${progress}%`,
                      backgroundColor: getStageColor(),
                    }}
                  />
                </div>
                <div className="progress-percent">{Math.round(progress)}%</div>
              </div>

              <div className="progress-timeline">
                <div className={`timeline-step ${stage >= 0 ? 'active' : ''}`}>
                  <div className="timeline-dot" />
                  <div className="timeline-label">0-5 min: Confirming receipt</div>
                </div>
                <div className={`timeline-step ${stage >= 1 ? 'active' : ''}`}>
                  <div className="timeline-dot" />
                  <div className="timeline-label">5-15 min: Tokens received</div>
                </div>
                <div className={`timeline-step ${stage >= 2 ? 'active' : ''}`}>
                  <div className="timeline-dot" />
                  <div className="timeline-label">15+ min: USDT sent to Base</div>
                </div>
              </div>

              <div className="delivery-info">
                <div className="delivery-row">
                  <span>Destination:</span>
                  <code className="delivery-address">{baseAddress}</code>
                </div>
                <div className="delivery-row">
                  <span>Amount:</span>
                  <strong>≈ ${usdValue} USDT</strong>
                </div>
              </div>

              {stage === 2 && (
                <div className="success-message">
                  <div className="success-icon">🎉</div>
                  <div className="success-text">
                    <strong>Transfer Complete!</strong>
                    <p>Your USDT should arrive at {baseAddress} within the next hour.</p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
