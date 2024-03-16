import React from 'react'

export default function Spinner() {
      // Spinner
      var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);
  
  return (
    <div>
    {/* Spinner Start */}
    <div id="spinner" className="show w-100 vh-100 bg-white position-fixed translate-middle top-50 start-50  d-flex align-items-center justify-content-center">
    <div className="spinner-grow text-primary" role="status" />
    </div>
    {/* Spinner End */}
    </div>
  )
}
