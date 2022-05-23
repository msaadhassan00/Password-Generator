let strng = document.getElementById("strng");
      let lwcase = document.getElementById("lwcase");
      let num = document.getElementById("num");
      let spec = document.getElementById("special");
      let gnrt = document.getElementById("gnrt");
      let inn = document.getElementById("in");

      let Uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let LowerCase = "abcdefghijklmnopqrstuvwxyz";
      let number = "0123456789";
      let special = `~!@#$%^&*(){}[]'`;

      function getUppCase() {
        let random;
        let password = "";
        for (let i = 0; i < 5; i++) {
          random = Uppercase[Math.floor(Math.random() * Uppercase.length)];
          password = password + random;
        }
        return password;
      }

      function getLowCase() {
        let random;
        let password = "";
        for (let i = 0; i < 5; i++) {
          random = LowerCase[Math.floor(Math.random() * LowerCase.length)];
          password = password + random;
        }
        return password;
      }

      function getNumber() {
        let random;
        let password = "";
        for (let i = 0; i < 5; i++) {
          random = number[Math.floor(Math.random() * number.length)];
          password = password + random;
        }
        return password;
      }

      function getSpecial() {
        let random;
        let password = "";
        for (let i = 0; i < 5; i++) {
          random = special[Math.floor(Math.random() * special.length)];
          password = password + random;
        }
        return password;
      }

      gnrt.addEventListener("click", () => {
        let main = [];
        let mainpassword = " ";
        for (let i = 0; i < 10; i++) {
          let value = generatePass();
          main = main + value;
          // console.log(main);
          mainpassword =
            mainpassword + main[Math.floor(Math.random() * main.length)];
        }
        console.log(mainpassword);
        inn.innerHTML = mainpassword;
      });

      function generatePass() {
        let ok = [];
        if (strng.checked) {
          ok.push(getUppCase());
        }
        if (lwcase.checked) {
          console.log("lowercASE");
          ok.push(getLowCase());
        }
        if (num.checked) {
          ok.push(getNumber());
        }
        if (spec.checked) {
          ok.push(getSpecial());
        }

        console.log(ok);

        return ok[Math.floor(Math.random() * ok.length)];
      }