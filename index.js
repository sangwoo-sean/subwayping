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

                map.appendChild(elem);
            });
    });
}
