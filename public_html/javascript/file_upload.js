
// Submit link event listener
document.getElementById('submit-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior
    document.getElementById('upload-form').submit(); // Trigger the form submission
});

// PDF Forms change event listener
document.getElementById('pdfForms').addEventListener('change', function(event) {
    const fileList = event.target.files;
    const fileListContainer = document.getElementById('file-list');
    fileListContainer.innerHTML = ''; // Clear previous file list
    let allFilesSelected = ['MembershipForm.pdf', 'ReleaseOfLiability.pdf', 'Waiver&Release.pdf'];
    let selectedFiles = [];
    for (let i = 0; i < fileList.length; i++) {
        const fileName = fileList[i].name;
        selectedFiles.push(fileName);
        const listItem = document.createElement('div');
        listItem.textContent = fileName;
        fileListContainer.appendChild(listItem);
    }
    const submitLink = document.getElementById('submit-link');
    if (allFilesSelected.every(file => selectedFiles.includes(file))) {
        submitLink.classList.remove('disabled');
        submitLink.style.pointerEvents = 'auto';
    } else {
        submitLink.classList.add('disabled');
        submitLink.style.pointerEvents = 'none';
    }
});
