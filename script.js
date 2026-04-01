document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.action-btn');
    const mertImg = document.getElementById('mert-img');
    const progressBar = document.querySelector('.progress-bar');
    const progressText = document.querySelector('.progress-text');

    // Başlangıçta animasyonları tetiklemek için gecikmeli yükleme
    setTimeout(() => {
        progressBar.style.width = '65%';
    }, 500);

    buttons.forEach((btn, index) => {
        // Her buton için gecikmeli giriş animasyonudocument.addEventListener('DOMContentLoaded', () => {
    
    // 1. Canlı Saat ve Tarih Güncellemesi
    function updateDateTime() {
        const now = new Date();
        
        // Tarih formatı (Örn: 1 Nisan 2026)
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        document.getElementById('current-date').textContent = now.toLocaleDateString('tr-TR', options);
        
        // Saat formatı (Örn: 19:21)
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        document.getElementById('current-time').textContent = `${hours}:${minutes}`;
    }
    
    setInterval(updateDateTime, 1000);
    updateDateTime(); // İlk yüklemede hemen çalıştır

    // 2. İlerleme Çubuğu Animasyonu (Haberin yüklenmesi gibi)
    const progressBar = document.getElementById('study-progress');
    setTimeout(() => {
        progressBar.style.width = '65%';
    }, 500); // Yarım saniye sonra animasyon başlasın

    // 3. Kayan Yazı (Ticker) Güncellemeleri
    const tickerMessages = [
        "Tarihi anlar: Mert Bacak kitabın kapağını açtı... Gözlemciler şaşkın...",
        "GÜNCELLEME: İlk sayfa okundu, ikinci sayfaya geçiş yapılıyor...",
        "SON DURUM: Mert kahvesinden bir yudum aldı ve derin bir iç çekti...",
        "UZMAN YORUMU: 'Bu çalışma temposuyla sınavı geçme ihtimali masaya yatırıldı.'"
    ];
    
    let tickerIndex = 0;
    const tickerTextEl = document.getElementById('ticker-text');
    
    // Her animasyon bittiğinde (CSS animasyonu süresine bağlı olarak) metni değiştir
    tickerTextEl.addEventListener('animationiteration', () => {
        tickerIndex = (tickerIndex + 1) % tickerMessages.length;
        tickerTextEl.textContent = tickerMessages[tickerIndex];
    });

    // 4. Buton Etkileşimleri (Haber Detaylarına Gitme Simülasyonu)
    const buttons = document.querySelectorAll('.news-btn');
    
    buttons.forEach(btn => {
        btn.addEventListener('click', function() {
            const category = this.getAttribute('data-news');
            
            // Görsel üzerinde flaş patlama efekti (Paparazzi efekti)
            const img = document.getElementById('mert-img');
            img.style.filter = 'brightness(2) grayscale(1)';
            setTimeout(() => {
                img.style.filter = 'contrast(1.1) saturate(1.1)';
            }, 150);

            // Butona tıklandığında ilerleme çubuğunu azıcık arttır
            let currentWidth = parseInt(progressBar.style.width);
            if(currentWidth < 95) {
                progressBar.style.width = (currentWidth + 2) + '%';
                document.querySelector('.progress-text').textContent = `Tahmini İlerleme: ${currentWidth + 2}%`;
            }
        });
    });
});
        btn.style.animationDelay = `${index * 0.1}s`;

        btn.addEventListener('click', () => {
            handleButtonClick(btn.innerText);
        });
    });

    function handleButtonClick(action) {
        console.log(`Eylem tetiklendi: ${action}`);
        // Buraya her buton için farklı bir işlem/yönlendirme eklenebilir.
        // Ciddi bir tasarımda bu genellikle bir sayfa yönlendirmesi olurdu.
        
        // Örnek: Tıklayınca kısa bir parıltı efekti
        mertImg.style.filter = 'brightness(1.2)';
        setTimeout(() => {
            mertImg.style.filter = 'brightness(1)';
        }, 300);

        // İlerlemeyi dinamik olarak artırma (örnek)
        let currentWidth = parseInt(progressBar.style.width);
        if (currentWidth < 100) {
            let newWidth = currentWidth + 5;
            progressBar.style.width = `${newWidth}%`;
            progressText.innerText = `${newWidth}% Tamamlandı`;
        }
    }
});