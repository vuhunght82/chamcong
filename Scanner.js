import QrScanner from 'https://cdn.jsdelivr.net/npm/qr-scanner@1.4.2/qr-scanner.min.js';

// BẮT BUỘC - nếu không sẽ không quét được!!!
QrScanner.WORKER_PATH =
  'https://cdn.jsdelivr.net/npm/qr-scanner@1.4.2/qr-scanner-worker.min.js';

// Hàm khởi động scanner
export function initScanner(videoElem, onScan, onError) {
  const scanner = new QrScanner(
    videoElem,
    result => onScan(result),
    {
      highlightScanRegion: true,
      highlightCodeOutline: true
    }
  );

  scanner.start().catch(err => {
    if (onError) onError(err);
  });

  return scanner;
}
