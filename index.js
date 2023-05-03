function paintLines(lines) {
    map.innerHTML = "";

    Object.entries(lines).forEach(([line_name, info]) => {
        const { attr, stations } = info;
        const color = attr["data-color"];
        const label = attr["data-label"];

        stations
            .filter((station) => station["data-coords"])
            .forEach((station) => {
                const [x, y] = station["data-coords"].split(",");

                const elem = document.createElement("div");
                elem.style.backgroundColor = color;
                elem.classList.add("station");

                elem.style.top = `${y * zoom_ratio}px`;
                elem.style.left = `${x * zoom_ratio}px`;
                elem.style.width = `${zoom_ratio * 2}px`;
                elem.style.height = `${zoom_ratio * 2}px`;

                elem.dataset.x = x;
                elem.dataset.y = y;
                elem.dataset.name = station["station-nm"];
                elem.dataset.code = station["station-cd"];
                elem.dataset.uid = station["data-uid"];
                elem.dataset.marker = station["data-marker"];
                elem.dataset.line = line_name;
                elem.dataset.label = label;

                elem.addEventListener("mouseover", (e) => {
                    const station = e.currentTarget;
                    const { label, name, x, y } = station.dataset;

                    const info = document.querySelector("#info");
                    const [line_elem, name_elem] = info.children;
                    line_elem.innerText = label;
                    name_elem.innerText = name;
                    info.style.top = `${y * zoom_ratio}px`;
                    info.style.left = `${x * zoom_ratio}px`;
                    info.style.display = "block";
                });
                elem.addEventListener("mouseout", (e) => {
                    document.querySelector("#info").style.display = "none";
                });

                map.appendChild(elem);
            });
    });
}
