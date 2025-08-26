// ai-response-ui.js

// This check prevents the "Identifier has already been declared" error.
// If the script is somehow injected twice, the second time it will do nothing.
if (typeof AIResponseUI === 'undefined') {
  // ai-response-ui.js

class AIResponseUI {
  constructor() {
      this.container = null;
      this.dragState = { isDragging: false, startX: 0, startY: 0, initialX: 0, initialY: 0 };

      // --- All CSS is now embedded here ---
      this.styles = `
          .ai-response-container {
              position: fixed;
              top: 30px;
              right: 30px;
              width: 400px;
              max-width: 90vw;
              max-height: 80vh;
              background-color: #ffffff;
              border: 1px solid #e0e0e0;
              border-radius: 12px;
              box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
              z-index: 2147483647;
              display: flex;
              flex-direction: column;
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
              color: #202124;
              font-size: 14px;
              overflow: hidden;
          }
          .ai-response-header {
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding: 10px 15px;
              background-color: #f6f8fa;
              border-bottom: 1px solid #e0e0e0;
              cursor: move;
              user-select: none;
          }
          .ai-response-header h3 {
              margin: 0;
              font-size: 15px;
              font-weight: 600;
          }
          .ai-response-close-btn {
              background: none;
              border: none;
              font-size: 24px;
              cursor: pointer;
              color: #5f6368;
              padding: 0 5px;
              line-height: 1;
          }
          .ai-response-close-btn:hover {
              color: #202124;
          }
          .ai-response-content {
              padding: 15px;
              overflow-y: auto;
              line-height: 1.6;
          }
          .ai-response-content pre {
              background-color: #f6f8fa;
              border: 1px solid #e0e0e0;
              border-radius: 6px;
              padding: 12px;
              overflow-x: auto;
              font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace;
              font-size: 13px;
          }
          .ai-response-content code {
              font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace;
              background-color: rgba(27, 31, 35, 0.05);
              border-radius: 3px;
              padding: 2px 4px;
          }
          .ai-response-content pre code {
              background-color: transparent;
              padding: 0;
          }
          .ai-response-content ul, .ai-response-content ol {
              padding-left: 20px;
          }
          .loader {
              width: 20px;
              height: 20px;
              border: 3px solid #f3f3f3;
              border-top: 3px solid #3498db;
              border-radius: 50%;
              animation: spin 1s linear infinite;
              margin: 20px auto;
          }
          @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
          }
      `;
  }

  show(initialContent = '<div class="loader"></div>') {
      if (document.getElementById('ai-response-container-wrapper')) {
          document.getElementById('ai-response-container-wrapper').remove();
      }

      // The main container is now just a wrapper with an ID
      this.container = document.createElement('div');
      this.container.id = 'ai-response-container-wrapper';
      const shadowRoot = this.container.attachShadow({ mode: 'open' });

      // Inject the styles and HTML structure directly
      shadowRoot.innerHTML = `
          <style>${this.styles}</style>
          <div class="ai-response-container">
              <div class="ai-response-header">
                  <h3>AI Response</h3>
                  <button class="ai-response-close-btn" title="Close">&times;</button>
              </div>
              <div class="ai-response-content">
                  ${initialContent}
              </div>
          </div>
      `;

      document.body.appendChild(this.container);

      const header = shadowRoot.querySelector('.ai-response-header');
      const closeButton = shadowRoot.querySelector('.ai-response-close-btn');
      
      closeButton.addEventListener('click', () => this.hide());
      header.addEventListener('mousedown', (e) => this.onDragStart(e));
      document.addEventListener('mousemove', (e) => this.onDrag(e));
      document.addEventListener('mouseup', () => this.onDragEnd());
  }

  update(htmlContent) {
      if (!this.container) return;
      const contentDiv = this.container.shadowRoot.querySelector('.ai-response-content');
      if (contentDiv) {
          contentDiv.innerHTML = htmlContent;
      }
  }

  hide() {
      if (this.container) {
          this.container.remove();
          this.container = null;
      }
  }

  // --- The Drag and Drop functions are more complex with Shadow DOM, let's fix them ---
  onDragStart(e) {
      if (e.target.classList.contains('ai-response-close-btn')) return;
      
      const uiPanel = this.container.shadowRoot.querySelector('.ai-response-container');
      this.dragState.isDragging = true;
      
      // e.clientX/Y are relative to the viewport. We need to find the panel's position relative to the viewport.
      const rect = uiPanel.getBoundingClientRect();
      this.dragState.startX = e.clientX;
      this.dragState.startY = e.clientY;
      this.dragState.initialX = rect.left;
      this.dragState.initialY = rect.top;
  }

  onDrag(e) {
      if (!this.dragState.isDragging) return;
      const dx = e.clientX - this.dragState.startX;
      const dy = e.clientY - this.dragState.startY;

      const uiPanel = this.container.shadowRoot.querySelector('.ai-response-container');
      uiPanel.style.left = `${this.dragState.initialX + dx}px`;
      uiPanel.style.top = `${this.dragState.initialY + dy}px`;
      uiPanel.style.right = 'auto'; // Override the initial 'right'
      uiPanel.style.bottom = 'auto'; // Override any potential 'bottom'
  }

  onDragEnd() {
      this.dragState.isDragging = false;
  }
}

// Make the UI accessible to the script that will be injected
window.aiResponseUI = new AIResponseUI();
}