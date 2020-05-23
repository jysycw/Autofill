var j=[
"document.getElementById('member_id').value='atest';",
"document.getElementById('passwd').value='qwer1234!@';",
"document.getElementById('user_passwd_confirm').value='qwer1234!@'",
"document.getElementById('hint_answer').value='atest'",
"document.getElementById('name').value='에이스카운터'",
"document.getElementById('postcode1').value='06619'",
"document.getElementById('addr1').value='서울특별시 서초구 서초대로 398 (서초동)'",
"document.getElementById('addr2').value='플래티넘타워 5층'",
"document.getElementById('phone2').value='1234'",
"document.getElementById('phone3').value='1234'",
"document.getElementById('mobile2').value='1234'",
"document.getElementById('mobile3').value='1234'",
"document.getElementById('email1').value='acetest'",
"document.getElementById('email2').value='acetest.com'",
"document.getElementById('email3')[10].selected=true",

/*// 약관동의
"document.getElementById('agree_service_check0').checked=true",
"document.getElementById('agree_privacy_check0').checked=true"
*/
];

var o=[
// 주문자정보
"document.getElementById('oname').value='에이스카운터';",
"document.getElementById('ozipcode1').value='06619';",
"document.getElementById('oaddr1').value='서울특별시 서초구 서초대로 398 (서초동)';",
"document.getElementById('oaddr2').value='플래티넘타워 5층';",
"document.getElementById('ophone1_2').value='1234';",
"document.getElementById('ophone1_3').value='1234';",
"document.getElementById('ophone2_2').value='1234';",
"document.getElementById('ophone2_3').value='1234';",
"document.getElementById('oemail1').value='atest';",
"document.getElementById('oemail2').value='test.com';",

// 결제비밀번호
"document.getElementById('order_password').value='qwer1234';",
"document.getElementById('order_password_confirm').value='qwer1234';",

// 배송정보
"document.getElementById('rname').value='에이스카운터';",
"document.getElementById('rzipcode1').value='06619';",
"document.getElementById('raddr1').value='서울특별시 서초구 서초대로 398 (서초동)';",
"document.getElementById('raddr2').value='플래티넘타워 5층';",
"document.getElementById('rphone1_2').value='1234';",
"document.getElementById('rphone1_3').value='1234';",
"document.getElementById('rphone2_2').value='1234';",
"document.getElementById('rphone2_3').value='1234';",

// 입금자명, 입금은행
"document.getElementById('pname').value='에이스카운터';",
"document.getElementById('bankaccount')[1].selected=true",

/*// 약관동의
"document.getElementById('mallAgree').checked=true",
"document.getElementById('personAgree').checked=true",

//구매진행동의
"document.getElementById('chk_purchase_agreement0').checked=true"
*/
];


//가입
$(document).ready(function(){
	$('#join').click(function() {
		j.forEach(
		function joinMember(value) {
			chrome.tabs.executeScript({code:value});
			}
		);
		//alert('가입');
	});  
}); 
	
//주문
$(document).ready(function(){
	$('#order').click(function() {
		o.forEach(
		function buyItem(value) {
			chrome.tabs.executeScript({code:value});
			}
		);
		//alert('주문');
	});  
});