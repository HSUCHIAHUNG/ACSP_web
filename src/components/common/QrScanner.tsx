// import React, { useState } from 'react';
// import QrScanner from 'react-qr-scanner';

// function QrScannerComponent() {
//   const [isScanning, setIsScanning] = useState(false);
//   const [result, setResult] = useState(null);

//   // 扫描成功时的处理函数
//   const handleScan = data => {
//     if (data) {
//       setResult(data);
//       setIsScanning(false); // 关闭扫描器
//     }
//   };

//   // 扫描错误时的处理函数
//   const handleError = err => {
//     console.error(err);
//   };

//    // 配置相机参数
//    const scanSettings = {
//     facingMode: 'environment', // 使用后置摄像头
//   };

//   return (
//     <div>
//       <button onClick={() => setIsScanning(true)}>开始扫描二维码</button>

//       {isScanning && (
//         <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
//           <QrScanner
//             onScan={handleScan}
//             onError={handleError}
//             constrains={scanSettings}
//             style={{ width: '100%', height: '100%' }}
//           />
//         </div>
//       )}

//       {result && (
//         <div>
//           <h2>扫描结果：</h2>
//           <p>{result}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default QrScannerComponent;
