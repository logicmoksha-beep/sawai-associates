import { FORM_STATUS } from "../hooks/useEnquiry";

export default function FormSuccess({ status, error }) {
  if (status === FORM_STATUS.SUCCESS) {
    return (
      <div
        className="form-success form-success--success"
        role="status"
        aria-live="polite"
      >
        <strong>✓ Submitted Successfully!</strong>
        <span>
          Thank you. Your details have been submitted successfully.
        </span>
      </div>
    );
  }

  if (status === FORM_STATUS.ERROR) {
    return (
      <div
        className="form-success form-success--error"
        role="alert"
        aria-live="assertive"
      >
        <strong>✕ Couldn't Submit</strong>
        <span>{error || "Something went wrong. Please try again."}</span>
      </div>
    );
  }

  return null;
}

