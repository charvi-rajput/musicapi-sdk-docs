document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('pre > code').forEach((codeBlock) => {
        const button = document.createElement('button');
        button.className = 'copy-button';
        button.type = 'button';
        button.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" 
                 width="16" height="16" fill="currentColor" 
                 viewBox="0 0 16 16" style="vertical-align: middle; margin-right: 4px;">
                <path d="M10 1.5A1.5 1.5 0 0 1 11.5 3v9A1.5 1.5 0 0 1 10 13.5H4A1.5 1.5 0 0 1 2.5 12V3A1.5 1.5 0 0 1 4 1.5h6zM4 0a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H4z"/>
            </svg>
            <span>Copy</span>
        `;

        button.addEventListener('click', () => {
            navigator.clipboard.writeText(codeBlock.innerText).then(() => {
                button.querySelector('span').innerText = 'Copied!';
                setTimeout(() => {
                    button.querySelector('span').innerText = 'Copy';
                }, 2000);
            });
        });

        const pre = codeBlock.parentNode;
        pre.style.position = 'relative';

        pre.appendChild(button);
    });
});
