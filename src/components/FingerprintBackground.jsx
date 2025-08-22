import React from "react";

export default function FingerprintBackground() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
      {/* Fingerprint scanner */}
      <div className="relative w-[1000px] h-[700px]">
        {/* Base fingerprint */}
        <div
          className="absolute inset-0 bg-center bg-no-repeat bg-contain"
          style={{
            backgroundImage:
              "url('https://raw.githubusercontent.com/QuickCodeAcademy/Finger-print-scan/main/thumbscan.svg')",
            filter: "drop-shadow(0 0 12px #00fff7)",
          }}
        ></div>

        {/* Scanning overlay */}
        <div
          className="absolute inset-0 bg-center bg-no-repeat bg-contain animate-[scan_3s_ease-in-out_infinite]"
          style={{
            backgroundImage:
              "url('https://raw.githubusercontent.com/QuickCodeAcademy/Finger-print-scan/main/thumb.svg')",
            filter: "drop-shadow(0 0 16px #39ff14)",
          }}
        ></div>

        {/* Scanning line */}
        <div className="absolute w-full h-[10px] rounded bg-[#00fff7] animate-[line_3s_ease-in-out_infinite] shadow-[0_0_20px_#00fff7]"></div>
      </div>

      {/* Scanning text */}
      <p className="mt-4 text-[#39ff14] text-lg animate-[blink_0.5s_ease-in-out_infinite] drop-shadow-[0_0_10px_#39ff14]">
        Scanning...
      </p>

      {/* Keyframes */}
      <style jsx>{`
        @keyframes blink {
          0%,
          100% {
            opacity: 0.2;
          }
          50% {
            opacity: 1;
          }
        }
        @keyframes line {
          0%,
          100% {
            top: 0%;
          }
          50% {
            top: 100%;
          }
        }
        @keyframes scan {
          0%,
          100% {
            height: 0%;
          }
          50% {
            height: 100%;
          }
        }
      `}</style>
    </div>
  );
}
