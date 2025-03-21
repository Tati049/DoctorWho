const navToggle = document.getElementById('navToggle'); // Updated ID
const mainNav = document.getElementById('mainNav'); // Updated ID

// Hide/show navbar on scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) { 
    mainNav.classList.add('hidden'); 
    navToggle.style.display = 'block';
  } else {
    mainNav.classList.remove('hidden');
    navToggle.style.display = 'none';
  }
});

// Toggle navbar visibility on button click
navToggle.addEventListener('click', () => {
  mainNav.classList.toggle('column'); 
  mainNav.classList.toggle('hidden'); 
});

// Panel functionality
const panels = document.querySelectorAll('.panel'); // Updated class name

panels.forEach((panel) => { 
  panel.addEventListener('click', () => {  
    removeActiveClasses();
    panel.classList.add('active'); 
  });
});

function removeActiveClasses() {
  panels.forEach(panel => {
    panel.classList.remove('active');
  });
}

// Enemy box hover effect
document.addEventListener('DOMContentLoaded', function() {
  const boxes = document.querySelectorAll('.enemyBox'); // Updated class name

  boxes.forEach(box => {
    box.addEventListener('mouseenter', () => {
      box.style.transform = 'rotateY(180deg)';
    });

    box.addEventListener('mouseleave', () => {
      box.style.transform = 'rotateY(0deg)';
    });
  });
});

// Show companion info
function showCompanionInfo(companionId) {
  const allInfos = document.querySelectorAll('.companionInfo .info'); // Updated class name
  allInfos.forEach(info => info.style.display = 'none');

  const selectedInfo = document.getElementById(companionId);
  if (selectedInfo) {
    selectedInfo.style.display = 'block';
  }
}

// Scroll gallery functionality
function scrollGallery(direction) {
  const gallery = document.querySelector('.galleryImages'); // Updated class name
  const scrollAmount = 200;
  const firstImage = gallery.firstElementChild;
  const lastImage = gallery.lastElementChild;

  if (direction === -1 && gallery.scrollTop === 0) {
    // Scroll to the bottom if at the top
    gallery.scrollTop = lastImage.offsetTop;
  } else if (direction === 1 && gallery.scrollTop + gallery.clientHeight >= gallery.scrollHeight) {
    // Scroll to the top if at the bottom
    gallery.scrollTop = 0;
  } else {
    // Scroll up or down
    gallery.scrollBy({ top: direction * scrollAmount, behavior: 'smooth' });
  }
}

// Show info for the first companion on page load
document.addEventListener('DOMContentLoaded', function() {
  const firstImage = document.querySelector('.galleryImages img'); // Updated class name
  if (firstImage) {
    const companionId = firstImage.getAttribute('onclick').match(/'(.*?)'/)[1];
    showCompanionInfo(companionId);
  }
});