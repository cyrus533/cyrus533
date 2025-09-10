<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Cyrus Data Hub - Buy Data Bundle</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background: linear-gradient(135deg, #ffcb05 50%, #e60000 50%);
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }
    .container {
      background: #fff;
      padding: 25px;
      border-radius: 12px;
      box-shadow: 0 8px 20px rgba(0,0,0,0.2);
      max-width: 400px;
      width: 100%;
      text-align: center;
    }
    h2 { margin-bottom: 20px; color: #333; }
    label { font-weight: bold; display: block; margin-top: 10px; text-align: left; }
    input, select {
      width: 100%; padding: 10px; margin-top: 5px;
      border: 1px solid #ccc; border-radius: 8px; font-size: 14px;
    }
    button {
      margin-top: 20px; width: 100%; padding: 12px;
      background: linear-gradient(90deg, #ffcb05, #e60000);
      border: none; border-radius: 8px; color: white;
      font-weight: bold; font-size: 16px; cursor: pointer; transition: 0.3s ease;
    }
    button:hover { opacity: 0.9; transform: scale(1.02); }
    .preview { margin-top: 15px; font-size: 14px; font-weight: bold; color: #444; }
  </style>
</head>
<body>
  <div class="container">
    <h2>Buy Data Bundle</h2>
    <form id="orderForm" action="send_order.php" method="POST">
      <label>Phone Number (10 digits):</label>
      <input type="text" name="phone" pattern="[0-9]{10}" required>

      <!-- MTN bundles -->
      <label>MTN Bundle:</label>
      <select name="mtn_bundle" id="mtn_bundle">
        <option value="">--Select--</option>
        <option value="1GB - GHC 6">1GB - GHC 6</option>
        <option value="2GB - GHC 11">2GB - GHC 11</option>
        <option value="3GB - GHC 17">3GB - GHC 17</option>
        <option value="4GB - GHC 22">4GB - GHC 22</option>
        <option value="5GB - GHC 26">5GB - GHC 26</option>
        <option value="6GB - GHC 31">6GB - GHC 31</option>
        <option value="7GB - GHC 35">7GB - GHC 35</option>
        <option value="8GB - GHC 45">8GB - GHC 45</option>
        <option value="9GB - GHC 50">9GB - GHC 50</option>
        <option value="10GB - GHC 50">10GB - GHC 50</option>
        <option value="15GB - GHC 67">15GB - GHC 67</option>
        <option value="20GB - GHC 86">20GB - GHC 86</option>
        <option value="25GB - GHC 135">25GB - GHC 135</option>
        <option value="30GB - GHC 145">30GB - GHC 145</option>
        <option value="40GB - GHC 165">40GB - GHC 165</option>
      </select>

      <!-- Vodafone bundles -->
      <label>Vodafone Bundle:</label>
      <select name="vodafone_bundle" id="vodafone_bundle">
        <option value="">--Select--</option>
        <option value="5GB - GHC 25">5GB - GHC 25</option>
        <option value="10GB - GHC 50">10GB - GHC 50</option>
        <option value="15GB - GHC 68">15GB - GHC 68</option>
        <option value="20GB - GHC 85">20GB - GHC 85</option>
        <option value="30GB - GHC 125">30GB - GHC 125</option>
        <option value="40GB - GHC 147">40GB - GHC 147</option>
        <option value="50GB - GHC 220">50GB - GHC 220</option>
      </select>

      <div class="preview" id="bundlePreview">No bundle selected yet</div>

      <button type="submit">Submit Order</button>
    </form>
  </div>

  <script>
    const mtnSelect = document.getElementById('mtn_bundle');
    const vodaSelect = document.getElementById('vodafone_bundle');
    const preview = document.getElementById('bundlePreview');

    function updatePreview() {
      let mtn = mtnSelect.value;
      let voda = vodaSelect.value;
      if (mtn && voda) {
        preview.textContent = "⚠ You cannot select both. Please choose one.";
      } else if (mtn) {
        preview.textContent = "You selected MTN: " + mtn;
      } else if (voda) {
        preview.textContent = "You selected Vodafone: " + voda;
      } else {
        preview.textContent = "No bundle selected yet";
      }
    }

    mtnSelect.addEventListener('change', updatePreview);
    vodaSelect.addEventListener('change', updatePreview);
  </script>
</body>
</html>
