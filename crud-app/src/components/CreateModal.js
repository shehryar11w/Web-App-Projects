'use client'; // Ensure this component runs on the client-side

import { useRouter } from "next/navigation";

export default function Modal() {
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
    router.back(); // Close modal after form submission
  };

  return (
    <div className="modal d-flex justify-content-center align-items-center show" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Form Title</h5>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={() => router.back()}
            ></button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="inputName" className="form-label">Name</label>
                <input type="text" className="form-control" id="inputName" required />
              </div>
              <div className="mb-3">
                <label htmlFor="inputEmail" className="form-label">Email</label>
                <input type="email" className="form-control" id="inputEmail" required />
              </div>
              <div className="mb-3">
                <label htmlFor="inputMessage" className="form-label">Message</label>
                <textarea className="form-control" id="inputMessage" rows="3" required></textarea>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => router.back()}
              >
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
