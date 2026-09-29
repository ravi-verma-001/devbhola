// Dovix Media & Dev Bhola — Ultra Modern Interactive Controller

// DEV BHOLA DIRECT CONTACT CONFIGURATION
const DEV_CONTACT_CONFIG = {
  email: 'devbhola.in@gmail.com',
  whatsapp: '916267777534',
  whatsappDisplay: '+91 62677 77534',
  bookingUrl: '#'
};

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // 1. Mouse Spotlight Card Effect (Modern Apple/Linear design feature)
  const spotlightCards = document.querySelectorAll('.spotlight-card');
  spotlightCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });

  // 2. Mobile Floating Nav Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      const isHidden = mobileMenu.classList.toggle('hidden');
      const icon = mobileMenuBtn.querySelector('i');
      if (icon) {
        icon.setAttribute('data-lucide', isHidden ? 'menu' : 'x');
        if (window.lucide) window.lucide.createIcons();
      }
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        const icon = mobileMenuBtn.querySelector('i');
        if (icon) {
          icon.setAttribute('data-lucide', 'menu');
          if (window.lucide) window.lucide.createIcons();
        }
      });
    });
  }

  // 3. Interactive ROAS & Growth Simulator (Indian Rupees ₹)
  const spendSlider = document.getElementById('calc-spend');
  const aovSlider = document.getElementById('calc-aov');
  const spendDisplay = document.getElementById('calc-spend-val');
  const aovDisplay = document.getElementById('calc-aov-val');
  
  const projectedRevenueEl = document.getElementById('projected-revenue');
  const projectedRoasEl = document.getElementById('projected-roas');
  const netLiftEl = document.getElementById('net-profit-lift');
  const estimatedOrdersEl = document.getElementById('estimated-orders');

  function calculateGrowth() {
    if (!spendSlider || !aovSlider) return;

    const spend = parseFloat(spendSlider.value) || 50000;
    const aov = parseFloat(aovSlider.value) || 1500;

    spendDisplay.textContent = `₹${spend.toLocaleString('en-IN')}/mo`;
    aovDisplay.textContent = `₹${aov.toLocaleString('en-IN')}`;

    // Dynamic performance scaling model
    let benchmarkRoas = 5.2;
    if (spend >= 100000) benchmarkRoas = 4.8;
    if (spend >= 250000) benchmarkRoas = 4.3;
    if (spend >= 500000) benchmarkRoas = 3.9;

    const projectedRevenue = spend * benchmarkRoas;
    const baselineRevenue = spend * 2.0; // Industry standard baseline
    const netProfitLift = projectedRevenue - baselineRevenue;
    const estimatedOrders = Math.round(projectedRevenue / aov);

    if (projectedRevenueEl) projectedRevenueEl.textContent = `₹${Math.round(projectedRevenue).toLocaleString('en-IN')}`;
    if (projectedRoasEl) projectedRoasEl.textContent = `${benchmarkRoas.toFixed(1)}x`;
    if (netLiftEl) netLiftEl.textContent = `+₹${Math.round(netProfitLift).toLocaleString('en-IN')}`;
    if (estimatedOrdersEl) estimatedOrdersEl.textContent = `${estimatedOrders.toLocaleString('en-IN')} orders`;
  }

  if (spendSlider && aovSlider) {
    spendSlider.addEventListener('input', calculateGrowth);
    aovSlider.addEventListener('input', calculateGrowth);
    calculateGrowth();
  }

  // 4. Case Studies Category Filter
  const filterBtns = document.querySelectorAll('.modern-tab-btn');
  const caseCards = document.querySelectorAll('.case-study-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      caseCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category.includes(filter)) {
          card.style.display = 'block';
          card.style.opacity = '0';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transition = 'opacity 0.3s ease';
          }, 50);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 5. FAQ Accordion Logic
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    const answerEl = item.querySelector('.faq-answer');
    const icon = item.querySelector('.faq-icon');

    if (questionBtn && answerEl) {
      questionBtn.addEventListener('click', () => {
        const isCurrentlyOpen = !answerEl.classList.contains('hidden');

        // Close all other FAQs
        faqItems.forEach(otherItem => {
          const otherAnswer = otherItem.querySelector('.faq-answer');
          const otherIcon = otherItem.querySelector('.faq-icon');
          if (otherAnswer && otherAnswer !== answerEl) {
            otherAnswer.classList.add('hidden');
            if (otherIcon) otherIcon.style.transform = 'rotate(0deg)';
          }
        });

        if (isCurrentlyOpen) {
          answerEl.classList.add('hidden');
          if (icon) icon.style.transform = 'rotate(0deg)';
        } else {
          answerEl.classList.remove('hidden');
          if (icon) icon.style.transform = 'rotate(180deg)';
        }
      });
    }
  });

  // 6. Lead Capture & Free Consultation Modal
  const modal = document.getElementById('audit-modal');
  const openModalBtns = document.querySelectorAll('.trigger-audit-modal');
  const closeModalBtn = document.getElementById('close-modal-btn');
  const auditForm = document.getElementById('meta-audit-form');
  const successState = document.getElementById('form-success-state');
  const waSuccessBtn = document.getElementById('wa-forward-btn');

  function openModal() {
    if (modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeModal() {
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  }

  openModalBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  });

  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeModal);
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
      closeModal();
    }
  });

  // Handle Form Submission
  if (auditForm) {
    auditForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('audit-name')?.value.trim();
      const email = document.getElementById('audit-email')?.value.trim();
      const website = document.getElementById('audit-website')?.value.trim();
      const spend = document.getElementById('audit-spend')?.value;
      const goals = document.getElementById('audit-goals')?.value.trim();

      if (!name || !email || !website) {
        alert('Please fill in your name, work email, and store/website URL.');
        return;
      }

      // Store inquiry in localStorage
      try {
        const stored = JSON.parse(localStorage.getItem('dovix_leads') || '[]');
        stored.push({ name, email, website, spend, goals, date: new Date().toISOString() });
        localStorage.setItem('dovix_leads', JSON.stringify(stored));
      } catch (err) {
        console.error(err);
      }

      // Pre-fill WhatsApp message directly to Dev Bhola's number
      const encodedMsg = encodeURIComponent(
        `Hi Dev! I just requested a Free Consultation on your portfolio.\n\n` +
        `👤 Name: ${name}\n` +
        `🌐 Website: ${website}\n` +
        `✉️ Email: ${email}\n` +
        `💰 Monthly Spend: ${spend}\n` +
        `🎯 Current Goal / Bottleneck: ${goals || 'Scaling profitably'}\n\n` +
        `Looking forward to connecting!`
      );

      if (waSuccessBtn) {
        waSuccessBtn.href = `https://wa.me/${DEV_CONTACT_CONFIG.whatsapp}?text=${encodedMsg}`;
      }

      // Hide form, reveal sleek success confirmation
      auditForm.classList.add('hidden');
      if (successState) {
        successState.classList.remove('hidden');
      }
    });
  }

  // 7. Dynamic Number Counters
  const countUpEls = document.querySelectorAll('.count-up');
  let hasAnimated = false;

  function runCounters() {
    if (hasAnimated) return;

    const targetSection = document.getElementById('metrics-strip') || document.getElementById('about');
    if (!targetSection) return;

    const rect = targetSection.getBoundingClientRect();
    if (rect.top <= window.innerHeight * 0.9) {
      hasAnimated = true;
      countUpEls.forEach(el => {
        const target = parseFloat(el.getAttribute('data-target'));
        const prefix = el.getAttribute('data-prefix') || '';
        const suffix = el.getAttribute('data-suffix') || '';
        const decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);
        const duration = 1800;
        const start = performance.now();

        function step(now) {
          const progress = Math.min((now - start) / duration, 1);
          const easeOut = 1 - Math.pow(1 - progress, 3);
          const current = (easeOut * target).toFixed(decimals);

          el.textContent = `${prefix}${current}${suffix}`;

          if (progress < 1) {
            requestAnimationFrame(step);
          } else {
            el.textContent = `${prefix}${target.toFixed(decimals)}${suffix}`;
          }
        }
        requestAnimationFrame(step);
      });
    }
  }

  window.addEventListener('scroll', runCounters);
  runCounters();
});
