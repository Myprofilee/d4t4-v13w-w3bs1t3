// Firebase Get Data

// Firebase andrep
import('/firebase/andrep/home/firebase.min.js');

// Firebase andrep
import('/firebase/myzuu/home/firebase.min.js');

// Firebase Get Data




// Login Dashbaord
import('/assets/plugins/firebase/profile/firebase.min.js');

// Mengambil Data View andrep
import('/data/andrep/home/index.js');
// Mengambil Data View myzuu
import('/data/myzuu/home/index.js');



(() => {
    const includes = document.getElementsByTagName('include');
    [].forEach.call(includes, i => {
        let filePath = i.getAttribute('src');
        fetch(filePath).then(file => {
            file.text().then(content => {
                i.insertAdjacentHTML('afterend', content);
                i.remove();
            });
        });
    });
})();