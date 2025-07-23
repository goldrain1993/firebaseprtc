function signUp() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  if (!email || !password) {
    alert("이메일과 비밀번호를 입력하세요.");
    return;
  }
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      alert("회원가입 성공!");
    })
    .catch((error) => {
      alert("오류: " + error.message);
    });
}

// 회원가입 페이지용 함수
function signUpPage() {
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;
  const status = document.getElementById("signup-status");
  if (!email || !password) {
    status.innerText = "이메일과 비밀번호를 입력하세요.";
    return;
  }
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      status.innerText = "회원가입 성공! 이제 로그인 해주세요.";
    })
    .catch((error) => {
      status.innerText = "오류: " + error.message;
    });
}

function signIn() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      document.getElementById("user-status").innerText = email + "님 로그인됨";
    })
    .catch((error) => {
      alert("오류: " + error.message);
    });
}

function signOut() {
  firebase.auth().signOut().then(() => {
    document.getElementById("user-status").innerText = "로그아웃됨";
  });
}
