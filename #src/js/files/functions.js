let isMobile = {
	Android: function () {
		 return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		 return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		 return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		 return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		 return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		 return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
	}
};

function addZero(num) {
   return num > 9 ? num : '0' + num;
}