var j=[
"document.getElementById('member_id').value='atest';",
"document.getElementById('passwd').value='qwer1234!@';",
"document.getElementById('user_passwd_confirm').value='qwer1234!@'",
"document.getElementById('hint_answer').value='atest'",
"document.getElementById('name').value='���̽�ī����'",
"document.getElementById('postcode1').value='06619'",
"document.getElementById('addr1').value='����Ư���� ���ʱ� ���ʴ�� 398 (���ʵ�)'",
"document.getElementById('addr2').value='�÷�Ƽ��Ÿ�� 5��'",
"document.getElementById('phone2').value='1234'",
"document.getElementById('phone3').value='1234'",
"document.getElementById('mobile2').value='1234'",
"document.getElementById('mobile3').value='1234'",
"document.getElementById('email1').value='acetest'",
"document.getElementById('email2').value='acetest.com'",
"document.getElementById('email3')[10].selected=true",

/*// �������
"document.getElementById('agree_service_check0').checked=true",
"document.getElementById('agree_privacy_check0').checked=true"
*/
];

var o=[
// �ֹ�������
"document.getElementById('oname').value='���̽�ī����';",
"document.getElementById('ozipcode1').value='06619';",
"document.getElementById('oaddr1').value='����Ư���� ���ʱ� ���ʴ�� 398 (���ʵ�)';",
"document.getElementById('oaddr2').value='�÷�Ƽ��Ÿ�� 5��';",
"document.getElementById('ophone1_2').value='1234';",
"document.getElementById('ophone1_3').value='1234';",
"document.getElementById('ophone2_2').value='1234';",
"document.getElementById('ophone2_3').value='1234';",
"document.getElementById('oemail1').value='atest';",
"document.getElementById('oemail2').value='test.com';",

// ������й�ȣ
"document.getElementById('order_password').value='qwer1234';",
"document.getElementById('order_password_confirm').value='qwer1234';",

// �������
"document.getElementById('rname').value='���̽�ī����';",
"document.getElementById('rzipcode1').value='06619';",
"document.getElementById('raddr1').value='����Ư���� ���ʱ� ���ʴ�� 398 (���ʵ�)';",
"document.getElementById('raddr2').value='�÷�Ƽ��Ÿ�� 5��';",
"document.getElementById('rphone1_2').value='1234';",
"document.getElementById('rphone1_3').value='1234';",
"document.getElementById('rphone2_2').value='1234';",
"document.getElementById('rphone2_3').value='1234';",

// �Ա��ڸ�, �Ա�����
"document.getElementById('pname').value='���̽�ī����';",
"document.getElementById('bankaccount')[1].selected=true",

/*// �������
"document.getElementById('mallAgree').checked=true",
"document.getElementById('personAgree').checked=true",

//�������ൿ��
"document.getElementById('chk_purchase_agreement0').checked=true"
*/
];


//����
$(document).ready(function(){
	$('#join').click(function() {
		j.forEach(
		function joinMember(value) {
			chrome.tabs.executeScript({code:value});
			}
		);
		//alert('����');
	});  
}); 
	
//�ֹ�
$(document).ready(function(){
	$('#order').click(function() {
		o.forEach(
		function buyItem(value) {
			chrome.tabs.executeScript({code:value});
			}
		);
		//alert('�ֹ�');
	});  
});