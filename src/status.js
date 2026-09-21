export function getStatus() {
  return "READY";
}

export function getStatusMessage() {
  return `${getStatus()} - 시스템 준비 완료`;
}
