export default function FormSuccess({ show }) {
  if (!show) return null;
  return (
    <div className="form-success" role="status" aria-live="polite">
      <strong>✓ Submitted Successfully!</strong>
      <span>Thank you. Your details have been submitted successfully.</span>
    </div>
  );
}
