function RenderPopup(item) {
  const orgProp = [];
  // верстка модального окна
  // language=HTML
  if (item.trosta) orgProp.push("<div class=\"orgPropsContainer\"><img src=\"./assets/trosta.png\"><div class=\"orgPropsText\">ТОЧКА РОСТА</div></div>");
  if (item.scoc) orgProp.push("<div class=\"orgPropsContainer\"><img src=\"./assets/cos.png\"><div class=\"orgPropsText\">Цифровая образовательная среда</div></div>");
  if (item.kvant) orgProp.push("<div class=\"orgPropsContainer\"><img src=\"./assets/kvant.png\"><div class=\"orgPropsText\">Кванториум</div></div>");
  if (item.itcube) orgProp.push("<div class=\"orgPropsContainer\"><img src=\"./assets/itcube.png\"><div class=\"orgPropsText\">it-Куб</div></div>");
  if (item.masterskaya) orgProp.push(`<div class="orgPropsMastery"><div class="orgPropsText">В этом учебном заведении есть мастерская</div>${item.mastery}</div>`);

  item.hot_meals
    ?
    orgProp.push(`
                    <details>
                      <summary>Информация об организации горячего питания</summary>
                        <div>
                          ${item.hot_meals}
                        </div>
                    </details>`)
    :
    orgProp.push(`<div>Информация по организации горячего питания отсутсвует</div>`);

  popupInfo =
    `
          <div class="orgPopup">
            <div>${item.name}</div>
            <div class="code-info"><p>Код образовательного учреждения:</p><p class="code">${item.code}</p></div>
            
            <div class="orgProps">
              ${orgProp.map((item) => item)}
            </div>
            
            <details>
              <summary>Контактные данные</summary>
              <div class="contacts">
                <div class="email-info"><p>Адрес электронной почты: </p><p class="email">${item.contacts.email}</p></div>
                <div style="display: flex; flex-direction: row; justify-content: end; width: fit-content; text-align: center; border: 1px solid black; border-radius: 5px; padding: 7px 10px 7px 10px">
                  <a href="https://${item.web_site}" style="width: fit-content; text-decoration: none" >Перейти на сайт</a>
                </div>
              </div>
            </details>
          </div>
      `;

  return popupInfo
}

async function RenderByType(type, markerLayer, variable) {

  const getByType = await DG.ajax(`/api/datalist/${type}`, {
    type: "get",
    data: {
      postalcode: 10504,
      country: "RU"
    },
    success: function(data) {
      return this.success;
    },
    error: function(error) {
      console.log("error", error);
    }
  });

  getByType.map((item) => {
      marker = DG.marker([item.k1, item.k2], {
        title: item.name          //заголовок маркера
      });
      marker.bindPopup(RenderPopup(item), {
        color: "#ffffff",
        fillColor: "#ffffff",
        closeButton: true,
        minWidth: 400,
        maxWidth: 600,
        maxHeight: 1200,
        keepInView: true,
        className: "popup-sula"
      });
      variable.addLayer(marker);
  });
  markerLayer.addLayer(variable);
}

async function RenderByProp(prop, markerLayer, variable) {

  const getByProp = await DG.ajax(`/api/datalist/${prop}`, {
    type: "get",
    data: {
      postalcode: 10504,
      country: "RU"
    },
    success: function(data) {
      return this.success;
    },
    error: function(error) {
      console.log("error", error);
    }
  });

  getByProp.map((item) => {
    marker = DG.marker([item.k1, item.k2], {
      title: item.name          //заголовок маркера
    });
    marker.bindPopup(RenderPopup(item), {
      color: "#ffffff",
      fillColor: "#ffffff",
      closeButton: true,
      minWidth: 400,
      maxWidth: 600,
      maxHeight: 1200,
      keepInView: true,
      className: "popup-sula"
    });
    variable.addLayer(marker);
  });
  markerLayer.addLayer(variable);
}

function removeByTypeOrg(markerLayer, variable) {
  variable.removeFrom(markerLayer);
  variable.clearLayers();
}

function removeByType(orgType, markerLayer) {
  var uncheck = document.getElementsByClassName("byPropName");
  var prop = document.getElementById(orgType);

  for (var i = 0; i < uncheck.length; i++) {
    if (uncheck[i].id != prop.id) {
      if (uncheck[i].type == "checkbox") {
        uncheck[i].checked = false;
      }

      switch (uncheck[i].id) {
        case "trosta":
          trosta.removeFrom(markerLayer);
          trosta.clearLayers();
          break;
        case "scoc":
          scoc.removeFrom(markerLayer);
          scoc.clearLayers();
          break;
        case "kvant":
          kvant.removeFrom(markerLayer);
          kvant.clearLayers();
          break;
        case "itcube":
          itcube.removeFrom(markerLayer);
          itcube.clearLayers();
          break;
        case "masterskaya":
          masterskaya.removeFrom(markerLayer);
          masterskaya.clearLayers();
          break;
      }
    }
  }
}

function removeByPropName(propName, markerLayer) {
  var uncheck = document.getElementsByClassName("byPropName");
  var prop = document.getElementById(propName);

  for (var i = 0; i < uncheck.length; i++) {
    if (uncheck[i].id !== prop.id) {
      if (uncheck[i].type === "checkbox") {
        uncheck[i].checked = false;
      }

      switch (uncheck[i].id) {
        case "trosta":
          trosta.removeFrom(markerLayer);
          trosta.clearLayers();
          break;
        case "scoc":
          scoc.removeFrom(markerLayer);
          scoc.clearLayers();
          break;
        case "kvant":
          kvant.removeFrom(markerLayer);
          kvant.clearLayers();
          break;
        case "masterskaya":
          masterskaya.removeFrom(markerLayer);
          masterskaya.clearLayers();
          break;
        case "itcube":
          itcube.removeFrom(markerLayer);
          itcube.clearLayers();
          break;

      }
    }
  }
}

function FilterByType(type, markerLayer, variable) {                                // добавление обработчика клика на инпуты

  document.getElementById(type).onchange = function() {

    if (this.checked) {

      uncheckPropFilter();

      removeByType("podved", markers);
      removeByType("spo", markers);
      removeByType("school", markers);
      removeByType("dop", markers);
      removeByType("dou", markers);

      removeByPropName("trosta", markers);
      removeByPropName("scoc", markers);
      removeByPropName("kvant", markers);
      removeByPropName("itcube", markers);
      removeByPropName("masterskaya", markers);

      RenderByType(type, markerLayer, variable);
      markerLayer.addLayer(variable);
    } else {
      variable.removeFrom(markerLayer);
      variable.clearLayers();
    }
  };
}

function FilterByProperty(propName, markerLayer, variable) {

  document.getElementById(propName).onchange = function() {

    if (this.checked) {

      uncheckTypeFilter();

      removeByTypeOrg(markers, podved);
      removeByTypeOrg(markers, spo);
      removeByTypeOrg(markers, school);
      removeByTypeOrg(markers, dou);
      removeByTypeOrg(markers, dop);

      removeByPropName(propName, markerLayer);

      RenderByProp(propName, markerLayer, variable);
      markerLayer.addLayer(variable);
    } else {
      variable.removeFrom(markerLayer);
      variable.clearLayers();
    }
  };
}

function uncheckTypeFilter(propName) {                                              // переключение checked у всех byOrgType

  var uncheck = document.getElementsByClassName("byOrgType");
  var prop = document.getElementById(propName);

  for (var i = 0; i < uncheck.length; i++) {

    if (uncheck[i].type === "checkbox" && uncheck !== prop) {
      uncheck[i].checked = false;
    }
  }
}

function uncheckPropFilter(propName) {                                              // переключение checked у всех byPropName

  var uncheck = document.getElementsByClassName("byPropName");
  var prop = document.getElementById(propName);

  for (var i = 0; i < uncheck.length; i++) {

    if (uncheck[i].type === "checkbox" && uncheck !== prop) {
      uncheck[i].checked = false;
    }
  }
}

function iconInit() {
  trostaIcon = DG.icon({
    iconUrl: "assets/trosta.png",
    iconSize: [70, 70]
  });

  scocIcon = DG.icon({
    iconUrl: "assets/cos.png",
    iconSize: [70, 70]
  });

  itcubeIcon = DG.icon({
    iconUrl: "assets/it-cube.png",
    iconSize: [70, 70]
  });

  anotherIcon = DG.icon({
    iconUrl: "assets/icon.png",
    iconSize: [70, 70]
  });
}