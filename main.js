parent.document.head.innerHTML = `<link rel="shortcut icon" href="data:image/png;base64,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" type="image/x-icon">`;
