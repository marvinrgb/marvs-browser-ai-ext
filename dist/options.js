"use strict";
// A list of all categories. The 'id' MUST match the category ID in background.ts.
const allCategories = [
    { id: 'cat-marketing', name: 'Marketing & SEO' },
    { id: 'cat-social', name: 'Social Media Management' },
    { id: 'cat-ecommerce', name: 'E-commerce & Shopping' },
    { id: 'cat-productivity', name: 'Productivity & Project Management' },
    { id: 'cat-learning', name: 'Learning & Education' },
    { id: 'cat-travel', name: 'Travel Planning' },
    { id: 'cat-developer', name: 'Developer Tools' },
    { id: 'cat-creative', name: 'Creative & Brainstorming' },
    { id: 'cat-career', name: 'Career & Professional Development' },
    { id: 'cat-communication', name: 'Communication & Interpersonal' },
    { id: 'cat-cooking', name: 'Cooking & Recipes' }
];
// Saves options to chrome.storage.sync
function saveOptions() {
    const apiKey = document.getElementById('api-key').value;
    const categorySettings = {};
    allCategories.forEach(category => {
        categorySettings[category.id] = document.getElementById(category.id).checked;
    });
    chrome.storage.sync.set({
        apiKey: apiKey,
        categorySettings: categorySettings
    }, () => {
        // Update status to let user know options were saved.
        const status = document.getElementById('status');
        status.textContent = 'Options saved.';
        setTimeout(() => {
            status.textContent = '';
        }, 1500);
    });
}
// Restores options from chrome.storage.sync
function restoreOptions() {
    // Generate checkboxes first
    const container = document.getElementById('category-checkboxes');
    allCategories.forEach(category => {
        const item = document.createElement('div');
        item.className = 'category-item';
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = category.id;
        checkbox.name = category.name;
        const label = document.createElement('label');
        label.htmlFor = category.id;
        label.textContent = category.name;
        item.appendChild(checkbox);
        item.appendChild(label);
        container.appendChild(item);
    });
    // Now, load the saved settings
    chrome.storage.sync.get(['apiKey', 'categorySettings'], (items) => {
        document.getElementById('api-key').value = items.apiKey || '';
        // Default to all true if no settings are saved yet
        const savedSettings = items.categorySettings || {};
        allCategories.forEach(category => {
            const checkbox = document.getElementById(category.id);
            if (checkbox) {
                // If a setting for a category is undefined, default it to true (visible)
                checkbox.checked = savedSettings[category.id] !== false;
            }
        });
    });
}
document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save-button').addEventListener('click', saveOptions);
