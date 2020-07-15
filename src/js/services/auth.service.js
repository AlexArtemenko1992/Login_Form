import axios from "axios";
import API_ENV from "../config/api.config";

export async function login(email, password) {
  try {
    const response = await axios.post(
      `${API_ENV.apiUrl}/auth/login`,
      JSON.stringify({ email, password }),
      {
        headers: {
          "Content-type": "application/json",
        },
      },
    );
    console.log(response);

    if (response.statusText === "OK") {
      setTimeout(() => {
        const hello = `
          <div class='hello-msg'>
            <span class='close'><i class="fas fa-times"></i></span>
            <h1>Hello dear friend. It's my first login/signup app</h1>
          </div>
        `;
        document.body.insertAdjacentHTML("afterbegin", hello);
        const close = document.querySelector(".close");
        close.addEventListener("click", (e) => {
          document.querySelector(".hello-msg").remove();
        });
      }, 1500);
    }

    return response.data;
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
}

export async function signup(
  email,
  password,
  nickname,
  first_name,
  last_name,
  phone,
  gender_orientation,
  city,
  country,
  data,
) {
  const newData = new Date(data);

  const user = {
    email,
    password,
    nickname,
    first_name,
    last_name,
    phone,
    gender_orientation,
    city,
    country,
    date_of_birth_day: newData.getDay(),
    date_of_birth_month: newData.getMonth(),
    date_of_birth_year: newData.getFullYear(),
  };

  console.log(user);

  try {
    const response = await fetch(`${API_ENV.apiUrl}/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    return response.json();
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
}
