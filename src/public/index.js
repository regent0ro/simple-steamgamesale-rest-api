const indexURL = "http://localhost:3000";
const columns = ["name", "rel_date", "price", "discounted_price"];
//functions
const addGame = async () => {
  const post_form_parts = "#POST>form>div>input";
  const new_game = {};

  //validate
  for (const key of columns) {
    new_game[key] = document.querySelector(`${post_form_parts}#${key}`).value;
    if (new_game[key] === "") {
      alert("空の値があります！");
      return false;
    }
  }

  new_game.discount_per = (
    (parseFloat(new_game.discounted_price) / parseFloat(new_game.price)) *
    100
  ).toFixed(2);
  console.log(new_game);
  const method = "POST";
  const body = JSON.stringify(new_game);
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  await fetch(`${indexURL}/games`, { method, headers, body })
    .then((response) => response.json())
    .then((data) => {
      console.log("Data created");
      console.log(data);
      alert("登録成功");
      scrollToTop();
      getGameList();
    })
    .catch((err) => console.log(err));
};

const patchGame = async () => {
  const patch_form_parts = "#PATCH>form>div>input";
  const patch_game = {};

  //validate
  const patched_game_id = document.querySelector(`${patch_form_parts}#gameid`)
    .value;
  if (patched_game_id === "") {
    alert("ゲームIDが空です！");
    return false;
  }

  for (const key of columns) {
    const path_data = document.querySelector(`${patch_form_parts}#${key}`)
      .value;
    if (path_data !== "") {
      patch_game[key] = path_data;
    }
  }

  const discount_per = document.querySelector(
    `${patch_form_parts}#discount_per`
  ).value;
  if (discount_per !== "") {
    patch_game.discount_per = discount_per;
  }

  const method = "PATCH";
  const body = JSON.stringify(patch_game);
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  await fetch(`${indexURL}/games/${patched_game_id}`, { method, headers, body })
    .then((response) => response.json())
    .then((data) => {
      console.log("Data modifyed");
      console.log(data);
      alert("修正成功");
      scrollToTop();
      getGameList();
    })
    .catch((err) => console.log(err));
};

const deleteGame = async () => {
  const delete_form_parts = "#DELETE>form>div>input";

  //validate
  const deleted_game_id = document.querySelector(`${delete_form_parts}#gameid`)
    .value;
  if (deleted_game_id === "") {
    alert("ゲームIDが空です！");
    return false;
  }

  const method = "DELETE";
  const body = "";
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  await fetch(`${indexURL}/games/${deleted_game_id}`, { method, headers, body })
    .then((response) => {
      console.log(`${deleted_game_id} Data deleted`);
      alert("削除成功");
      scrollToTop();
      getGameList();
    })
    .catch((err) => console.log(err));
};
async function getGameList() {
  const result = await fetch(`${indexURL}/games`)
    .then((response) => response.json())
    .catch((err) => console.log(err));

  const output = document.getElementById("gameList");
  output.innerHTML = json2Table(result);
}

//https://dev.to/boxofcereal/how-to-generate-a-table-from-json-data-with-es6-methods-2eel
function json2Table(json) {
  const cols = Object.keys(json[0]);
  const headerRow =
    "<th>id</th><th>ゲーム名</th><th>リリース日</th><th>価格</th><th>割引価格</th><th>割引率</th><th>セール</th>";
  const rows = json
    .map((row) => {
      let tds = cols
        .map((col) => {
          if (col !== "createdAt" && col !== "updatedAt") {
            return `<td>${row[col]}</td>`;
          }
          return "";
        })
        .join("");
      if (row.discounted_price !== "0.00") {
        tds += "<td class='sale_mark'>☆セール中!☆</td>";
      } else {
        tds += "<td></td>";
      }
      return `<tr>${tds}</tr>`;
    })
    .join("");

  //build the table
  const table = `
      <table>
          <thead>
              <tr>${headerRow}</tr>
          <thead>
          <tbody>
              ${rows}
          <tbody>
      <table>`;

  return table;
}

//https://hiroshi-yokota.com/2019/12/10/back-to-top/
function getScrolled() {
  return window.pageYOffset !== undefined
    ? window.pageYOffset
    : document.documentElement.scrollTop;
}

function scrollToTop() {
  const scrolled = getScrolled();
  window.scrollTo(0, Math.floor(scrolled / 2));
  if (scrolled > 0) {
    window.setTimeout(scrollToTop, 30);
  }
}

//window.onload
window.onload = () => {
  getGameList();
};

const newPostButton = document.querySelector("#POSTButton");
newPostButton.addEventListener("click", addGame);

const patchButton = document.querySelector("#PATCHButton");
patchButton.addEventListener("click", patchGame);

const deleteButton = document.querySelector("#DELETEButton");
deleteButton.addEventListener("click", deleteGame);
