async function downloadResume() {
  const filename = 'Evan_Resume_.pdf';
  const response = await fetch('Evan_Resume_.pdf');
  const blob = await response.blob();

  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();

  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
