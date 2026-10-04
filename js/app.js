console.log("IMX JavaScript loaded successfully!");
// ==========================================
// GLOBAL IMX LANGUAGE STATE
// ==========================================
let currentLanguage = "en";

function t(en, id) {
    return currentLanguage === "id" ? id : en;
}

function setLanguage(language) {

    currentLanguage = language;

    const enButton = document.getElementById("langEN");
    const idButton = document.getElementById("langID");

    if (enButton && idButton) {
        enButton.classList.toggle("active", language === "en");
        idButton.classList.toggle("active", language === "id");
    }

    translateSidebar();

    const activeMenu = document.querySelector(".menu-btn.active");
    const activePage = activeMenu ? activeMenu.dataset.page : "single";

    showPage(activePage);
}
function translateSidebar() {

    const labels = {
        single: ["Single Pane", "Tampilan Terpadu"],
        problem: ["Problem Tank", "Pusat Masalah"],
        asset: ["Asset Health", "Kesehatan Aset"],
        earlywarning: ["Early Warning Intelligence", "Intelijen Peringatan Dini"],
        ai: ["AI Investigation", "Investigasi AI"],
        action: ["Action Hub", "Pusat Tindak Lanjut"],
        energy: ["Energy & Emission", "Energi & Emisi"],
        data: ["Data Foundation", "Fondasi Data"],
        search: ["Search / Ask IMX", "Cari / Tanya IMX"]
    };

    document.querySelectorAll(".menu-btn").forEach(function (button) {

        const page = button.dataset.page;

        if (labels[page]) {
            button.textContent =
                currentLanguage === "id"
                    ? labels[page][1]
                    : labels[page][0];
        }
    });

    const languageLabel = document.querySelector(".language-label");

    if (languageLabel) {
        languageLabel.textContent =
            currentLanguage === "id"
                ? "BAHASA"
                : "LANGUAGE";
    }
}
// ========================================
// GET ELEMENTS
// ========================================

const mainContent = document.getElementById("mainContent");
const menuButtons = document.querySelectorAll(".menu-btn");

console.log("Main content:", mainContent);
console.log("Menu buttons found:", menuButtons.length);


// ========================================
// MENU CLICK
// ========================================

menuButtons.forEach(function (button) {
    button.addEventListener("click", function () {

        const page = button.getAttribute("data-page");

        console.log("Menu clicked:", page);
        menuButtons.forEach(function (btn) {
            btn.classList.remove("active");
        });

        button.classList.add("active");
        showPage(page);

    });

});
// ========================================
// PAGE ROUTER
// ========================================
function showPage(page) {

    console.log("Opening page:", page);

    if (page === "single") {
        showSinglePane();
    }

    else if (page === "problem") {
        showProblemTank();
    }

    else if (page === "asset") {
        showAssetHealth();
    }

    else if (page === "earlywarning") {
    showEarlyWarningIntelligence();
    }

    else if (page === "ai") {
        showAIInvestigationHub();
    }

    else if (page === "action") {
        showActionHub();
    }

    else if (page === "energy") {
        showEnergyEmission();
    }

    else if (page === "data") {
        showDataFoundation();
    }

    else if (page === "search") {
        showSearchIMX();
    }
}
// ==========================================
// 01 — LOSS & DOWNTIME BY MONTH
// ==========================================

const monthlyCanvas =
    document.getElementById("lossDowntimeChart");

if (monthlyCanvas) {

    new Chart(monthlyCanvas, {
        type: "bar",

        data: {
            labels: [
                "Jan 24", "Feb 24", "Mar 24", "Apr 24", "May 24", "Jun 24",
                "Jul 24", "Aug 24", "Sep 24", "Oct 24", "Nov 24", "Dec 24",
                "Jan 25", "Feb 25", "Mar 25", "Apr 25", "May 25", "Jun 25",
                "Jul 25", "Aug 25", "Sep 25", "Oct 25", "Nov 25", "Dec 25",
                "Jan 26", "Feb 26", "Mar 26", "Apr 26", "May 26", "Jun 26",
                "Jul 26"
            ],

            datasets: [
                {
                    label: "Total Loss (kUS$)",
                    data: [
                        1520.60, 3106.32, 1139.03, 1833.30, 1984.14,
                        1338.00, 1552.00, 1335.00, 1207.00, 2365.00,
                        2820.00, 3480.00, 3290.00, 2110.00, 4100.00,
                        2180.00, 1450.00, 2330.00, 680.00, 2910.00,
                        1320.00, 1650.00, 690.00, 2220.00, 1620.00,
                        2040.00, 1785.14, 5560.69, 2186.58, 2854.78,
                        2356.51
                    ],
                    backgroundColor: "#246bb2",
                    borderRadius: 3,
                    yAxisID: "y"
                },

                {
                    label: "Downtime (h)",
                    data: [
                        60, 124.8, 44, 61.3, 81,
                        52, 63, 49, 44, 76,
                        89, 138, 112, 78, 141,
                        72, 48, 83, 25, 96,
                        46, 62, 26, 79,
                        55, 69, 63.8, 144.3, 76.2, 88.5, 72.5
                    ],
                    type: "line",
                    borderColor: "#f3a31b",
                    backgroundColor: "#f3a31b",
                    pointRadius: 2,
                    pointHoverRadius: 4,
                    tension: 0.3,
                    yAxisID: "y1"
                }
            ]
        },

        options: {
            responsive: true,
            maintainAspectRatio: false,

            interaction: {
                mode: "index",
                intersect: false
            },

            plugins: {
                legend: {
                    position: "bottom",
                    labels: {
                        boxWidth: 10,
                        usePointStyle: true
                    }
                }
            },

            scales: {
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        maxRotation: 0,
                        autoSkip: true,
                        maxTicksLimit: 8,
                        font: {
                            size: 9
                        }
                    }
                },

                y: {
                    beginAtZero: true,
                    position: "left",
                    title: {
                        display: true,
                        text: "Loss (kUS$)"
                    },
                    grid: {
                        color: "#edf1f5"
                    }
                },

                y1: {
                    beginAtZero: true,
                    position: "right",
                    title: {
                        display: true,
                        text: "Downtime (h)"
                    },
                    grid: {
                        drawOnChartArea: false
                    }
                }
            }
        }
    });
}


// ==========================================
// 02 — LOSS BY PLANT
// ==========================================

const plantCanvas =
    document.getElementById("plantLossChart");

if (plantCanvas) {

    new Chart(plantCanvas, {
        type: "bar",

        data: {
            labels: [
                "ZCU",
                "ARP",
                "OPP",
                "SMX",
                "OP2",
                "NUP",
                "OP3",
                "BRP",
                "CRP",
                "OPU",
                "BDX",
                "TKX"
            ],

            datasets: [{
                label: "Total Loss (kUS$)",

                data: [
                    11112.66,
                    9083.29,
                    7544.96,
                    7434.88,
                    5808.57,
                    5489.07,
                    5264.34,
                    5099.84,
                    3344.59,
                    3202.86,
                    2791.42,
                    1017.95
                ],

                backgroundColor: "#246bb2",
                borderRadius: 3
            }]
        },

        options: {
            indexAxis: "y",
            responsive: true,
            maintainAspectRatio: false,

            plugins: {
                legend: {
                    display: false
                },

                tooltip: {
                    callbacks: {
                        label: function (context) {
                            return "$" +
                                context.raw.toLocaleString() +
                                "k";
                        }
                    }
                }
            },

            scales: {
                x: {
                    beginAtZero: true,
                    grid: {
                        color: "#edf1f5"
                    },

                    ticks: {
                        font: {
                            size: 9
                        }
                    }
                },

                y: {
                    grid: {
                        display: false
                    },

                    ticks: {
                        font: {
                            size: 9
                        }
                    }
                }
            }
        }
    });
}


// ==========================================
// 03 — FAILURE MECHANISM PARETO
// ==========================================

const paretoCanvas =
    document.getElementById("failureParetoChart");

if (paretoCanvas) {

    const paretoValues = [
        17000.63,
        9875.48,
        8166.66,
        6554.29,
        3702.44,
        3627.07,
        2925.27,
        2920.32,
        2893.53,
        2749.49
    ];

    const total =
        paretoValues.reduce((sum, value) => sum + value, 0);

    let runningTotal = 0;

    const cumulative =
        paretoValues.map(value => {

            runningTotal += value;

            return Number(
                ((runningTotal / total) * 100).toFixed(1)
            );
        });


    new Chart(paretoCanvas, {
        type: "bar",

        data: {
            labels: [
                "Leakage",
                "High Vibration",
                "Worn Out",
                "Crack",
                "Fouling",
                "Error",
                "Low Performance",
                "High",
                "Malfunction",
                "Loose"
            ],

            datasets: [
                {
                    label: "Loss (kUS$)",
                    data: paretoValues,
                    backgroundColor: "#246bb2",
                    borderRadius: 3,
                    yAxisID: "y"
                },

                {
                    label: "Cumulative %",
                    type: "line",
                    data: cumulative,
                    borderColor: "#f3a31b",
                    backgroundColor: "#f3a31b",
                    pointRadius: 3,
                    tension: 0.25,
                    yAxisID: "y1"
                }
            ]
        },

        options: {
            responsive: true,
            maintainAspectRatio: false,

            interaction: {
                mode: "index",
                intersect: false
            },

            plugins: {
                legend: {
                    position: "bottom",
                    labels: {
                        usePointStyle: true,
                        boxWidth: 10
                    }
                }
            },

            scales: {
                x: {
                    grid: {
                        display: false
                    },

                    ticks: {
                        maxRotation: 45,
                        minRotation: 35,
                        font: {
                            size: 8
                        }
                    }
                },

                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: "Loss (kUS$)"
                    },
                    grid: {
                        color: "#edf1f5"
                    }
                },

                y1: {
                    beginAtZero: true,
                    max: 100,
                    position: "right",

                    title: {
                        display: true,
                        text: "Cumulative %"
                    },

                    ticks: {
                        callback: value => value + "%"
                    },

                    grid: {
                        drawOnChartArea: false
                    }
                }
            }
        }
    });
}


// ==========================================
// 04 — INCIDENT LIFECYCLE
// ==========================================

const statusCanvas =
    document.getElementById("incidentStatusChart");

if (statusCanvas) {

    new Chart(statusCanvas, {
        type: "doughnut",

        data: {
            labels: [
                "Risk Closed",
                "CA/PA Execution",
                "RCA Process",
                "Risk Canceled",
                "Monitoring Result",
                "New Registered"
            ],

            datasets: [{
                data: [
                    113,
                    92,
                    71,
                    47,
                    37,
                    20
                ],

                backgroundColor: [
                    "#246bb2",
                    "#f3a31b",
                    "#38ae7b",
                    "#e94f4f",
                    "#28a9c7",
                    "#8999aa"
                ],

                borderWidth: 2,
                borderColor: "#ffffff"
            }]
        },

        options: {
            responsive: true,
            maintainAspectRatio: false,

            cutout: "63%",

            plugins: {
                legend: {
                    position: "right",

                    labels: {
                        boxWidth: 10,
                        usePointStyle: true,
                        font: {
                            size: 9
                        }
                    }
                }
            }
        }
    });
}
// ========================================
// SIMPLE PAGE
// ========================================

function showSimplePage(title, description) {

    mainContent.innerHTML = `
        <h1 class="page-title">${title}</h1>

        <p class="page-subtitle">
            ${description}
        </p>

        <div class="kpi-card" style="margin-top: 25px;">

            <div class="kpi-label">
                IMX MODULE
            </div>

            <div class="kpi-value">
                ${title}
            </div>

            <div class="kpi-description">
                Module successfully loaded.
            </div>

        </div>
    `;

}
// ==========================================
// ROLE-BASED SINGLE PANE
// ==========================================

function applyRoleView(role) {

    const roleConfig = {

        executive: {
            title: "Executive / Management",
            message:
                "Enterprise performance, business exposure and critical exceptions.",
            highlight: [
                "manufacturing-health",
                "loss-exposure",
                "historical-downtime",
                "active-incidents"
            ]
        },

        operations: {
            title: "Operations",
            message:
                "Production performance, operating exceptions and active incidents.",
            highlight: [
                "production",
                "production-loss",
                "active-incidents",
                "manufacturing-health"
            ]
        },

        maintenance: {
            title: "Maintenance",
            message:
                "Equipment condition, maintenance priorities and action execution.",
            highlight: [
                "high-criticality-assets",
                "historical-downtime",
                "active-incidents"
            ]
        },

        reliability: {
            title: "Reliability",
            message:
                "Asset health, failure patterns and root cause investigation.",
            highlight: [
                "high-criticality-assets",
                "historical-downtime",
                "manufacturing-health"
            ]
        },

        energy: {
            title: "Energy",
            message:
                "Energy performance, emissions visibility and operating efficiency.",
            highlight: [
                "production",
                "production-loss"
            ]
        }
    };

    const config =
        roleConfig[role] || roleConfig.executive;

    // Update role guidance
    const guide =
        document.getElementById("roleViewMessage");

    if (guide) {
        guide.innerHTML =
            `<strong>${config.title}</strong> · ${config.message}`;

    }
    // Reset all KPI cards
    document
        .querySelectorAll(".kpi-card")
        .forEach(card => {
            card.classList.remove("role-highlight");
            card.classList.remove("role-muted");
        });

    // Apply role emphasis
    document
        .querySelectorAll(".kpi-card")
        .forEach(card => {

            const metric =
                card.dataset.metric;

            if (!metric) return;

            if (config.highlight.includes(metric)) {
                card.classList.add("role-highlight");
            } else {
                card.classList.add("role-muted");
            }
        });

    console.log(
        `IMX role view applied: ${config.title}`
    );
}
// ==========================================
// EXECUTIVE CHARTS
// ==========================================
function renderExecutiveCharts() {

    console.log("IMX: rendering executive charts...");

    if (typeof Chart === "undefined") {
        console.error("IMX: Chart.js is not loaded.");
        return;
    }

    // Prevent duplicate charts when Single Pane is rendered again
    if (window.imxExecutiveCharts) {
        Object.values(window.imxExecutiveCharts).forEach(chart => {
            if (chart && typeof chart.destroy === "function") {
                chart.destroy();
            }
        });
    }

    window.imxExecutiveCharts = {};

    // =====================================================
    // 1. LOSS & DOWNTIME BY MONTH
    // =====================================================

    const lossDowntimeCanvas =
        document.getElementById("lossDowntimeChart");

    if (lossDowntimeCanvas) {

        // Use the full governed Incident Database
        const incidents = Array.isArray(window.imxIncidents)
    ? window.imxIncidents
    : [];

const monthlyMap = {};

incidents.forEach(incident => {

    const rawDate = incident.occurrenceDate;

    if (!rawDate) return;

    const incidentDate = new Date(rawDate);

    if (Number.isNaN(incidentDate.getTime())) return;

    const year = incidentDate.getFullYear();
    const monthIndex = incidentDate.getMonth();

    const key =
        `${year}-${String(monthIndex + 1).padStart(2, "0")}`;

    if (!monthlyMap[key]) {
        monthlyMap[key] = {
            key,
            year,
            monthIndex,
            loss: 0,
            downtime: 0,
            incidents: 0
        };
    }

    const loss = Number(incident.totalLoss) || 0;
    const downtime = Number(incident.downtime) || 0;

    monthlyMap[key].loss += loss;
    monthlyMap[key].downtime += downtime;
    monthlyMap[key].incidents += 1;
});

const monthlyData = Object.values(monthlyMap)
    .sort((a, b) => {
        return (
            new Date(a.year, a.monthIndex, 1) -
            new Date(b.year, b.monthIndex, 1)
        );
    })
    .map(item => ({
        ...item,

        month: new Date(
            item.year,
            item.monthIndex,
            1
        ).toLocaleDateString("en-US", {
            month: "short",
            year: "2-digit"
        })
    }));

console.log(
    "IMX governed monthly incident aggregation:",
    monthlyData
);

   
        window.imxExecutiveCharts.lossDowntime =
            new Chart(lossDowntimeCanvas, {
                type: "line",

                data: {
                    labels: monthlyData.map(d => d.month),

                    datasets: [
                        {
                            label: "Total Loss (kUS$)",
                            data: monthlyData.map(d => d.loss),
                            borderColor: "#246bb2",
                            backgroundColor: "rgba(36,107,178,0.12)",
                            tension: 0.35,
                            fill: true,
                            yAxisID: "y"
                        },
                        {
                            label: "Downtime (h)",
                            data: monthlyData.map(d => d.downtime),
                            borderColor: "#f3a31b",
                            backgroundColor: "#f3a31b",
                            tension: 0.35,
                            yAxisID: "y1"
                        }
                    ]
                },

                options: {
                    responsive: true,
                    maintainAspectRatio: false,

                    interaction: {
                        mode: "index",
                        intersect: false
                    },

                    scales: {
                        y: {
                            beginAtZero: true,
                            position: "left",
                            title: {
                                display: true,
                                text: "Loss (kUS$)"
                            }
                        },

                        y1: {
                            beginAtZero: true,
                            position: "right",
                            grid: {
                                drawOnChartArea: false
                            },
                            title: {
                                display: true,
                                text: "Downtime (h)"
                            }
                        }
                    }
                }
            });
    }


    // =====================================================
    // 2. LOSS BY PLANT
    // =====================================================

    const plantLossCanvas =
        document.getElementById("plantLossChart");

    if (plantLossCanvas) {

        const plantData = [
            ["ZCU", 11112.66],
            ["ARP", 9083.29],
            ["OPP", 7544.96],
            ["SMX", 7434.88],
            ["OP2", 5808.57],
            ["NUP", 5489.07],
            ["OP3", 5264.34],
            ["BRP", 5099.84],
            ["CRP", 3344.59],
            ["OPU", 3202.86],
            ["BDX", 2791.42],
            ["TKX", 1017.95]
        ];

        window.imxExecutiveCharts.plantLoss =
            new Chart(plantLossCanvas, {
                type: "bar",

                data: {
                    labels: plantData.map(d => d[0]),

                    datasets: [{
                        label: "Total Loss (kUS$)",
                        data: plantData.map(d => d[1]),
                        backgroundColor: "#246bb2",
                        borderRadius: 5
                    }]
                },

                options: {
                    responsive: true,
                    maintainAspectRatio: false,

                    plugins: {
                        legend: {
                            display: false
                        }
                    },

                    scales: {
                        y: {
                            beginAtZero: true,
                            title: {
                                display: true,
                                text: "Total Loss (kUS$)"
                            }
                        }
                    }
                }
            });
    }


    // =====================================================
    // 3. FAILURE MECHANISM PARETO
    // =====================================================

    const failureCanvas =
        document.getElementById("failureParetoChart");

    if (failureCanvas) {

        const failureData = [
            ["Leakage", 17000.63],
            ["High Vibration", 9875.48],
            ["Worn Out", 8166.66],
            ["Crack", 6554.29],
            ["Fouling", 3702.44],
            ["Error", 3627.07],
            ["Low Performance", 2925.27],
            ["High", 2920.32],
            ["Malfunction", 2893.53],
            ["Loose", 2749.49]
        ];

        window.imxExecutiveCharts.failure =
            new Chart(failureCanvas, {
                type: "bar",

                data: {
                    labels: failureData.map(d => d[0]),

                    datasets: [{
                        label: "Total Loss (kUS$)",
                        data: failureData.map(d => d[1]),
                        backgroundColor: "#38ae7b",
                        borderRadius: 5
                    }]
                },

                options: {
                    indexAxis: "y",
                    responsive: true,
                    maintainAspectRatio: false,

                    plugins: {
                        legend: {
                            display: false
                        }
                    },

                    scales: {
                        x: {
                            beginAtZero: true,
                            title: {
                                display: true,
                                text: "Total Loss (kUS$)"
                            }
                        }
                    }
                }
            });
    }


    // =====================================================
    // 4. INCIDENT LIFECYCLE STATUS
    // =====================================================

    const statusCanvas =
        document.getElementById("incidentStatusChart");

    if (statusCanvas) {

        window.imxExecutiveCharts.status =
            new Chart(statusCanvas, {
                type: "doughnut",

                data: {
                    labels: [
                        "Risk Closed",
                        "CA/PA Execution",
                        "RCA Process",
                        "Risk Canceled",
                        "Monitoring Result",
                        "New Registered"
                    ],

                    datasets: [{
                        data: [113, 92, 71, 47, 37, 20],

                        backgroundColor: [
                            "#246bb2",
                            "#f3a31b",
                            "#38ae7b",
                            "#e94f4f",
                            "#28a9c7",
                            "#8999aa"
                        ],

                        borderColor: "#ffffff",
                        borderWidth: 2
                    }]
                },

                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    cutout: "62%",

                    plugins: {
                        legend: {
                            position: "right"
                        }
                    }
                }
            });
    }

    console.log("IMX: 4 executive charts rendered.");
}
// ========================================
// SINGLE PANE
// ========================================
async function showSinglePane() {
    // ==========================================
    // WAIT FOR GOVERNED DATA BEFORE RENDERING
    // ==========================================
    try {

        const dataPromises = [];

        if (window.imxIncidentReady) {
            dataPromises.push(window.imxIncidentReady);
        }

        if (window.imxProductionReady) {
            dataPromises.push(window.imxProductionReady);
        }

        await Promise.all(dataPromises);

        // Ensure equipment master is available
        if (
            (!window.imxEquipmentMaster ||
                window.imxEquipmentMaster.length === 0) &&
            typeof buildEquipmentMaster === "function"
        ) {
            await buildEquipmentMaster();
        }

        // Ensure incident database is available
        if (
            (!window.imxIncidents ||
                window.imxIncidents.length === 0) &&
            typeof buildIncidentDatabase === "function"
        ) {
            await buildIncidentDatabase();
        }

    } catch (error) {

        console.error(
            "IMX Single Pane data initialization failed:",
            error
        );
    }

    mainContent.innerHTML = `
        <div class="imx-executive-page">

            <!-- =========================
                 PAGE HEADER
            ========================== -->
            <section class="exec-page-header">

    <!-- LEFT: PAGE TITLE -->
    <div class="exec-title">
        <h1>${t("Single Pane", "Tampilan Terpadu")}</h1>

        <p>
            ${t(
                "One governed view — exceptions first, detail on demand",
                "Satu tampilan terkelola — prioritaskan pengecualian, detail sesuai kebutuhan"
            )}
        </p>
    </div>


    <!-- CENTER: GLOBAL SEARCH -->
    <div class="exec-search">

        <input
            type="text"
            id="headerSearchInput"
            placeholder="${t(
                "Search equipment, incident, RCA...",
                "Cari equipment, incident, RCA..."
            )}"
            autocomplete="off"
        >

        <button
            type="button"
            id="headerSearchButton"
            aria-label="Search"
            title="Search"
        >
            ⌕
        </button>

    </div>
    


    <!-- RIGHT: CONTEXT CONTROLS -->
    <div class="exec-context">

        <select id="roleSelect" aria-label="Role">
            <option value="executive">Executive / Management</option>
            <option value="operations">Operations</option>
            <option value="maintenance">Maintenance</option>
            <option value="reliability">Reliability</option>
            <option value="energy">Energy</option>
        </select>

        <select
            id="plantSelect"
            aria-label="Plant"
        >
            <option>ALL</option>
            <option>ARP</option>
            <option>ZCU</option>
            <option>NUP</option>
            <option>OPP</option>
        </select>


        <!-- LANGUAGE -->
        <div class="header-language">

            <button
                id="langEN"
                class="header-lang-btn active"
                onclick="setLanguage('en')"
            >
                EN
            </button>

            <button
                id="langID"
                class="header-lang-btn"
                onclick="setLanguage('id')"
            >
                ID
            </button>

        </div>

    </div>

</section>
             

            <!-- =========================
                 HERO
            ========================== -->
            <section class="imx-hero">

                <div class="imx-hero-overlay">

                    <div class="imx-hero-copy">
                        <h2>
                            ${t("Welcome to", "Selamat Datang di")}
                            <span>IMX</span>
                        </h2>

                        <p>
                            ${t(
        "Unified intelligence for safer, more reliable and accountable manufacturing operations.",
        "Inteligensi terpadu untuk operasi manufaktur yang lebih aman, andal, dan akuntabel."
    )}
<div class="hero-guide">
    <strong>Personalize your view</strong>
    <span id="roleViewMessage">
        Executive / Management · Enterprise performance,
        business exposure and critical exceptions.
    </span>
</div>
                        </p>

                        <small>
                        </small>
                    </div>

                    <div class="hero-location">
                        <strong>Manufacturing Intelligence</strong>
                        <span>GOVERNED • ROLE-BASED • ACTIONABLE</span>
                    </div>

                </div>

            </section>


            <!-- =========================
                 EXECUTIVE KPI
            ========================== -->
            <section class="executive-kpi-grid">

                <article class="exec-kpi">
                    <div class="kpi-top">
                        <span>${t("MANUFACTURING HEALTH", "KESEHATAN MANUFAKTUR")}</span>
                        <i class="status-dot red"></i>
                    </div>

                    <strong class="kpi-large">
                        ${t("ATTENTION REQUIRED", "PERLU PERHATIAN")}
                    </strong>

                    <small>
                        ${t(
        "Exceptions detected across governed sources",
        "Pengecualian terdeteksi pada sumber data terkelola"
    )}
                    </small>
                </article>


                <article class="exec-kpi">
                    <div class="kpi-top">
                        <span>${t("PRODUCTION", "PRODUKSI")}</span>
                        <i class="status-dot green"></i>
                    </div>

                    <strong class="kpi-large">
                        ${window.imxProductionData ? t("MONITORED", "TERPANTAU") : t("LOADING", "MEMUAT")}
                    </strong>

                    <small>
                        ${t(
        "5 sources · 3,600 hourly records",
        "5 sumber · 3.600 data per jam"
    )}
                    </small>
                </article>


                <article class="exec-kpi">
                    <div class="kpi-top">
                        <span>${t("AVG. AVAILABILITY", "RATA-RATA KETERSEDIAAN")}</span>
                        <i class="status-dot green"></i>
                    </div>

                    <strong class="kpi-number">99.61%</strong>

                    <small>
                        ${t(
        "5 governed equipment assets",
        "5 aset peralatan terkelola"
    )}
                    </small>
                </article>


                <article class="exec-kpi">
                    <div class="kpi-top">
                        <span>${t("HISTORICAL DOWNTIME", "DOWNTIME HISTORIS")}</span>
                        <i class="status-dot amber"></i>
                    </div>

                    <strong class="kpi-number">2,261.1 h</strong>

                    <small>
                        ${t(
        "380 incident baseline",
        "Baseline 380 insiden"
    )}
                    </small>
                </article>


                <article class="exec-kpi">
                    <div class="kpi-top">
                        <span>${t("LOSS EXPOSURE", "EKSPOSUR KERUGIAN")}</span>
                        <i class="status-dot red"></i>
                    </div>

                    <strong class="kpi-number">$67.2M</strong>

                    <small>
                        ${t(
        "Historical incident total loss",
        "Total kerugian historis insiden"
    )}
                    </small>
                </article>


                <article class="exec-kpi">
                    <div class="kpi-top">
                        <span>${t("ACTIVE INCIDENTS", "INSIDEN AKTIF")}</span>
                        <i class="status-dot amber"></i>
                    </div>

                    <strong class="kpi-number">220</strong>

                    <small>
                        ${t(
        "Open lifecycle cases",
        "Kasus lifecycle yang masih aktif"
    )}
                    </small>
                </article>


                <article class="exec-kpi">
                    <div class="kpi-top">
                        <span>${t("HIGH-CRITICALITY ASSETS", "ASET KRITIS TINGGI")}</span>
                        <i class="status-dot red"></i>
                    </div>

                    <strong class="kpi-number">2</strong>

                    <small>KO-3201 · BL-5702</small>
                </article>


                <article class="exec-kpi">
                    <div class="kpi-top">
                        <span>${t("PRODUCTION LOSS", "KEHILANGAN PRODUKSI")}</span>
                        <i class="status-dot amber"></i>
                    </div>

                    <strong class="kpi-number">2,919.6 t</strong>

                    <small>
                        ${t(
        "Across 5 governed assets",
        "Pada 5 aset terkelola"
    )}
                    </small>
                </article>

            </section>


            <!-- =========================
                 DECISION STRIP
            ========================== -->
            <section class="decision-strip">

                <div class="decision-item">
                    <span>${t("INCIDENTS", "INSIDEN")}</span>
                    <strong>380</strong>
                    <small>Jan 2024 – Jul 2026</small>
                </div>

                <div class="decision-item">
                    <span>${t("ACTIVE CASES", "KASUS AKTIF")}</span>
                    <strong>220</strong>
                    <small>58% ${t("of incidents", "dari insiden")}</small>
                </div>

                <div class="decision-item">
                    <span>${t("RCA PROCESS", "PROSES RCA")}</span>
                    <strong>71</strong>
                    <small>
                        ${t(
        "Historical lifecycle status",
        "Status lifecycle historis"
    )}
                    </small>
                </div>

                <div class="decision-item">
                    <span>${t("HIGH CRITICALITY", "KRITIS TINGGI")}</span>
                    <strong>2</strong>
                    <small>KO-3201 · BL-5702</small>
                </div>

                <div class="decision-item">
                    <span>${t("GOVERNED ASSETS", "ASET TERKELOLA")}</span>
                    <strong>5</strong>
                    <small>
                        ${t(
        "Equipment intelligence",
        "Inteligensi peralatan"
    )}
                    </small>
                </div>

            </section>


            <!-- =========================
     EXECUTIVE ANALYTICS
========================== -->

<section class="imx-chart-grid">

    <article class="imx-chart-card chart-wide">
        <div class="chart-card-heading">
            <div>
                <h3>${t(
        "Loss & Downtime by Month",
        "Kerugian & Downtime per Bulan"
    )}</h3>

                <p>
                    ${t(
        "Historical incident trend · Jan 2024 – Jul 2026",
        "Tren historis insiden · Jan 2024 – Jul 2026"
    )}
                </p>
            </div>

            <span class="analytics-badge">BASELINE</span>
        </div>

        <div class="chart-container chart-large">
            <canvas id="lossDowntimeChart"></canvas>
        </div>
    </article>


    <article class="imx-chart-card">
        <div class="chart-card-heading">
            <div>
                <h3>${t(
        "Loss by Plant",
        "Kerugian per Pabrik"
    )}</h3>

                <p>
                    ${t(
        "Historical total loss exposure",
        "Eksposur total kerugian historis"
    )}
                </p>
            </div>

            <span class="analytics-badge">BASELINE</span>
        </div>

        <div class="chart-container chart-large">
            <canvas id="plantLossChart"></canvas>
        </div>
    </article>


    <article class="imx-chart-card chart-wide">
        <div class="chart-card-heading">
            <div>
                <h3>${t(
        "Pareto — Failure Mechanism",
        "Pareto — Mekanisme Kegagalan"
    )}</h3>

                <p>
                    ${t(
        "Failure mechanisms ranked by historical loss",
        "Mekanisme kegagalan berdasarkan kerugian historis"
    )}
                </p>
            </div>

            <span class="analytics-badge">BASELINE</span>
        </div>

        <div class="chart-container">
            <canvas id="failureParetoChart"></canvas>
        </div>
    </article>


    <article class="imx-chart-card">
        <div class="chart-card-heading">
            <div>
                <h3>${t(
        "Incident Lifecycle Status",
        "Status Lifecycle Insiden"
    )}</h3>

                <p>
                    380 ${t(
        "governed incident records",
        "rekaman insiden terkelola"
    )}
                </p>
            </div>

            <span class="analytics-badge">BASELINE</span>
        </div>

        <div class="chart-container">
            <canvas id="incidentStatusChart"></canvas>
        </div>
    </article>

</section>

            <!-- =========================
                 ASSETS REQUIRING ATTENTION
            ========================== -->
            <section class="attention-section">

                <div class="section-heading-row">
                    <div>
                        <h2>
                            ${t(
        "Assets Requiring Attention",
        "Aset yang Memerlukan Perhatian"
    )}
                        </h2>

                        <p>
                            ${t(
        "Prioritized from governed equipment condition and historical failure evidence.",
        "Diprioritaskan berdasarkan kondisi peralatan terkelola dan bukti kegagalan historis."
    )}
                        </p>
                    </div>

                    <button
                        class="secondary-action-btn"
                        onclick="showPage('asset')"
                    >
                        ${t("View Asset Health →", "Lihat Kesehatan Aset →")}
                    </button>
                </div>


                <div class="attention-cards">

                    <article class="attention-card critical">
                        <div>
                            <span class="attention-priority">P1</span>
                            <h3>KO-3201</h3>
                            <p>Cracked Gas Compressor · ZCU</p>
                        </div>

                        <div>
                            <span class="attention-state critical-text">
                                ${t("CRITICAL", "KRITIS")}
                            </span>
                            <strong>32 h</strong>
                            <small>${t("Downtime", "Downtime")}</small>
                        </div>

                        <button onclick="openAIInvestigation('KO-3201')">
                            ${t("Investigate →", "Investigasi →")}
                        </button>
                    </article>


                    <article class="attention-card critical">
                        <div>
                            <span class="attention-priority">P1</span>
                            <h3>BL-5702</h3>
                            <p>Product Blower · OPP</p>
                        </div>

                        <div>
                            <span class="attention-state critical-text">
                                ${t("CRITICAL", "KRITIS")}
                            </span>
                            <strong>14 h</strong>
                            <small>${t("Downtime", "Downtime")}</small>
                        </div>

                        <button onclick="openAIInvestigation('BL-5702')">
                            ${t("Investigate →", "Investigasi →")}
                        </button>
                    </article>


                    <article class="attention-card">
                        <div>
                            <span class="attention-priority">P2</span>
                            <h3>HE-3301</h3>
                            <p>Feed/Effluent Heat Exchanger · ZCU</p>
                        </div>

                        <div>
                            <span class="attention-state attention-text">
                                ${t("ATTENTION", "PERHATIAN")}
                            </span>
                            <strong>12 h</strong>
                            <small>${t("Downtime", "Downtime")}</small>
                        </div>

                        <button onclick="openAIInvestigation('HE-3301')">
                            ${t("Investigate →", "Investigasi →")}
                        </button>
                    </article>

                </div>

            </section>


            <!-- =========================
                 DECISION FLOW
            ========================== -->
            <section class="imx-decision-flow">

                <div class="section-heading-row">
                    <div>
                        <h2>IMX Decision Flow</h2>
                        <p>
                            ${t(
        "From fragmented data to accountable action.",
        "Dari data terfragmentasi menuju tindak lanjut yang akuntabel."
    )}
                        </p>
                    </div>
                </div>

                <div class="decision-flow-steps">

                    <div>
                        <span>01</span>
                        <strong>SEE</strong>
                        <small>${t("Governed data", "Data terkelola")}</small>
                    </div>

                    <b>→</b>

                    <div>
                        <span>02</span>
                        <strong>PRIORITIZE</strong>
                        <small>${t("Risk & impact", "Risiko & dampak")}</small>
                    </div>

                    <b>→</b>

                    <div>
                        <span>03</span>
                        <strong>UNDERSTAND</strong>
                        <small>${t("Root cause indication", "Indikasi akar masalah")}</small>
                    </div>

                    <b>→</b>

                    <div>
                        <span>04</span>
                        <strong>ACT</strong>
                        <small>${t("Owned actions", "Tindak lanjut terarah")}</small>
                    </div>

                    <b>→</b>

                    <div>
                        <span>05</span>
                        <strong>LEARN</strong>
                        <small>${t("Close & reuse", "Tutup & gunakan kembali")}</small>
                    </div>

                </div>

            </section>

        </div>
    `;
    setTimeout(function () {
        renderExecutiveCharts();
    }, 100);
}
// ========================================
// ASSET HEALTH
// ========================================
async function showAssetHealth() {

    try {

        // Use governed data generated directly from raw Excel
        let assets = window.imxEquipmentMaster;

        // If Excel data has not finished loading yet
        if (!assets || assets.length === 0) {

            mainContent.innerHTML = `
                <h1>Asset Health</h1>
                <p>Loading governed equipment data...</p>
            `;
            
            assets = await buildEquipmentMaster();
        }

        // Make data available to other IMX functions
        window.imxAssets = assets;

        // Render Asset Health page
        renderAssetHealth(assets);

    } catch (error) {

        console.error("Error loading governed asset data:", error);

        mainContent.innerHTML = `
            <h1>Asset Health</h1>
            <p>Unable to load equipment data.</p>
        `;
    }
}
// ========================================
// IMX PROTOTYPE PRIORITIZATION LOGIC
// ========================================

function getAssetStatus(asset) {

    if (asset.criticality === "High" && asset.tripCount > 0) {
        return {
            status: "CRITICAL",
            className: "status-red"
        };
    }

    if (asset.tripCount > 0 || asset.alarmCount >= 10) {
        return {
            status: "ATTENTION",
            className: "status-amber"
        };
    }

    return {
        status: "MONITOR",
        className: "status-green"
    };
}


function getAssetPriority(asset) {

    if (asset.criticality === "High" && asset.tripCount > 0) {
        return "P1";
    }

    if (asset.tripCount > 0 && asset.alarmCount >= 10) {
        return "P2";
    }

    if (asset.tripCount > 0) {
        return "P3";
    }

    return "P4";
}
function renderAssetHealth(assets) {

    let rows = "";

    // ==========================================
    // ASSET HEALTH KPI CALCULATION
    // ==========================================

    const monitoredAssets = assets.length;

    const highCriticalityAssets = assets.filter(function (asset) {
        return String(asset.criticality || "")
            .trim()
            .toLowerCase() === "high";
    }).length;

    const attentionAssets = assets.filter(function (asset) {
        const health = getAssetStatus(asset);
        return health.status !== "NORMAL";
    }).length;

    const totalDowntime = assets.reduce(function (sum, asset) {
        return sum + Number(asset.downtime || 0);
    }, 0);

    const totalActualLoss = assets.reduce(function (sum, asset) {
        return sum + Number(asset.estimatedLoss || 0);
    }, 0);


    // ==========================================
    // PRIORITY ORDER
    // ==========================================

    const priorityOrder = {
        P1: 1,
        P2: 2,
        P3: 3,
        P4: 4
    };

    const prioritizedAssets = [...assets].sort(function (a, b) {

        const priorityA = getAssetPriority(a);
        const priorityB = getAssetPriority(b);

        return (
            (priorityOrder[priorityA] || 99) -
            (priorityOrder[priorityB] || 99)
        );
    });


    // ==========================================
    // TABLE ROWS
    // ==========================================

    prioritizedAssets.forEach(function (asset) {

        const health = getAssetStatus(asset);
        const priority = getAssetPriority(asset);

        rows += `
            <tr class="clickable-row"
                onclick="showAssetDetail('${asset.tag}')">

                <td>
                    <strong>${asset.tag}</strong>

                    <div class="small-text">
                        ${asset.equipmentName || "-"}
                    </div>
                </td>

                <td>
                    ${asset.plant || "-"}
                </td>

                <td>
                    <span class="priority-badge">
                        ${priority}
                    </span>
                </td>

                <td>
                    <span class="status-badge ${health.className}">
                        ${health.status}
                    </span>
                </td>

                <td>
                    ${asset.criticality || "-"}
                </td>

                <td>
                    ${Number(asset.availability || 0).toFixed(2)}%
                </td>

                <td>
                    ${Number(asset.downtime || 0).toLocaleString()} h
                </td>

                <td>
                    $${Number(
                        asset.estimatedLoss || 0
                    ).toLocaleString()}k
                </td>

                <td>
                    ${asset.failureMode || "-"}
                </td>

                <td>
                    <button class="view-btn">
                        Investigate →
                    </button>
                </td>

            </tr>
        `;
    });


    // ==========================================
    // PRIORITY ASSET CARDS
    // ==========================================

    let riskCards = "";

    prioritizedAssets.forEach(function (asset) {

        const health = getAssetStatus(asset);
        const priority = getAssetPriority(asset);

        riskCards += `
            <div class="asset-risk-card"
                 onclick="showAssetDetail('${asset.tag}')">

                <div class="asset-risk-top">

                    <div>
                        <strong>${asset.tag}</strong>
                        <span>${asset.plant || "-"}</span>
                    </div>

                    <span class="priority-badge">
                        ${priority}
                    </span>

                </div>

                <div class="asset-risk-status">

                    <span class="status-badge ${health.className}">
                        ${health.status}
                    </span>

                    <span>
                        ${asset.criticality || "-"} Criticality
                    </span>

                </div>

                <div class="asset-risk-mode">
                    ${asset.failureMode || "No failure mode recorded"}
                </div>

                <div class="asset-risk-metrics">

                    <div>
                        <small>Availability</small>
                        <strong>
                            ${Number(
                                asset.availability || 0
                            ).toFixed(2)}%
                        </strong>
                    </div>

                    <div>
                        <small>Downtime</small>
                        <strong>
                            ${Number(asset.downtime || 0)} h
                        </strong>
                    </div>

                    <div>
                        <small>Actual Loss</small>
                        <strong>
                            $${Number(
                                asset.estimatedLoss || 0
                            ).toLocaleString()}k
                        </strong>
                    </div>

                </div>

            </div>
        `;
    });


    // ==========================================
    // PAGE RENDER
    // ==========================================

    mainContent.innerHTML = `

        <div class="page-heading-row">

            <div>

                <h1 class="page-title">
                    ${t("Asset Health", "Kesehatan Aset")}
                </h1>

                <p class="page-subtitle">
                    ${t(
                        "Equipment health, exceptions and failure baseline",
                        "Kesehatan peralatan, pengecualian, dan baseline kegagalan"
                    )}
                </p>

            </div>

            <div class="data-label">
                IMX-DERIVED STATUS
            </div>

        </div>


        <!-- ======================================
             ASSET HEALTH KPI
        ======================================= -->

        <div class="asset-summary asset-summary-v2">

            <div class="kpi-card">

                <div class="kpi-label">
                    ${t("Monitored Assets", "Aset Dipantau")}
                </div>

                <div class="kpi-value">
                    ${monitoredAssets}
                </div>

                <div class="kpi-description">
                    ${t(
                        "Governed equipment cases",
                        "Kasus peralatan terkelola"
                    )}
                </div>

            </div>


            <div class="kpi-card">

                <div class="kpi-label">
                    ${t(
                        "High-Criticality Assets",
                        "Aset Kritikalitas Tinggi"
                    )}
                </div>

                <div class="kpi-value">
                    ${highCriticalityAssets}
                </div>

                <div class="kpi-description">
                    KO-3201 · BL-5702
                </div>

            </div>


            <div class="kpi-card">

                <div class="kpi-label">
                    ${t(
                        "Requiring Attention",
                        "Memerlukan Perhatian"
                    )}
                </div>

                <div class="kpi-value">
                    ${attentionAssets}
                </div>

                <div class="kpi-description">
                    ${t(
                        "IMX-derived exception state",
                        "Status pengecualian turunan IMX"
                    )}
                </div>

            </div>


            <div class="kpi-card">

                <div class="kpi-label">
                    ${t(
                        "RCA Downtime",
                        "Downtime RCA"
                    )}
                </div>

                <div class="kpi-value">
                    ${totalDowntime.toFixed(1)} h
                </div>

                <div class="kpi-description">
                    ${t(
                        "Five equipment cases",
                        "Lima kasus peralatan"
                    )}
                </div>

            </div>


            <div class="kpi-card">

                <div class="kpi-label">
                    ${t(
                        "Actual Loss",
                        "Kerugian Aktual"
                    )}
                </div>

                <div class="kpi-value">
                    $${(totalActualLoss / 1000).toFixed(2)}M
                </div>

                <div class="kpi-description">
                    ${t(
                        "Equipment RCA baseline",
                        "Baseline RCA peralatan"
                    )}
                </div>

            </div>

        </div>


        <!-- ======================================
             GOVERNANCE NOTE
        ======================================= -->

        <div class="logic-note">

            <strong>
                ${t(
                    "Prototype prioritization:",
                    "Prioritisasi prototype:"
                )}
            </strong>

            ${t(
                "Status and priority are derived by IMX from equipment criticality, trip occurrence and alarm history. Source equipment KPIs remain traceable to the governed Excel layer.",
                "Status dan prioritas diturunkan oleh IMX dari kritikalitas peralatan, kejadian trip, dan riwayat alarm. KPI sumber tetap dapat ditelusuri ke lapisan Excel terkelola."
            )}

        </div>


        <!-- ======================================
             ASSET RISK OVERVIEW
        ======================================= -->

        <div class="table-card">

            <div class="table-header">

                <div>

                    <h2>
                        ${t(
                            "Asset Risk Overview",
                            "Ringkasan Risiko Aset"
                        )}
                    </h2>

                    <p>
                        ${t(
                            "Risk-based view of the five governed RCA equipment cases.",
                            "Tampilan berbasis risiko dari lima kasus peralatan RCA terkelola."
                        )}
                    </p>

                </div>

            </div>


            <div class="asset-risk-grid">
                ${riskCards}
            </div>

        </div>


        <!-- ======================================
             EQUIPMENT TABLE
        ======================================= -->

        <div class="table-card">

            <div class="table-header">

                <div>

                    <h2>
                        ${t(
                            "Equipment Health Overview",
                            "Ringkasan Kesehatan Peralatan"
                        )}
                    </h2>

                    <p>
                        ${t(
                            "Click an asset to investigate its condition and historical failure.",
                            "Klik aset untuk menyelidiki kondisi dan riwayat kegagalannya."
                        )}
                    </p>

                </div>

            </div>


            <div class="table-wrapper">

                <table class="asset-table">

                    <thead>

                        <tr>
                            <th>ASSET</th>
                            <th>PLANT</th>
                            <th>PRIORITY</th>
                            <th>HEALTH</th>
                            <th>CRITICALITY</th>
                            <th>AVAILABILITY</th>
                            <th>DOWNTIME</th>
                            <th>ACTUAL LOSS</th>
                            <th>FAILURE MODE</th>
                            <th>ACTION</th>
                        </tr>

                    </thead>

                    <tbody>
                        ${rows}
                    </tbody>

                </table>

            </div>

        </div>
    `;
}
// ========================================
// CONDITION UNIT NORMALIZATION
// ========================================

function getConditionUnit(condition) {

    // 1. Use governed unit if available
    if (
        condition.unit &&
        condition.unit !== "undefined" &&
        condition.unit !== "null"
    ) {
        return condition.unit;
    }

    // 2. Otherwise extract unit from parameter name
    const parameter = String(condition.parameter || "");

    const match = parameter.match(/\(([^)]+)\)/);

    if (match && match[1]) {
        return match[1].trim();
    }

    // 3. No unit available
    return "";
}
// ========================================
// ASSET DETAIL
// ========================================
async function showAssetDetail(tag) {
    const asset = (
        window.imxAssets ||
        window.imxEquipmentMaster ||
        []
    ).find(item => item.tag === tag);
    let conditionData = [];
    let assetConditions = [];

    try {

        conditionData = window.imxConditionData;

        if (!conditionData || conditionData.length === 0) {

            await buildEquipmentMaster();

            conditionData = window.imxConditionData;
        }

        assetConditions = conditionData.filter(function (condition) {
        return condition.tag === tag;
        });

        console.log(
            `Condition Evidence for ${tag}:`,
            assetConditions
        );

    }
    catch (error) {

        console.error("Condition history error:", error);

    }

    if (!asset) {
        return;
    }


    const health = getAssetStatus(asset);
    const priority = getAssetPriority(asset);
    let conditionCards = "";

    assetConditions.forEach(function (condition) {

    let latestValue = condition.latestValue;

    const displayUnit = getConditionUnit(condition);

    if (condition.history && condition.history.length > 0) {
        latestValue =
            condition.history[condition.history.length - 1].value;
    }

        const rag = calculateParameterStatus(
            latestValue,
            condition.alarmLimit,
            condition.tripLimit,
            condition.direction
        );

        conditionCards += `
        <div class="condition-card">

            <div class="condition-top">

                <div>
                    <div class="condition-name">
                        ${condition.parameter}
                    </div>

                    <div class="condition-unit">
                        ${displayUnit}
                    </div>
                </div>

                <span class="status-badge ${rag.className}">
                    ${rag.status}
                </span>

            </div>

            <div class="condition-value">
                ${latestValue !== undefined
                ? latestValue + (displayUnit ? " " + displayUnit : "")
                : "No latest measurement"
                }
            </div>

            <div class="threshold-info">

                <span>
                    Alarm:
                    <strong>${condition.alarmLimit}</strong>
                </span>

                <span>
                    Trip:
                    <strong>${condition.tripLimit}</strong>
                </span>

            </div>

        </div>
    `;

    });


    mainContent.innerHTML = `

        <button class="back-btn"
                onclick="renderAssetHealth(window.imxAssets)">
            ← Back to Asset Health
        </button>


        <div class="asset-detail-header">

            <div>

                <div class="asset-tag-large">
                    ${asset.tag}
                </div>

                <h1 class="page-title">
                    ${asset.equipmentName}
                </h1>

                <p class="page-subtitle">
                    ${asset.plant} •
                    ${asset.equipmentType} •
                    ${asset.discipline}
                </p>

            </div>


            <div class="asset-status-group">

                <span class="priority-badge priority-large">
                    ${priority}
                </span>

                <span class="status-badge ${health.className}">
                    ${health.status}
                </span>

            </div>

        </div>


        <div class="detail-grid">


            <div class="kpi-card">

                <div class="kpi-label">
                    Availability
                </div>

                <div class="kpi-value">
                    ${asset.availability.toFixed(2)}%
                </div>

                <div class="kpi-description">
                    Equipment performance baseline
                </div>

            </div>


            <div class="kpi-card">

                <div class="kpi-label">
                    Downtime
                </div>

                <div class="kpi-value">
                    ${asset.downtime} h
                </div>

                <div class="kpi-description">
                    Historical failure event
                </div>

            </div>


            <div class="kpi-card">

                <div class="kpi-label">
                    Actual Loss
                </div>

                <div class="kpi-value">
                    $${Number(asset.estimatedLoss || 0).toLocaleString()}k
                </div>

                <div class="kpi-description">
                    Equipment performance case
                </div>

            </div>


            <div class="kpi-card">

                <div class="kpi-label">
                    PM Compliance
                </div>

                <div class="kpi-value">
                    ${asset.pmCompliance}%
                </div>

                <div class="kpi-description">
                    Maintenance performance
                </div>

            </div>

        </div>


        <div class="detail-section">

            <div class="section-label">
                HISTORICAL FAILURE
            </div>

            <h2>
                ${asset.failureMode}
            </h2>

            <div class="failure-info-grid">

                <div>
                    <span>Failure Date</span>
                    <strong>${asset.failureDate}</strong>
                </div>

                <div>
                    <span>Criticality</span>
                    <strong>${asset.criticality}</strong>
                </div>

                <div>
                    <span>Alarm Events</span>
                    <strong>${asset.alarmCount}</strong>
                </div>

                <div>
                    <span>Trip Events</span>
                    <strong>${asset.tripCount}</strong>
                </div>

                <div>
                    <span>MTBF</span>
                    <strong>${asset.mtbf} h</strong>
                </div>

                <div>
                    <span>MTTR</span>
                    <strong>${asset.mttr} h</strong>
                </div>

            </div>

        </div>
        <div class="detail-section condition-trend-section">

    <div class="section-label">
        CONDITION TREND
    </div>

    <div class="condition-trend-heading">

        <div>
            <h2>
                Equipment Degradation Signature
            </h2>

            <p class="evidence-description">
                Historical condition measurements with governed
                alarm and trip thresholds.
            </p>
        </div>

        <select id="conditionParameterSelect"
                class="condition-parameter-select">
        </select>

    </div>

    <div class="condition-chart-container">
        <canvas id="assetConditionChart"></canvas>
    </div>

    <div class="chart-governance-note">
        Source: governed Equipment Performance condition history.
        Alarm and trip limits originate from equipment-specific
        source thresholds.
    </div>

</div>
        <div class="detail-section">

            <div class="section-label">
                CONDITION EVIDENCE
            </div>

            <h2>
                Governed Parameter Thresholds
            </h2>

            <p class="evidence-description">
                Parameter status is calculated from equipment-specific
                alarm and trip thresholds.
            </p>


            <div class="condition-grid">

                ${conditionCards ||
        `
                    <div class="no-data-message">
                        Condition history has not been loaded
                        for this asset yet.
                    </div>
                    `
        }

            </div>

        </div>

        <div class="investigation-cta">

            <div>

                <div class="section-label">
                    NEXT STEP
                </div>

                <h2>
                    Investigate probable root cause
                </h2>

                <p>
                    Review condition history, threshold excursions,
                    similar incidents and RCA evidence.
                </p>

            </div>


            <button class="primary-btn"
                    onclick="openAIInvestigation('${asset.tag}')">

                Investigate with IMX →

            </button>

        </div>
    `;
     initializeAssetConditionChart(
        asset,
        assetConditions
    );
}
// ========================================
// ASSET CONDITION TREND
// ========================================

let assetConditionChartInstance = null;


// ========================================
// FAILURE EVENT PLUGIN
// ========================================

const failureEventPlugin = {

    id: "failureEventMarker",

    afterDraw(chart, args, pluginOptions) {

        if (!pluginOptions || !pluginOptions.failureDate) {
            return;
        }

        const labels = chart.data.labels || [];

        if (labels.length === 0) {
            return;
        }

        const targetDate = new Date(pluginOptions.failureDate);

        if (isNaN(targetDate.getTime())) {
            return;
        }

        let closestIndex = -1;
        let closestDistance = Infinity;

        labels.forEach(function (label, index) {

            const date = new Date(label);

            if (isNaN(date.getTime())) {
                return;
            }

            const distance = Math.abs(
                date.getTime() - targetDate.getTime()
            );

            if (distance < closestDistance) {
                closestDistance = distance;
                closestIndex = index;
            }
        });

        if (closestIndex < 0) {
            return;
        }

        const xScale = chart.scales.x;
        const yScale = chart.scales.y;

        if (!xScale || !yScale) {
            return;
        }

        const x = xScale.getPixelForValue(closestIndex);
        const ctx = chart.ctx;

        ctx.save();

        // Vertical failure line
        ctx.beginPath();
        ctx.setLineDash([6, 5]);
        ctx.lineWidth = 2;
        ctx.strokeStyle = "#dc2626";

        ctx.moveTo(x, yScale.top);
        ctx.lineTo(x, yScale.bottom);
        ctx.stroke();

        ctx.setLineDash([]);

        // Failure event label
        const label = "FAILURE EVENT";

        ctx.font = "600 10px Arial";

        const labelWidth =
            ctx.measureText(label).width + 14;

        let labelX = x + 6;

        if (labelX + labelWidth > chart.chartArea.right) {
            labelX = x - labelWidth - 6;
        }

        ctx.fillStyle = "#dc2626";

        ctx.fillRect(
            labelX,
            yScale.top + 8,
            labelWidth,
            20
        );

        ctx.fillStyle = "#ffffff";

        ctx.fillText(
            label,
            labelX + 7,
            yScale.top + 22
        );

        ctx.restore();
    }
};


// ========================================
// INITIALIZE ASSET CONDITION CHART
// ========================================

function initializeAssetConditionChart(asset, conditions) {

    const selector =
        document.getElementById("conditionParameterSelect");

    const canvas =
        document.getElementById("assetConditionChart");


    if (
        !selector ||
        !canvas ||
        !Array.isArray(conditions) ||
        conditions.length === 0
    ) {
        console.warn(
            "Condition chart unavailable:",
            asset ? asset.tag : "Unknown Asset"
        );

        return;
    }


    // Only use parameters that contain historical data
    const availableConditions =
        conditions.filter(function (condition) {

            return (
                Array.isArray(condition.history) &&
                condition.history.length > 0
            );

        });


    if (availableConditions.length === 0) {

        console.warn(
            "No historical condition data for:",
            asset.tag
        );

        return;
    }


    // Build parameter selector
    selector.innerHTML =
        availableConditions
            .map(function (condition, index) {

                const unit = condition.unit || "";

                return `
                    <option value="${index}">
                        ${condition.parameter}
                        ${unit ? `(${unit})` : ""}
                    </option>
                `;

            })
            .join("");


    function renderConditionTrend(index) {

        const condition =
            availableConditions[index];

        if (!condition) {
            return;
        }


        const history = condition.history;


        // X-axis labels
        const labels =
            history.map(function (point) {

                return (
                    point.timestamp ||
                    point.date ||
                    point.time ||
                    ""
                );

            });


        // Actual measurements
        const actualValues =
            history.map(function (point) {

                const value = Number(point.value);

                return Number.isFinite(value)
                    ? value
                    : null;

            });


        const alarmLimit =
            Number(condition.alarmLimit);

        const tripLimit =
            Number(condition.tripLimit);


        const alarmValues =
            history.map(function () {

                return Number.isFinite(alarmLimit)
                    ? alarmLimit
                    : null;

            });


        const tripValues =
            history.map(function () {

                return Number.isFinite(tripLimit)
                    ? tripLimit
                    : null;

            });


        const unit = getConditionUnit(condition);


        const parameterLabel =
            unit
                ? `${condition.parameter} (${unit})`
                : condition.parameter;


        // Destroy previous chart before rendering another parameter
        if (assetConditionChartInstance) {

            assetConditionChartInstance.destroy();

            assetConditionChartInstance = null;
        }


        assetConditionChartInstance =
            new Chart(
                canvas.getContext("2d"),
                {

                    type: "line",

                    plugins: [
                        failureEventPlugin
                    ],

                    data: {

                        labels: labels,

                        datasets: [

                            {
                                label: parameterLabel,

                                data: actualValues,

                                borderWidth: 2.5,

                                pointRadius: 3,

                                pointHoverRadius: 5,

                                tension: 0.18
                            },

                            {
                                label:
                                    unit
                                        ? `Alarm Threshold (${alarmLimit} ${unit})`
                                        : `Alarm Threshold (${alarmLimit})`,

                                data: alarmValues,

                                borderWidth: 1.5,

                                borderDash: [7, 5],

                                pointRadius: 0,

                                tension: 0
                            },

                            {
                                label:
                                    unit
                                        ? `Trip Threshold (${tripLimit} ${unit})`
                                        : `Trip Threshold (${tripLimit})`,

                                data: tripValues,

                                borderWidth: 1.5,

                                borderDash: [3, 4],

                                pointRadius: 0,

                                tension: 0
                            }

                        ]
                    },


                    options: {

                        responsive: true,

                        maintainAspectRatio: false,

                        interaction: {
                            mode: "index",
                            intersect: false
                        },


                        plugins: {

                            failureEventMarker: {
                                failureDate: asset.failureDate
                            },

                            legend: {
                                position: "top",
                                align: "end"
                            },

                            tooltip: {

                                callbacks: {

                                    label: function (context) {

                                        const value =
                                            context.parsed.y;

                                        return (
                                            context.dataset.label +
                                            ": " +
                                            value
                                        );
                                    }
                                }
                            }
                        },


                        scales: {

                            x: {

                                grid: {
                                    display: false
                                },

                                ticks: {
                                    maxRotation: 45,
                                    minRotation: 0,
                                    autoSkip: true,
                                    maxTicksLimit: 12
                                }
                            },


                            y: {

                                beginAtZero: false,

                                title: {

                                    display: true,

                                    text: parameterLabel
                                },

                                grid: {
                                    color:
                                        "rgba(130,150,170,0.12)"
                                }
                            }
                        }
                    }
                }
            );
    }


    // Initial parameter
    renderConditionTrend(0);


    // Change parameter
    selector.addEventListener(
        "change",
        function () {

            renderConditionTrend(
                Number(this.value)
            );
        }
    );
}


// ========================================
// PARAMETER STATUS
// ========================================

function calculateParameterStatus(
    value,
    alarmLimit,
    tripLimit,
    direction
) {

    const numericValue = Number(value);
    const numericAlarm = Number(alarmLimit);
    const numericTrip = Number(tripLimit);


    if (!Number.isFinite(numericValue)) {

        return {
            status: "NO DATA",
            className: "status-neutral"
        };
    }


    // Higher value = worse condition
    if (direction === "high") {

        if (
            Number.isFinite(numericTrip) &&
            numericValue >= numericTrip
        ) {

            return {
                status: "TRIP",
                className: "status-red"
            };
        }


        if (
            Number.isFinite(numericAlarm) &&
            numericValue >= numericAlarm
        ) {

            return {
                status: "ALARM",
                className: "status-amber"
            };
        }


        return {
            status: "NORMAL",
            className: "status-green"
        };
    }


    // Lower value = worse condition
    if (direction === "low") {

        if (
            Number.isFinite(numericTrip) &&
            numericValue <= numericTrip
        ) {

            return {
                status: "TRIP",
                className: "status-red"
            };
        }


        if (
            Number.isFinite(numericAlarm) &&
            numericValue <= numericAlarm
        ) {

            return {
                status: "ALARM",
                className: "status-amber"
            };
        }


        return {
            status: "NORMAL",
            className: "status-green"
        };
    }


    return {
        status: "NO DATA",
        className: "status-neutral"
    };
}
// ========================================
// AI INVESTIGATION
// ========================================

async function openAIInvestigation(tag) {

    mainContent.innerHTML = `
        <h1 class="page-title">AI Investigation</h1>

        <p class="page-subtitle">
            Loading governed RCA evidence...
        </p>
    `;

    try {

        const response = await fetch("data/rca.json");

        if (!response.ok) {
            throw new Error("rca.json could not be loaded.");
        }

        const rcaData = await response.json();

        const rca = rcaData.find(function (item) {
            return item.tag === tag;
        });

        if (!rca) {
            throw new Error("No RCA evidence found for " + tag);
        }

        console.log("RCA loaded:", rca);

        renderAIInvestigation(rca);

    }

    catch (error) {

        console.error("RCA loading error:", error);

        mainContent.innerHTML = `
            <h1 class="page-title">AI Investigation</h1>

            <p class="page-subtitle">
                Investigation data could not be loaded.
            </p>

            <div class="kpi-card" style="margin-top: 25px;">

                <div class="kpi-label">
                    RCA DATA ERROR
                </div>

                <div class="kpi-value">
                    ${tag}
                </div>

                <div class="kpi-description">
                    ${error.message}
                </div>

            </div>
        `;
    }
}
function renderAIInvestigation(rca) {

    let evidenceHTML = "";

    rca.evidence.forEach(function (item) {

        evidenceHTML += `
            <div class="evidence-item">

                <div class="evidence-type">
                    ${item.type}
                </div>

                <div class="evidence-finding">
                    ${item.finding}
                </div>

            </div>
        `;
    });


    mainContent.innerHTML = `

        <button class="back-btn"
                onclick="showAssetDetail('${rca.tag}')">
            ← Back to Asset
        </button>


        <div class="page-heading-row">

            <div>

                <div class="asset-tag-large">
                    ${rca.tag} • ${rca.arNumber}
                </div>

                <h1 class="page-title">
                    AI Investigation
                </h1>

                <p class="page-subtitle">
                    Evidence-grounded root cause indication
                </p>

            </div>


            <div class="data-label">
                HUMAN VALIDATION REQUIRED
            </div>

        </div>


        <div class="investigation-banner">

            <div class="section-label">
                EVENT UNDER INVESTIGATION
            </div>

            <h2>
                ${rca.event}
            </h2>

            <p>
                Failure date: ${rca.failureDate}
            </p>

        </div>


        <div class="investigation-layout">


            <div class="investigation-panel">

                <div class="section-label">
                    01 — EVIDENCE
                </div>

                <h2>
                    What did IMX observe?
                </h2>

                <div class="evidence-list">
                    ${evidenceHTML}
                </div>

            </div>


            <div class="investigation-panel root-cause-panel">

                <div class="section-label">
                    02 — ROOT CAUSE INDICATION
                </div>

                <h2>
                    Probable Root Cause
                </h2>

                <p class="root-cause-text">
                    ${rca.probableRootCause}
                </p>


                <div class="cause-detail">

                    <span>
                        Physical Cause
                    </span>

                    <strong>
                        ${rca.physicalCause}
                    </strong>

                </div>


                <div class="cause-detail">

                    <span>
                        Detection Gap
                    </span>

                    <strong>
                        ${rca.detectionGap}
                    </strong>

                </div>

            </div>


        </div>


        <div class="traceability-note">

            <strong>Traceability:</strong>

            Root cause indication is grounded in equipment condition
            evidence and historical RCA records. IMX recommendations
            require human validation before execution.

        </div>


        <div class="recommendation-preview">

            <div>

                <div class="section-label">
                    NEXT STEP
                </div>

                <h2>
                    Translate insight into accountable action
                </h2>

                <p>
                    Review corrective, preventive and proactive
                    recommendations before assigning ownership.
                </p>

            </div>


            <button class="primary-btn"
                    onclick="showRecommendations('${rca.tag}')">

                Review Recommendations →

            </button>

        </div>
    `;
}
// ========================================
// RECOMMENDATIONS
// ========================================

async function showRecommendations(tag) {

    mainContent.innerHTML = `
        <h1 class="page-title">Action Recommendations</h1>

        <p class="page-subtitle">
            Loading RCA-based recommendations...
        </p>
    `;

    try {

        const response = await fetch("data/rca.json");

        if (!response.ok) {
            throw new Error("rca.json could not be loaded.");
        }

        const rcaData = await response.json();

        const rca = rcaData.find(function (item) {
            return item.tag === tag;
        });

        if (!rca) {
            throw new Error("No recommendation data found for " + tag);
        }

        renderRecommendations(rca);

    }

    catch (error) {

        console.error("Recommendation error:", error);

        mainContent.innerHTML = `
            <h1 class="page-title">
                Action Recommendations
            </h1>

            <div class="kpi-card" style="margin-top: 25px;">

                <div class="kpi-label">
                    DATA ERROR
                </div>

                <div class="kpi-value">
                    ${tag}
                </div>

                <div class="kpi-description">
                    ${error.message}
                </div>

            </div>
        `;
    }
}
function buildActionItems(actions, type) {

    let html = "";

    actions.forEach(function (action, index) {

        html += `
            <div class="action-item">

                <div class="action-number">
                    ${index + 1}
                </div>

                <div class="action-content">

                    <div class="action-text">
                        ${action}
                    </div>

                    <div class="action-source">
                        RCA-BASED RECOMMENDATION
                    </div>

                </div>

                <div class="action-decision">

                    <select
                        class="decision-select"
                        id="${type}-${index}"
                    >
                        <option value="Pending">
                            Pending Review
                        </option>

                        <option value="Approved">
                            Approve
                        </option>

                        <option value="Modify">
                            Modify
                        </option>

                        <option value="Rejected">
                            Reject
                        </option>

                    </select>

                </div>

            </div>
        `;
    });

    return html;
}
function renderRecommendations(rca) {

    const correctiveHTML =
        buildActionItems(
            rca.correctiveActions,
            "corrective"
        );

    const preventiveHTML =
        buildActionItems(
            rca.preventiveActions,
            "preventive"
        );

    const proactiveHTML =
        buildActionItems(
            rca.proactiveActions,
            "proactive"
        );


    mainContent.innerHTML = `

        <button class="back-btn"
                onclick="openAIInvestigation('${rca.tag}')">
            ← Back to Investigation
        </button>


        <div class="page-heading-row">

            <div>

                <div class="asset-tag-large">
                    ${rca.tag} • ${rca.arNumber}
                </div>

                <h1 class="page-title">
                    Action Recommendations
                </h1>

                <p class="page-subtitle">
                    Translate RCA insight into accountable action
                </p>

            </div>


            <div class="data-label">
                HUMAN-IN-THE-LOOP
            </div>

        </div>


        <div class="recommendation-context">

            <div class="section-label">
                ROOT CAUSE CONTEXT
            </div>

            <strong>
                ${rca.probableRootCause}
            </strong>

        </div>


        <div class="action-category corrective-category">

            <div class="action-category-header">

                <div>

                    <div class="category-code">
                        01
                    </div>

                    <h2>
                        Corrective Actions
                    </h2>

                    <p>
                        Restore the failed equipment
                        and remove the immediate cause.
                    </p>

                </div>

                <span class="category-badge">
                    CORRECT
                </span>

            </div>

            ${correctiveHTML}

        </div>


        <div class="action-category preventive-category">

            <div class="action-category-header">

                <div>

                    <div class="category-code">
                        02
                    </div>

                    <h2>
                        Preventive Actions
                    </h2>

                    <p>
                        Reduce the probability of recurrence
                        through monitoring and maintenance improvement.
                    </p>

                </div>

                <span class="category-badge">
                    PREVENT
                </span>

            </div>

            ${preventiveHTML}

        </div>


        <div class="action-category proactive-category">

            <div class="action-category-header">

                <div>

                    <div class="category-code">
                        03
                    </div>

                    <h2>
                        Proactive Actions
                    </h2>

                    <p>
                        Extend learning to similar equipment
                        before another failure occurs.
                    </p>

                </div>

                <span class="category-badge">
                    PROACT
                </span>

            </div>

            ${proactiveHTML}

        </div>


        <div class="human-validation-box">

            <div>

                <div class="section-label">
                    HUMAN VALIDATION
                </div>

                <h2>
                    Review before creating actions
                </h2>

                <p>
                    IMX recommends. The responsible engineer
                    validates the action before execution.
                </p>

            </div>


            <button
                class="primary-btn"
                onclick="prepareActionAssignment('${rca.tag}')"
            >
                Continue to Assignment →
            </button>

        </div>
    `;
}
// ========================================
// ACTION ASSIGNMENT
// ========================================

async function prepareActionAssignment(tag) {

    const approvedActions = [];

    document.querySelectorAll(".decision-select").forEach(function (select) {

        if (select.value === "Approved") {

            const actionItem = select.closest(".action-item");

            const actionText =
                actionItem.querySelector(".action-text").innerText;

            let actionType = "Action";

            if (select.id.startsWith("corrective")) {
                actionType = "Corrective";
            }

            else if (select.id.startsWith("preventive")) {
                actionType = "Preventive";
            }

            else if (select.id.startsWith("proactive")) {
                actionType = "Proactive";
            }

            approvedActions.push({
                text: actionText,
                type: actionType
            });
        }

    });


    if (approvedActions.length === 0) {

        alert(
            "Please approve at least one recommendation before continuing."
        );

        return;
    }


    window.pendingIMXActions = approvedActions;


    let actionRows = "";

    approvedActions.forEach(function (action, index) {

        actionRows += `

            <div class="assignment-card">

                <div class="assignment-action">

                    <div class="category-badge">
                        ${action.type.toUpperCase()}
                    </div>

                    <strong>
                        ${action.text}
                    </strong>

                </div>


                <div class="assignment-fields">

                    <div class="form-group">

                        <label>
                            PIC
                        </label>

                        <select id="pic-${index}">

                            <option value="">
                                Select owner
                            </option>

                            <option value="Rotating Engineer">
                                Rotating Engineer
                            </option>

                            <option value="Maintenance Engineer">
                                Maintenance Engineer
                            </option>

                            <option value="Reliability Engineer">
                                Reliability Engineer
                            </option>

                            <option value="Inspection Engineer">
                                Inspection Engineer
                            </option>

                            <option value="Operations">
                                Operations
                            </option>

                        </select>

                    </div>


                    <div class="form-group">

                        <label>
                            Due Date
                        </label>

                        <input
                            type="date"
                            id="due-${index}"
                        >

                    </div>


                    <div class="form-group">

                        <label>
                            Priority
                        </label>

                        <select id="priority-${index}">

                            <option value="P1">
                                P1 — Critical
                            </option>

                            <option value="P2" selected>
                                P2 — High
                            </option>

                            <option value="P3">
                                P3 — Medium
                            </option>

                            <option value="P4">
                                P4 — Monitor
                            </option>

                        </select>

                    </div>

                </div>

            </div>
        `;
    });


    mainContent.innerHTML = `

        <button class="back-btn"
                onclick="showRecommendations('${tag}')">
            ← Back to Recommendations
        </button>


        <div class="page-heading-row">

            <div>

                <div class="asset-tag-large">
                    ${tag}
                </div>

                <h1 class="page-title">
                    Action Assignment
                </h1>

                <p class="page-subtitle">
                    Assign ownership and due dates
                    before execution
                </p>

            </div>


            <div class="data-label">
                ACCOUNTABILITY GATE
            </div>

        </div>


        <div class="assignment-info">

            <strong>
                ${approvedActions.length}
                approved recommendation(s)
            </strong>

            <span>
                Each action requires an owner,
                due date and priority.
            </span>

        </div>


        <div class="assignment-list">

            ${actionRows}

        </div>


        <div class="human-validation-box">

            <div>

                <div class="section-label">
                    READY FOR EXECUTION
                </div>

                <h2>
                    Create accountable actions
                </h2>

                <p>
                    Approved recommendations will enter
                    the Action Hub for tracking to closure.
                </p>

            </div>


            <button
                class="primary-btn"
                onclick="createIMXActions('${tag}')"
            >
                Create Actions →
            </button>

        </div>
    `;
}
// ========================================
// CREATE ACTIONS
// ========================================

function createIMXActions(tag) {

    const pendingActions =
        window.pendingIMXActions || [];

    const newActions = [];


    for (let index = 0; index < pendingActions.length; index++) {

        const action = pendingActions[index];

        const pic =
            document.getElementById(`pic-${index}`).value;

        const dueDate =
            document.getElementById(`due-${index}`).value;

        const priority =
            document.getElementById(`priority-${index}`).value;


        if (!pic || !dueDate) {

            alert(
                "Please assign PIC and Due Date for every action."
            );

            return;
        }


        const actionID =
            "ACT-" +
            Date.now().toString().slice(-6) +
            "-" +
            (index + 1);


        newActions.push({

            id: actionID,

            tag: tag,

            type: action.type,

            action: action.text,

            pic: pic,

            dueDate: dueDate,

            priority: priority,

            status: "OPEN",

            source: "IMX RCA Recommendation",

            createdAt:
                new Date().toISOString()

        });

    }


    const existingActions =
        JSON.parse(
            localStorage.getItem("imxActions")
        ) || [];


    const updatedActions =
        existingActions.concat(newActions);


    localStorage.setItem(
        "imxActions",
        JSON.stringify(updatedActions)
    );


    console.log(
        "IMX Actions Created:",
        newActions
    );


    showActionHub();
}
// ========================================
// ACTION HUB
// ========================================

function showActionHub() {

    const actions =
        JSON.parse(
            localStorage.getItem("imxActions")
        ) || [];
    const inProgressActions = actions.filter(function (action) {
        return action.status === "IN PROGRESS";
    }).length;

    let rows = "";


    if (actions.length === 0) {

        rows = `

            <tr>

                <td colspan="9"
                    class="empty-table">

                    No accountable actions created yet.

                </td>

            </tr>
        `;

    }


    else {

        actions.forEach(function (action) {

            rows += `

                <tr>

                    <td>
                        <strong>
                            ${action.id}
                        </strong>
                    </td>

                    <td>
                        ${action.tag}
                    </td>

                    <td>
                        <span class="category-badge">
                            ${action.type}
                        </span>
                    </td>

                    <td class="action-description-cell">
                        ${action.action}
                    </td>

                    <td>
                        ${action.pic}
                    </td>

                    <td>
                        ${action.dueDate}
                    </td>

                    <td>
                        <span class="priority-badge">
                            ${action.priority}
                        </span>
                    </td>

                    <td>
                        <span class="action-status ${getActionStatusClass(action.status)}">
                            ${action.status}
                        </span>
                    </td>

                    <td>
                       <button
                           class="action-update-btn"
                           onclick="openActionDetail('${action.id}')"
                    >
                         Update
                    </button>
                    </td>
                </tr>
            `;

        });

    }


    const openActions =
        actions.filter(function (action) {
            return action.status === "OPEN";
        }).length;


    const closedActions =
        actions.filter(function (action) {
            return action.status === "CLOSED";
        }).length;


    mainContent.innerHTML = `

        <div class="page-heading-row">

            <div>

                <h1 class="page-title">
                    Action Hub
                </h1>

                <p class="page-subtitle">
                    Track accountable actions
                    from recommendation to closure
                </p>

            </div>


            <div class="data-label">
                GOVERNED WORKFLOW
            </div>

        </div>


        <div class="action-kpi-grid">

            <div class="kpi-card">

                <div class="kpi-label">
                    Total Actions
                </div>

                <div class="kpi-value">
                    ${actions.length}
                </div>

                <div class="kpi-description">
                    Created from validated recommendations
                </div>

            </div>


            <div class="kpi-card">

                <div class="kpi-label">
                    Open
                </div>

                <div class="kpi-value">
                    ${openActions}
                </div>

                <div class="kpi-description">
                    Require follow-up
                </div>

            </div>
            
            <div class="kpi-card">

            <div class="kpi-label">
                In Progress
            </div>

             <div class="kpi-value">
                 ${inProgressActions}
            </div>

            <div class="kpi-description">
              Actions under execution
            </div>

        </div>

            <div class="kpi-card">

                <div class="kpi-label">
                    Closed
                </div>

                <div class="kpi-value">
                    ${closedActions}
                </div>

                <div class="kpi-description">
                    Verified closure
                </div>

            </div>

        </div>


        <div class="table-card">

            <div class="table-header">

                <div>

                    <h2>
                        Accountable Action Register
                    </h2>

                    <p>
                        Owner • due date • priority • status
                    </p>

                </div>

            </div>


            <div class="table-wrapper">

                <table class="asset-table">

                    <thead>
                        <tr>
                            <th>ACTION ID</th>
                            <th>ASSET</th>
                            <th>TYPE</th>
                            <th>ACTION</th>
                            <th>PIC</th>
                            <th>DUE DATE</th>
                            <th>PRIORITY</th>
                            <th>STATUS</th>
                            <th>UPDATE</th>
                        </tr>
                    </thead>

                    <tbody>
                        ${rows}
                    </tbody>

                </table>

            </div>

        </div>
    `;
}
function openActionDetail(actionId) {
    const actions = JSON.parse(localStorage.getItem("imxActions")) || [];
    const action = actions.find(function (item) {
        return item.id === actionId;
    });

    if (!action) {
        alert("Action not found.");
        return;
    }

    const closureEvidence = action.closureEvidence || "";

    mainContent.innerHTML = `
        <button class="back-btn" onclick="showActionHub()">
            ← Back to Action Hub
        </button>

        <div class="page-header">
            <div>
                <h1>Action Detail</h1>
                <p>
                    Track execution, ownership and closure evidence.
                </p>
            </div>
        </div>

        <div class="detail-grid">

            <div class="detail-card">
                <span>Action ID</span>
                <strong>${action.id}</strong>
            </div>

            <div class="detail-card">
                <span>Asset</span>
                <strong>${action.tag}</strong>
            </div>

            <div class="detail-card">
                <span>Type</span>
                <strong>${action.type}</strong>
            </div>

            <div class="detail-card">
                <span>Priority</span>
                <strong>${action.priority}</strong>
            </div>

            <div class="detail-card">
                <span>PIC</span>
                <strong>${action.pic}</strong>
            </div>

            <div class="detail-card">
                <span>Due Date</span>
                <strong>${action.dueDate}</strong>
            </div>

        <div class="action-detail-panel">

            <h2>Action</h2>

            <p class="action-detail-description">
                ${action.action}
            </p>

            <div class="form-group">
                <label>Status</label>

                <select id="actionStatus">

                    <option value="OPEN"
                        ${action.status === "OPEN" ? "selected" : ""}>
                        OPEN
                    </option>

                    <option value="IN PROGRESS"
                        ${action.status === "IN PROGRESS" ? "selected" : ""}>
                        IN PROGRESS
                    </option>

                    <option value="CLOSED"
                        ${action.status === "CLOSED" ? "selected" : ""}>
                        CLOSED
                    </option>

                </select>
            </div>

            <div class="form-group">

                <label>
                    Closure Evidence
                </label>

                <textarea
                    id="closureEvidence"
                    rows="5"
                    placeholder="Describe completed work, verification result, inspection evidence, or other closure evidence..."
                >${closureEvidence}</textarea>

                <small>
                    Closure evidence is mandatory when status is CLOSED.
                </small>

            </div>

            <button
                class="primary-btn"
                onclick="saveActionUpdate('${action.id}')"
            >
                Save Update
            </button>

        </div>
    `;
}
function saveActionUpdate(actionId) {

    const actions = JSON.parse(localStorage.getItem("imxActions")) || [];

    const actionIndex = actions.findIndex(function (item) {
        return item.id === actionId;
    });

    if (actionIndex === -1) {
        alert("Action not found.");
        return;
    }

    const newStatus = document.getElementById("actionStatus").value;

    const closureEvidence =
        document.getElementById("closureEvidence").value.trim();

    if (newStatus === "CLOSED" && closureEvidence === "") {
        alert("Closure Evidence is required before an action can be CLOSED.");
        return;
    }

    actions[actionIndex].status = newStatus;
    actions[actionIndex].closureEvidence = closureEvidence;
    actions[actionIndex].lastUpdated = new Date().toISOString();

    if (newStatus === "CLOSED") {

        if (!actions[actionIndex].closedAt) {
            actions[actionIndex].closedAt = new Date().toISOString();
        }

    } else {
        actions[actionIndex].closedAt = null;
    }

    localStorage.setItem(
        "imxActions",
        JSON.stringify(actions)
    );

    alert("Action updated successfully.");

    showActionHub();
}
function getActionStatusClass(status) {
    if (status === "CLOSED") {
        return "action-status-closed";
    }

    if (status === "IN PROGRESS") {
        return "action-status-progress";
    }

    return "action-status-open";
}
// ==========================================
// TEST - READ RAW EXCEL
// ==========================================

// ==========================================
// IMX DATA FOUNDATION
// Raw Excel -> Governed Data
// ==========================================

async function loadEquipmentWorkbook(filePath) {
    const response = await fetch(filePath);

    if (!response.ok) {
        throw new Error(`Failed to load: ${filePath}`);
    }

    const arrayBuffer = await response.arrayBuffer();

    return XLSX.read(arrayBuffer, {
        type: "array"
    });
}


// ==========================================
// CLEAN EQUIPMENT INFO
// ==========================================

function cleanEquipmentInfo(workbook) {

    const sheet = workbook.Sheets["Equipment Info"];

    const rows = XLSX.utils.sheet_to_json(sheet, {
        header: 1,
        defval: null
    });

    const equipment = {};

    rows.forEach(row => {

        const field = row[0];
        const value = row[1];

        if (field && value !== null) {
            equipment[field] = value;
        }

    });

    return {
        tag: equipment["Equipment Tag"],
        equipmentName: equipment["Equipment Name"],
        equipmentType: equipment["Equipment Type"],
        equipmentClass: equipment["Equipment Class"],
        plant: equipment["Plant / Unit"],
        discipline: equipment["Discipline"],
        criticality: equipment["Criticality"],
        monitoringMethod: equipment["Monitoring Method"],
        arNumber: equipment["Linked RCA / AR No."],
        failureDate: equipment["Failure Date"],
        failureMode: equipment["Dominant Failure Mode"]
    };
}

// ==========================================
// CLEAN PERFORMANCE SUMMARY
// ==========================================

function cleanPerformanceSummary(workbook) {

    const sheet = workbook.Sheets["Performance Summary"];

    const rows = XLSX.utils.sheet_to_json(sheet, {
        header: 1,
        defval: null
    });
    console.log("PERFORMANCE SUMMARY FIELDS:");

    rows.forEach(function (row) {
        console.log(row[0], "=", row[1]);
    });
    const summary = {};

    rows.forEach(row => {

        const field = row[0];
        const value = row[1];

        if (field && value !== null) {
            summary[field] = value;
        }

    });

    return {
        availability: summary["Availability (%)"],
        mtbf: summary["MTBF (hours)"],
        mttr: summary["MTTR (hours)"],

        alarmCount: summary["ALARM readings"],
        tripCount: summary["TRIP readings"],
        normalCount: summary["NORMAL readings"],

        pmCompliance: summary["PM Compliance (%)"],
        downtime: summary["Total Downtime (hours)"],
        productionLoss: summary["Production Loss (ton)"],

        estimatedLoss: summary["Estimated Loss (k USD)"]
    };
}
// ==========================================
// CLEAN CONDITION HISTORY
// ==========================================

function cleanConditionHistory(workbook, tag) {

    const sheet = workbook.Sheets["Condition History"];

    const rows = XLSX.utils.sheet_to_json(sheet, {
        header: 1,
        defval: null
    });

    console.log(`Condition History loaded for ${tag}`);
    console.log(rows);

    return rows;
}
// ==========================================
// CLEAN PARAMETER LIMITS
// ==========================================

function cleanParameterLimits(workbook, tag) {

    const sheet = workbook.Sheets["Equipment Info"];

    const rows = XLSX.utils.sheet_to_json(sheet, {
        header: 1,
        defval: null
    });

    const parameterLimits = [];

    rows.forEach(row => {

        const parameter = row[2];
        const limitText = row[3];

        if (
            parameter &&
            limitText &&
            String(limitText).includes("/")
        ) {

            const parts = String(limitText).split("/");

            const alarmLimit = parseFloat(parts[0].trim());
            const tripLimit = parseFloat(parts[1].trim());

            if (
                !isNaN(alarmLimit) &&
                !isNaN(tripLimit)
            ) {

                parameterLimits.push({
                    tag: tag,
                    parameter: parameter,
                    alarmLimit: alarmLimit,
                    tripLimit: tripLimit,

                    // Jika alarm < trip berarti semakin tinggi semakin buruk
                    // Jika alarm > trip berarti semakin rendah semakin buruk
                    direction: alarmLimit < tripLimit ? "high" : "low"
                });
            }
        }
    });

    return parameterLimits;
}
// ==========================================
// BUILD GOVERNED CONDITION DATA
// ==========================================

function buildGovernedConditionData(
    conditionHistory,
    parameterLimits,
    tag
) {

    if (!conditionHistory || conditionHistory.length < 2) {
        return [];
    }

    // Row pertama = header dari Excel
    const headers = conditionHistory[0];

    const governedConditions = [];

    parameterLimits.forEach(limit => {

        // Cari posisi kolom parameter di Condition History
        // Normalize parameter names before matching
        function normalizeParameterName(name) {

            return String(name || "")
                .toLowerCase()

                // Remove unit inside brackets
                .replace(/\([^)]*\)/g, "")

                // Standardize common naming differences
                .replace(/temperature/g, "temp")
                .replace(/pressure/g, "press")
                .replace(/vibration/g, "vib")

                // Remove symbols and spaces
                .replace(/[^a-z0-9]/g, "")
                .trim();
        }

        const normalizedLimit = normalizeParameterName(limit.parameter);

        const parameterIndex = headers.findIndex(header => {

            if (!header) return false;

            const normalizedHeader = normalizeParameterName(header);

            return (
                normalizedHeader === normalizedLimit ||
                normalizedHeader.includes(normalizedLimit) ||
                normalizedLimit.includes(normalizedHeader)
            );
        });

        if (parameterIndex === -1) {
            console.warn(
                `Parameter "${limit.parameter}" not found in Condition History for ${tag}`
            );
            return;
        }

        const history = [];

        // Mulai dari row 1 karena row 0 adalah header
        for (let i = 1; i < conditionHistory.length; i++) {

            const row = conditionHistory[i];

            if (!row) continue;

            const value = row[parameterIndex];

            if (value === null || value === undefined || value === "") {
                continue;
            }

            history.push({
                week: row[0],
                date: row[1],
                value: value,
                healthStatus: row[6],
                remark: row[7]
            });
        }

        governedConditions.push({
            tag: tag,
            parameter: limit.parameter,
            alarmLimit: limit.alarmLimit,
            tripLimit: limit.tripLimit,
            direction: limit.direction,
            history: history
        });
    });

    return governedConditions;
}
// ==========================================
// EQUIPMENT DATA SOURCES
// ==========================================

const equipmentFiles = [
    "data/raw/Equipment Performance - RCA1 PU-2101B.xlsx",
    "data/raw/Equipment Performance - RCA2 KO-3201.xlsx",
    "data/raw/Equipment Performance - RCA3 PM-4405B.xlsx",
    "data/raw/Equipment Performance - RCA4 HE-3301.xlsx",
    "data/raw/Equipment Performance - RCA5 BL-5702.xlsx"
];

// ==========================================
// PRODUCTION DATA SOURCES
// ==========================================

const productionFiles = [
    "data/raw/Production Data - RCA1 PU-2101B.xlsx",
    "data/raw/Production Data - RCA2 KO-3201.xlsx",
    "data/raw/Production Data - RCA3 PM-4405B.xlsx",
    "data/raw/Production Data - RCA4 HE-3301.xlsx",
    "data/raw/Production Data - RCA5 BL-5702.xlsx"
];

// ==========================================
// PRODUCTION DATA FOUNDATION
// ==========================================

async function buildProductionData() {

    const productionMaster = [];

    for (const filePath of productionFiles) {

        try {

            const response = await fetch(filePath);
            const buffer = await response.arrayBuffer();

            const workbook = XLSX.read(buffer, {
                type: "array"
            });

            const sheet = workbook.Sheets["Sheet2"];

            if (!sheet) {
                console.warn(
                    "Sheet2 not found:",
                    filePath
                );
                continue;
            }

            const rows = XLSX.utils.sheet_to_json(
                sheet,
                {
                    header: 1,
                    defval: null
                }
            );

            if (rows.length < 2) {
                continue;
            }

            // -----------------------------------
            // Identify asset from filename
            // -----------------------------------

            let tag = "UNKNOWN";

            if (filePath.includes("PU-2101B")) {
                tag = "PU-2101B";
            }
            else if (filePath.includes("KO-3201")) {
                tag = "KO-3201";
            }
            else if (filePath.includes("PM-4405B")) {
                tag = "PM-4405B";
            }
            else if (filePath.includes("HE-3301")) {
                tag = "HE-3301";
            }
            else if (filePath.includes("BL-5702")) {
                tag = "BL-5702";
            }


            // -----------------------------------
            // Detect header row automatically
            // -----------------------------------

            let headerIndex = 0;

            for (let i = 0; i < Math.min(rows.length, 15); i++) {

                const text = rows[i]
                    .map(function (value) {
                        return String(value || "")
                            .toLowerCase();
                    })
                    .join(" ");

                if (
                    text.includes("timestamp") ||
                    text.includes("date") ||
                    text.includes("time")
                ) {
                    headerIndex = i;
                    break;
                }
            }


            const headers = rows[headerIndex];

            const dataRows =
                rows.slice(headerIndex + 1);


            const records = dataRows
                .filter(function (row) {

                    return row.some(function (value) {
                        return value !== null &&
                            value !== "";
                    });

                })
                .map(function (row) {

                    const record = {
                        tag: tag
                    };

                    headers.forEach(function (header, index) {

                        if (
                            header !== null &&
                            header !== undefined &&
                            String(header).trim() !== ""
                        ) {

                            record[
                                String(header).trim()
                            ] = row[index];

                        }

                    });

                    return record;

                });


            productionMaster.push({
                tag: tag,
                file: filePath,
                recordCount: records.length,
                records: records
            });

        }
        catch (error) {

            console.error(
                "Production load failed:",
                filePath,
                error
            );

        }

    }


    window.imxProductionData =
        productionMaster;


    console.log(
        "IMX Production Data Ready:",
        productionMaster
    );


    return productionMaster;
}


// Start Production Data Foundation
window.imxProductionReady =
    buildProductionData();

// ==========================================
// BUILD GOVERNED EQUIPMENT MASTER
// ==========================================
async function buildEquipmentMaster() {

    const equipmentMaster = [];
    const allConditionData = [];

    try {

        for (const filePath of equipmentFiles) {

            const workbook = await loadEquipmentWorkbook(filePath);

            // 1. Equipment identity
            const equipment = cleanEquipmentInfo(workbook);

            // 2. Performance KPI
            const performance = cleanPerformanceSummary(workbook);

            // 3. Raw condition history
            const conditionHistory = cleanConditionHistory(
                workbook,
                equipment.tag
            );

            // 4. Alarm / Trip limits
            const parameterLimits = cleanParameterLimits(
                workbook,
                equipment.tag
            );

            // 5. Harmonized condition data
            const governedConditions = buildGovernedConditionData(
                conditionHistory,
                parameterLimits,
                equipment.tag
            );

            // Combine Equipment Info + Performance Summary
            const governedAsset = {
                ...equipment,
                ...performance
            };

            equipmentMaster.push(governedAsset);

            allConditionData.push(...governedConditions);

            console.log(
                `Governed Conditions for ${equipment.tag}:`,
                governedConditions
            );
        }

        // Save governed data in browser memory
        window.imxEquipmentMaster = equipmentMaster;
        window.imxConditionData = allConditionData;

        console.log("IMX Equipment Master successfully created");
        console.table(equipmentMaster);

        console.log(
            "IMX Condition Data successfully created:",
            allConditionData
        );

        return equipmentMaster;

    } catch (error) {

        console.error("Equipment Master Error:", error);

        return [];
    }
}
// Start Equipment Data Foundation
buildEquipmentMaster();
// ==========================================
// INCIDENT DATABASE FOUNDATION
// ==========================================

async function buildIncidentDatabase() {

    try {

        const response = await fetch(
            "data/raw/Incident Database.xlsx"
        );

        if (!response.ok) {
            throw new Error("Incident Database could not be loaded.");
        }

        const buffer = await response.arrayBuffer();

        const workbook = XLSX.read(buffer, {
            type: "array"
        });

        const sheet = workbook.Sheets["Incident Database"];

        const rows = XLSX.utils.sheet_to_json(sheet, {
            header: 1,
            defval: null
        });

        console.log("Incident Database RAW:", rows);

        window.imxIncidentRaw = rows;
        // ==========================================
        // CLEAN INCIDENT DATABASE
        // ==========================================

        // Cari baris header berdasarkan "Serial No"
        const headerIndex = rows.findIndex(function (row) {
            return row && row.includes("Serial No");
        });

        if (headerIndex === -1) {
            throw new Error("Incident Database header not found.");
        }

        const headers = rows[headerIndex];

        // Convert rows below header into objects
        const incidents = rows
            .slice(headerIndex + 1)
            .filter(function (row) {
                return row && row[0] !== null;
            })
            .map(function (row) {

                const record = {};

                headers.forEach(function (header, index) {
                    if (header) {
                        record[header] = row[index];
                    }
                });

                return {
                    serialNo: record["Serial No"],
                    mtoNo: record["MTO No."],
                    arNumber: record["AR No."],
                    plant: record["Plant"],
                    tag: record["Tag Number"],
                    equipmentClass: record["Eq. Class"],
                    occurrenceDate: record["Date of Occur."],
                    caseTitle: record["Risk Case Title"],
                    highestImpact: record["Highest Impact"],
                    preRisk: record["Pre-Risk"],
                    riskScore: Number(record["Risk Score"] || 0),
                    pic: record["PIC (RCA)"],
                    status: record["Overall Status"],
                    discipline: record["Discipline"],
                    equipmentType: record["Eq. Type"],
                    component: record["Component"],
                    failureMechanism: record["F Mechanism"],
                    downtime: Number(record["Downtime (hrs)"] || 0),
                    actualLoss: Number(record["Act. Loss (k US$)"] || 0),
                    potentialLoss: Number(record["Pot. Loss (k US$)"] || 0),
                    totalLoss: Number(record["Total Loss (k US$)"] || 0),
                    rcaDueDate: record["RCA Due Date"],
                    monthYear: record["Month - Year"]
                };
            });

        window.imxIncidents = incidents;

        console.log(
            "IMX Governed Incident Database:",
            incidents.length,
            incidents
        );
        return incidents;

    } catch (error) {

        console.error(
            "Incident Database Error:",
            error
        );

        return [];
    }
}

window.imxIncidentReady = buildIncidentDatabase();
// ==========================================
// PROBLEM TANK
// ==========================================

async function showProblemTank() {

    await window.imxIncidentReady;

    const incidents = window.imxIncidents || [];

    const totalIncidents = incidents.length;

    const totalDowntime = incidents.reduce(function (sum, item) {
        return sum + Number(item.downtime || 0);
    }, 0);

    const totalLoss = incidents.reduce(function (sum, item) {
        return sum + Number(item.totalLoss || 0);
    }, 0);

    const activeCases = incidents.filter(function (item) {
        return item.status !== "RISK CLOSED" &&
            item.status !== "RISK CANCELED";
    }).length;

    const prioritized = [...incidents]
        .sort(function (a, b) {

            if (b.riskScore !== a.riskScore) {
                return b.riskScore - a.riskScore;
            }

            return b.totalLoss - a.totalLoss;
        })
        .slice(0, 15);

    let tableRows = "";

    prioritized.forEach(function (item) {

        let priority = "P4";

        if (item.riskScore >= 1000) {
            priority = "P1";
        }
        else if (item.riskScore >= 400) {
            priority = "P2";
        }
        else if (item.riskScore >= 200) {
            priority = "P3";
        }

        tableRows += `
            <tr>

                <td>
                    <span class="priority-badge">
                        ${priority}
                    </span>
                </td>

                <td>
                    <strong>${item.tag || "N/A"}</strong>
                    <br>
                    <small>${item.plant || ""}</small>
                </td>

                <td>
                    ${item.caseTitle || "N/A"}
                </td>

                <td>
                    ${Number(item.riskScore || 0).toLocaleString()}
                </td>

                <td>
                    ${Number(item.downtime || 0).toLocaleString()} h
                </td>

                <td>
                    $${Number(item.totalLoss || 0).toLocaleString()}k
                </td>

                <td>
                    ${item.status || "N/A"}
                </td>

                <td>
                    ${item.pic || "Unassigned"}
                </td>

            </tr>
        `;
    });

    mainContent.innerHTML = `

        <div class="page-header">

            <div>
                <h1>Problem Tank</h1>

                <p>
                    Governed incident intelligence and
                    risk-based prioritization.
                </p>
            </div>

        </div>


        <div class="kpi-grid">

            <div class="kpi-card">
                <div class="kpi-label">
                    TOTAL INCIDENTS
                </div>

                <div class="kpi-value">
                    ${totalIncidents.toLocaleString()}
                </div>

                <div class="kpi-description">
                    Historical incident records
                </div>
            </div>


            <div class="kpi-card">
                <div class="kpi-label">
                    TOTAL DOWNTIME
                </div>

                <div class="kpi-value">
                    ${totalDowntime.toLocaleString(
        undefined,
        { maximumFractionDigits: 1 }
    )} h
                </div>

                <div class="kpi-description">
                    Historical downtime exposure
                </div>
            </div>


            <div class="kpi-card">
                <div class="kpi-label">
                    LOSS EXPOSURE
                </div>

                <div class="kpi-value">
                    $${(totalLoss / 1000).toFixed(1)}M
                </div>

                <div class="kpi-description">
                    Actual + potential historical loss
                </div>
            </div>


            <div class="kpi-card">
                <div class="kpi-label">
                    ACTIVE CASES
                </div>

                <div class="kpi-value">
                    ${activeCases}
                </div>

                <div class="kpi-description">
                    Excluding closed and canceled
                </div>
            </div>

        </div>


        <div class="detail-section">

            <div class="section-header">

                <div>
                    <h2>Priority Queue</h2>

                    <p>
                        Prioritized by governed risk score,
                        then financial exposure.
                    </p>
                </div>

            </div>


            <div style="overflow-x:auto;">

                <table class="asset-table">

                    <thead>

                        <tr>
                            <th>PRIORITY</th>
                            <th>ASSET</th>
                            <th>INCIDENT</th>
                            <th>RISK SCORE</th>
                            <th>DOWNTIME</th>
                            <th>TOTAL LOSS</th>
                            <th>STATUS</th>
                            <th>PIC</th>
                        </tr>

                    </thead>

                    <tbody>
                        ${tableRows}
                    </tbody>

                </table>

            </div>

        </div>
    `;
}
// ==========================================
// PROBLEM TANK — IMX GOVERNED INCIDENT INTELLIGENCE
// ==========================================

async function showProblemTank() {

    // --------------------------------------------------
    // 1. LOADING STATE
    // --------------------------------------------------
    mainContent.innerHTML = `
        <div class="page-header">
            <div>
                <h1>${t("Problem Tank", "Pusat Masalah")}</h1>
                <p>
                    ${t(
        "Loading governed incident intelligence...",
        "Memuat inteligensi insiden terkelola..."
    )}
                </p>
            </div>
        </div>

        <div class="detail-section">
            <p style="padding:20px; color:#64748b;">
                ${t(
        "Connecting to governed incident data...",
        "Menghubungkan ke data insiden terkelola..."
    )}
            </p>
        </div>
    `;


    try {

        // --------------------------------------------------
        // 2. ENSURE INCIDENT DATABASE IS READY
        // --------------------------------------------------
        if (window.imxIncidentReady) {
            await window.imxIncidentReady;
        }

        // Fallback if the global incident array is not ready
        if (
            (!window.imxIncidents || window.imxIncidents.length === 0) &&
            typeof buildIncidentDatabase === "function"
        ) {
            await buildIncidentDatabase();
        }

        const incidents = Array.isArray(window.imxIncidents)
            ? window.imxIncidents
            : [];


        // --------------------------------------------------
        // 3. EMPTY DATA PROTECTION
        // --------------------------------------------------
        if (incidents.length === 0) {

            mainContent.innerHTML = `
                <div class="page-header">
                    <div>
                        <h1>${t("Problem Tank", "Pusat Masalah")}</h1>

                        <p>
                            ${t(
                "Governed incident intelligence and risk-based prioritization.",
                "Inteligensi insiden terkelola dan prioritisasi berbasis risiko."
            )}
                        </p>
                    </div>
                </div>

                <div class="detail-section">

                    <div style="
                        padding:32px;
                        text-align:center;
                        color:#64748b;
                    ">

                        <h3 style="
                            color:#0b2d4d;
                            margin-bottom:8px;
                        ">
                            ${t(
                "Incident data is not available",
                "Data insiden belum tersedia"
            )}
                        </h3>

                        <p>
                            ${t(
                "IMX could not retrieve the governed Incident Database.",
                "IMX belum dapat mengambil Incident Database yang terkelola."
            )}
                        </p>

                    </div>

                </div>
            `;

            console.error(
                "IMX Problem Tank: window.imxIncidents is empty."
            );

            return;
        }


        // --------------------------------------------------
        // 4. SAFE NUMBER HELPER
        // --------------------------------------------------
        function safeNumber(value) {

            if (
                value === null ||
                value === undefined ||
                value === ""
            ) {
                return 0;
            }

            if (typeof value === "number") {
                return Number.isFinite(value) ? value : 0;
            }

            const cleaned = String(value)
                .replace(/\$/g, "")
                .replace(/,/g, "")
                .trim();

            const number = Number(cleaned);

            return Number.isFinite(number)
                ? number
                : 0;
        }


        // --------------------------------------------------
        // 5. NORMALIZE STATUS
        // --------------------------------------------------
        function normalizeStatus(value) {
            return String(value || "")
                .trim()
                .toUpperCase();
        }


        // --------------------------------------------------
        // 6. KPI CALCULATIONS
        // --------------------------------------------------
        const totalIncidents = incidents.length;


        const totalDowntime = incidents.reduce(
            function (sum, item) {

                return sum + safeNumber(
                    item.downtime ??
                    item.downtimeHours ??
                    item["Downtime (hrs)"]
                );

            },
            0
        );


        const totalLoss = incidents.reduce(
            function (sum, item) {

                return sum + safeNumber(
                    item.totalLoss ??
                    item.loss ??
                    item["Total Loss (k US$)"]
                );

            },
            0
        );


        const activeCases = incidents.filter(
            function (item) {

                const status = normalizeStatus(
                    item.status ??
                    item.overallStatus ??
                    item["Overall Status"]
                );

                return (
                    status !== "RISK CLOSED" &&
                    status !== "RISK CANCELED"
                );
            }
        ).length;


        // --------------------------------------------------
        // 7. INCIDENT LIFECYCLE COUNTS
        // --------------------------------------------------
        const rcaProcess = incidents.filter(
            function (item) {

                const status = normalizeStatus(
                    item.status ??
                    item.overallStatus ??
                    item["Overall Status"]
                );

                return status === "RCA PROCESS";
            }
        ).length;


        const executionCases = incidents.filter(
            function (item) {

                const status = normalizeStatus(
                    item.status ??
                    item.overallStatus ??
                    item["Overall Status"]
                );

                return status === "CA/PA EXECUTION";
            }
        ).length;


        // --------------------------------------------------
        // 8. PRIORITIZATION
        // --------------------------------------------------
        const prioritized = incidents
            .map(function (item) {

                return {
                    ...item,

                    _riskScore: safeNumber(
                        item.riskScore ??
                        item["Risk Score"]
                    ),

                    _totalLoss: safeNumber(
                        item.totalLoss ??
                        item.loss ??
                        item["Total Loss (k US$)"]
                    ),

                    _downtime: safeNumber(
                        item.downtime ??
                        item.downtimeHours ??
                        item["Downtime (hrs)"]
                    )
                };

            })
            .sort(function (a, b) {

                if (b._riskScore !== a._riskScore) {
                    return b._riskScore - a._riskScore;
                }

                return b._totalLoss - a._totalLoss;
            })
            .slice(0, 15);


        // --------------------------------------------------
        // 9. PRIORITY CLASSIFICATION
        // Prototype decision-support rule.
        // --------------------------------------------------
        function getPriority(riskScore) {

            if (riskScore >= 1000) {
                return "P1";
            }

            if (riskScore >= 400) {
                return "P2";
            }

            if (riskScore >= 200) {
                return "P3";
            }

            return "P4";
        }


        // --------------------------------------------------
        // 10. PRIORITY TABLE
        // --------------------------------------------------
        let tableRows = "";


        prioritized.forEach(function (item) {

            const priority =
                getPriority(item._riskScore);


            const tag =
                item.tag ??
                item.tagNumber ??
                item["Tag Number"] ??
                "N/A";


            const plant =
                item.plant ??
                item["Plant"] ??
                "";


            const caseTitle =
                item.caseTitle ??
                item.riskCaseTitle ??
                item["Risk Case Title"] ??
                "N/A";


            const status =
                item.status ??
                item.overallStatus ??
                item["Overall Status"] ??
                "N/A";


            const pic =
                item.pic ??
                item.picRca ??
                item["PIC (RCA)"] ??
                "Unassigned";


            tableRows += `
                <tr>

                    <td>
                        <span class="priority-badge priority-${priority.toLowerCase()}">
                            ${priority}
                        </span>
                    </td>


                    <td>
                        <strong>${tag}</strong>

                        <br>

                        <small style="color:#64748b;">
                            ${plant}
                        </small>
                    </td>


                    <td>
                        <div style="
                            max-width:320px;
                            white-space:normal;
                            line-height:1.35;
                        ">
                            ${caseTitle}
                        </div>
                    </td>


                    <td>
                        <strong>
                            ${item._riskScore.toLocaleString()}
                        </strong>
                    </td>


                    <td>
                        ${item._downtime.toLocaleString(
                undefined,
                {
                    maximumFractionDigits: 1
                }
            )} h
                    </td>


                    <td>
                        <strong>
                            $${item._totalLoss.toLocaleString(
                undefined,
                {
                    maximumFractionDigits: 1
                }
            )}k
                        </strong>
                    </td>


                    <td>
                        <span class="incident-status">
                            ${status}
                        </span>
                    </td>


                    <td>
                        ${pic}
                    </td>

                </tr>
            `;
        });


        // --------------------------------------------------
        // 11. RENDER PAGE
        // --------------------------------------------------
        mainContent.innerHTML = `

            <div class="page-header">

                <div>

                    <div style="
                        display:flex;
                        align-items:center;
                        gap:10px;
                        margin-bottom:4px;
                    ">

                        <h1 style="margin:0;">
                            ${t(
            "Problem Tank",
            "Pusat Masalah"
        )}
                        </h1>

                        <span class="baseline-badge">
                            GOVERNED
                        </span>

                    </div>


                    <p>
                        ${t(
            "Governed incident intelligence, risk prioritization and decision support.",
            "Inteligensi insiden terkelola, prioritisasi risiko, dan dukungan pengambilan keputusan."
        )}
                    </p>

                </div>

            </div>


            <!-- ==========================================
                 PRIMARY KPI
            =========================================== -->

            <div class="kpi-grid">


                <div class="kpi-card">

                    <div class="kpi-label">
                        ${t(
            "TOTAL INCIDENTS",
            "TOTAL INSIDEN"
        )}
                    </div>

                    <div class="kpi-value">
                        ${totalIncidents.toLocaleString()}
                    </div>

                    <div class="kpi-description">
                        ${t(
            "Historical incident baseline",
            "Baseline insiden historis"
        )}
                    </div>

                </div>


                <div class="kpi-card">

                    <div class="kpi-label">
                        ${t(
            "TOTAL DOWNTIME",
            "TOTAL DOWNTIME"
        )}
                    </div>

                    <div class="kpi-value">
                        ${totalDowntime.toLocaleString(
            undefined,
            {
                minimumFractionDigits: 1,
                maximumFractionDigits: 1
            }
        )} h
                    </div>

                    <div class="kpi-description">
                        ${t(
            "Historical downtime exposure",
            "Eksposur downtime historis"
        )}
                    </div>

                </div>


                <div class="kpi-card">

                    <div class="kpi-label">
                        ${t(
            "LOSS EXPOSURE",
            "EKSPOSUR KERUGIAN"
        )}
                    </div>

                    <div class="kpi-value">
                        $${(totalLoss / 1000).toFixed(1)}M
                    </div>

                    <div class="kpi-description">
                        ${t(
            "Actual + potential historical loss",
            "Kerugian aktual + potensial historis"
        )}
                    </div>

                </div>


                <div class="kpi-card">

                    <div class="kpi-label">
                        ${t(
            "ACTIVE CASES",
            "KASUS AKTIF"
        )}
                    </div>

                    <div class="kpi-value">
                        ${activeCases.toLocaleString()}
                    </div>

                    <div class="kpi-description">
                        ${t(
            "Excluding closed and canceled",
            "Tidak termasuk closed dan canceled"
        )}
                    </div>

                </div>

            </div>


            <!-- ==========================================
                 DECISION STRIP
            =========================================== -->

            <div style="
                display:grid;
                grid-template-columns:repeat(3,1fr);
                gap:14px;
                margin:18px 0;
            ">


                <div class="kpi-card">

                    <div class="kpi-label">
                        RCA PROCESS
                    </div>

                    <div style="
                        font-size:24px;
                        font-weight:800;
                        color:#0b2d4d;
                        margin-top:6px;
                    ">
                        ${rcaProcess}
                    </div>

                    <div class="kpi-description">
                        ${t(
            "Cases under root cause analysis",
            "Kasus dalam proses analisis akar masalah"
        )}
                    </div>

                </div>


                <div class="kpi-card">

                    <div class="kpi-label">
                        CA/PA EXECUTION
                    </div>

                    <div style="
                        font-size:24px;
                        font-weight:800;
                        color:#0b2d4d;
                        margin-top:6px;
                    ">
                        ${executionCases}
                    </div>

                    <div class="kpi-description">
                        ${t(
            "Corrective / preventive actions in execution",
            "Tindakan korektif / preventif dalam pelaksanaan"
        )}
                    </div>

                </div>


                <div class="kpi-card">

                    <div class="kpi-label">
                        ${t(
            "PRIORITIZATION",
            "PRIORITISASI"
        )}
                    </div>

                    <div style="
                        font-size:18px;
                        font-weight:800;
                        color:#0b2d4d;
                        margin-top:9px;
                    ">
                        ${t(
            "RISK → LOSS",
            "RISIKO → KERUGIAN"
        )}
                    </div>

                    <div class="kpi-description">
                        ${t(
            "Governed risk score first, loss exposure second",
            "Skor risiko terlebih dahulu, kemudian eksposur kerugian"
        )}
                    </div>

                </div>

            </div>


            <!-- ==========================================
                 PRIORITY QUEUE
            =========================================== -->

            <div class="detail-section">


                <div class="section-header">

                    <div>

                        <h2>
                            ${t(
            "Priority Queue",
            "Antrean Prioritas"
        )}
                        </h2>

                        <p>
                            ${t(
            "Top 15 incidents prioritized by governed risk score, then financial exposure.",
            "15 insiden teratas diprioritaskan berdasarkan skor risiko terkelola, kemudian eksposur finansial."
        )}
                        </p>

                    </div>


                    <div style="
                        text-align:right;
                        font-size:12px;
                        color:#64748b;
                    ">

                        <strong style="
                            display:block;
                            color:#0b2d4d;
                        ">
                            ${totalIncidents}
                            ${t(
            "records",
            "rekaman"
        )}
                        </strong>

                        ${t(
            "Incident Database baseline",
            "Baseline Incident Database"
        )}

                    </div>

                </div>


                <div style="
                    overflow-x:auto;
                    margin-top:12px;
                ">

                    <table class="asset-table">

                        <thead>

                            <tr>

                                <th>
                                    ${t(
            "PRIORITY",
            "PRIORITAS"
        )}
                                </th>

                                <th>
                                    ${t(
            "ASSET",
            "ASET"
        )}
                                </th>

                                <th>
                                    ${t(
            "INCIDENT",
            "INSIDEN"
        )}
                                </th>

                                <th>
                                    ${t(
            "RISK SCORE",
            "SKOR RISIKO"
        )}
                                </th>

                                <th>
                                    DOWNTIME
                                </th>

                                <th>
                                    ${t(
            "TOTAL LOSS",
            "TOTAL KERUGIAN"
        )}
                                </th>

                                <th>
                                    STATUS
                                </th>

                                <th>
                                    PIC
                                </th>

                            </tr>

                        </thead>


                        <tbody>
                            ${tableRows}
                        </tbody>

                    </table>

                </div>


                <div style="
                    margin-top:14px;
                    padding:12px 14px;
                    border:1px solid #dbe7f3;
                    background:#f8fbff;
                    border-radius:10px;
                    font-size:12px;
                    line-height:1.5;
                    color:#64748b;
                ">

                    <strong style="color:#0b2d4d;">
                        ${t(
            "IMX prioritization note:",
            "Catatan prioritisasi IMX:"
        )}
                    </strong>

                    ${t(
            "P1–P4 is an IMX prototype decision-support classification derived from the governed risk score. It does not replace the source risk classification or human validation.",
            "P1–P4 merupakan klasifikasi dukungan keputusan pada prototype IMX yang diturunkan dari skor risiko terkelola. Klasifikasi ini tidak menggantikan klasifikasi risiko sumber maupun validasi manusia."
        )}

                </div>

            </div>

        `;


        // --------------------------------------------------
        // 12. DEBUG / TRACEABILITY
        // --------------------------------------------------
        console.log(
            "IMX Problem Tank:",
            {
                totalIncidents,
                totalDowntime,
                totalLoss,
                activeCases,
                rcaProcess,
                executionCases
            }
        );

    }

    catch (error) {

        console.error(
            "IMX Problem Tank failed:",
            error
        );


        mainContent.innerHTML = `

            <div class="page-header">

                <div>

                    <h1>
                        ${t(
            "Problem Tank",
            "Pusat Masalah"
        )}
                    </h1>

                    <p>
                        ${t(
            "Governed incident intelligence and risk-based prioritization.",
            "Inteligensi insiden terkelola dan prioritisasi berbasis risiko."
        )}
                    </p>

                </div>

            </div>


            <div class="detail-section">

                <div style="
                    padding:32px;
                    text-align:center;
                ">

                    <h3 style="
                        color:#b42318;
                        margin-bottom:8px;
                    ">
                        ${t(
            "Incident data could not be loaded",
            "Data insiden tidak dapat dimuat"
        )}
                    </h3>

                    <p style="color:#64748b;">
                        ${t(
            "Check the Incident Database source and browser console for details.",
            "Periksa sumber Incident Database dan browser console untuk detail."
        )}
                    </p>

                </div>

            </div>
        `;
    }
}
// ==========================================
// DATA FOUNDATION
// ==========================================

function showDataFoundation() {

    const equipmentCount =
        (window.imxEquipmentMaster || []).length;

    const conditionCount =
        (window.imxConditionData || []).length;

    const incidentCount =
        (window.imxIncidents || []).length;

    mainContent.innerHTML = `

        <div class="page-header">
            <div>
                <h1>Data Foundation</h1>
                <p>
                    From fragmented manufacturing sources
                    to one governed data foundation.
                </p>
            </div>

            <div class="data-badge">
                TRACEABLE & GOVERNED
            </div>
        </div>


        <div class="detail-section">

            <div class="section-header">
                <div>
                    <h2>Manufacturing Data Pipeline</h2>
                    <p>
                        IMX preserves source traceability while
                        harmonizing data for cross-functional decisions.
                    </p>
                </div>
            </div>

            <div class="decision-flow">

                <div class="flow-card">
                    <strong>1. RAW SOURCES</strong>
                    <span>
                        Production Data<br>
                        Equipment Performance<br>
                        Incident Database<br>
                        RCA Knowledge
                    </span>
                </div>

                <div class="flow-arrow">→</div>

                <div class="flow-card">
                    <strong>2. SOURCE MAPPING</strong>
                    <span>
                        Tag<br>
                        Plant<br>
                        AR Number<br>
                        Equipment Class
                    </span>
                </div>

                <div class="flow-arrow">→</div>

                <div class="flow-card">
                    <strong>3. HARMONIZATION</strong>
                    <span>
                        KPI definitions<br>
                        Alarm / Trip limits<br>
                        Units & naming<br>
                        Status normalization
                    </span>
                </div>

                <div class="flow-arrow">→</div>

                <div class="flow-card">
                    <strong>4. GOVERNED LAYER</strong>
                    <span>
                        Unified equipment<br>
                        Condition history<br>
                        Incident intelligence<br>
                        RCA evidence
                    </span>
                </div>

                <div class="flow-arrow">→</div>

                <div class="flow-card">
                    <strong>5. IMX INTELLIGENCE</strong>
                    <span>
                        Single Pane<br>
                        Problem Tank<br>
                        AI Investigation<br>
                        Action Hub
                    </span>
                </div>

            </div>

        </div>


        <div class="kpi-grid">

            <div class="kpi-card">
                <div class="kpi-label">
                    GOVERNED EQUIPMENT
                </div>

                <div class="kpi-value">
                    ${equipmentCount}
                </div>

                <div class="kpi-description">
                    Equipment Performance sources
                </div>
            </div>


            <div class="kpi-card">
                <div class="kpi-label">
                    CONDITION PARAMETERS
                </div>

                <div class="kpi-value">
                    ${conditionCount}
                </div>

                <div class="kpi-description">
                    Harmonized alarm/trip parameters
                </div>
            </div>


            <div class="kpi-card">
                <div class="kpi-label">
                    GOVERNED INCIDENTS
                </div>

                <div class="kpi-value">
                    ${incidentCount}
                </div>

                <div class="kpi-description">
                    Unified incident records
                </div>
            </div>


            <div class="kpi-card">
                <div class="kpi-label">
                    DATA QUALITY
                </div>

                <div class="kpi-value">
                    TRACEABLE
                </div>

                <div class="kpi-description">
                    Raw source → governed insight
                </div>
            </div>

        </div>


        <div class="detail-section">

            <div class="section-header">
                <div>
                    <h2>Data Governance Registry</h2>
                    <p>
                        Clear distinction between source data,
                        IMX-derived intelligence and prototype scenarios.
                    </p>
                </div>
            </div>

            <table class="asset-table">

                <thead>
                    <tr>
                        <th>DATA DOMAIN</th>
                        <th>SOURCE</th>
                        <th>STATUS</th>
                        <th>IMX USE</th>
                    </tr>
                </thead>

                <tbody>

                    <tr>
                        <td>Equipment Performance</td>
                        <td>Source Excel</td>
                        <td>BASELINE</td>
                        <td>
                            Reliability, condition monitoring,
                            alarm/trip evidence
                        </td>
                    </tr>

                    <tr>
                        <td>Incident Database</td>
                        <td>Source Excel</td>
                        <td>BASELINE</td>
                        <td>
                            Risk, downtime, loss and Problem Tank
                        </td>
                    </tr>

                    <tr>
                        <td>RCA Knowledge</td>
                        <td>Structured RCA cases</td>
                        <td>BASELINE</td>
                        <td>
                            Root cause evidence and action guidance
                        </td>
                    </tr>

                    <tr>
                        <td>Priority / RAG</td>
                        <td>IMX rules</td>
                        <td>IMX-DERIVED</td>
                        <td>
                            Explainable decision prioritization
                        </td>
                    </tr>

                    <tr>
                        <td>Emission Scenario</td>
                        <td>Prototype scenario</td>
                        <td>SYNTHETIC</td>
                        <td>
                            Future energy & emission intelligence
                        </td>
                    </tr>

                    <tr>
                        <td>CEMS / CMMS / ERP</td>
                        <td>Future integration</td>
                        <td>PROPOSED</td>
                        <td>
                            Enterprise-scale deployment
                        </td>
                    </tr>

                </tbody>

            </table>

        </div>
    `;
}
// ==========================================
// ENERGY & EMISSION INTELLIGENCE
// ==========================================

function showEnergyEmission() {

    mainContent.innerHTML = `

        <div class="page-header">
            <div>
                <h1>Energy & Emission Intelligence</h1>
                <p>
                    Scenario-based visibility for energy efficiency
                    and emission performance.
                </p>
            </div>

            <div class="data-badge">
                SYNTHETIC SCENARIO
            </div>
        </div>


        <div class="detail-section"
             style="border-left:4px solid #f59e0b;">

            <strong>Prototype Data Notice</strong>

            <p style="margin-bottom:0; color:#64748b;">
                Emission values on this page are synthetic and used
                only to demonstrate the future IMX capability.
                They are not measured CEMS data.
            </p>

        </div>


        <div class="kpi-grid">

            <div class="kpi-card">
                <div class="kpi-label">
                    ENERGY CONSUMPTION
                </div>

                <div class="kpi-value">
                    12.4 GWh
                </div>

                <div class="kpi-description">
                    Synthetic operating scenario
                </div>
            </div>


            <div class="kpi-card">
                <div class="kpi-label">
                    ESTIMATED CO₂e
                </div>

                <div class="kpi-value">
                    8,420 t
                </div>

                <div class="kpi-description">
                    Activity data × emission factor
                </div>
            </div>


            <div class="kpi-card">
                <div class="kpi-label">
                    EMISSION INTENSITY
                </div>

                <div class="kpi-value">
                    0.42
                </div>

                <div class="kpi-description">
                    tCO₂e / ton production
                </div>
            </div>


            <div class="kpi-card">
                <div class="kpi-label">
                    SCENARIO STATUS
                </div>

                <div class="kpi-value">
                    <span class="status-amber">
                        ATTENTION
                    </span>
                </div>

                <div class="kpi-description">
                    Demonstration threshold only
                </div>
            </div>

        </div>


        <div class="detail-section">

            <div class="section-header">
                <div>
                    <h2>Transparent Calculation Logic</h2>
                    <p>
                        IMX keeps the calculation explainable
                        and traceable for human validation.
                    </p>
                </div>
            </div>

            <div class="decision-flow">

                <div class="flow-card">
                    <strong>ACTIVITY DATA</strong>
                    <span>
                        Energy / fuel consumption
                    </span>
                </div>

                <div class="flow-arrow">×</div>

                <div class="flow-card">
                    <strong>EMISSION FACTOR</strong>
                    <span>
                        Governed conversion factor
                    </span>
                </div>

                <div class="flow-arrow">→</div>

                <div class="flow-card">
                    <strong>ESTIMATED CO₂e</strong>
                    <span>
                        Activity Data × Emission Factor
                    </span>
                </div>

                <div class="flow-arrow">→</div>

                <div class="flow-card">
                    <strong>INTENSITY</strong>
                    <span>
                        CO₂e / Production
                    </span>
                </div>

                <div class="flow-arrow">→</div>

                <div class="flow-card">
                    <strong>ACTION</strong>
                    <span>
                        Investigate deviation
                    </span>
                </div>

            </div>

        </div>


        <div class="detail-section">

            <div class="section-header">
                <div>
                    <h2>Deployment Path</h2>
                    <p>
                        Prototype scenario to future plant integration.
                    </p>
                </div>
            </div>

            <table class="asset-table">

                <thead>
                    <tr>
                        <th>CAPABILITY</th>
                        <th>PROTOTYPE</th>
                        <th>FUTURE DEPLOYMENT</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Energy Data</td>
                        <td>Synthetic scenario</td>
                        <td>Historian / meter integration</td>
                    </tr>

                    <tr>
                        <td>Emission</td>
                        <td>Estimated CO₂e</td>
                        <td>CEMS / governed emission factors</td>
                    </tr>

                    <tr>
                        <td>Production</td>
                        <td>Case production source available</td>
                        <td>Live production historian</td>
                    </tr>

                    <tr>
                        <td>Decision Support</td>
                        <td>Scenario-based</td>
                        <td>Real-time deviation alerts</td>
                    </tr>
                </tbody>

            </table>

        </div>
    `;
}
// ==========================================
// SEARCH / ASK IMX
// ==========================================

function showSearchIMX() {

    mainContent.innerHTML = `

        <div class="page-header">
            <div>
                <h1>Search / Ask IMX</h1>
                <p>
                    Search governed manufacturing data using
                    simple operational questions.
                </p>
            </div>

            <div class="data-badge">
                GOVERNED SEARCH
            </div>
        </div>


        <div class="detail-section">

            <div style="
                display:flex;
                gap:12px;
                align-items:center;
            ">

                <input
                    id="imxSearchInput"
                    type="text"
                    placeholder="Ask: Why did KO-3201 trip?"
                    style="
                        flex:1;
                        padding:14px 16px;
                        border:1px solid #cbd5e1;
                        border-radius:10px;
                        font-size:15px;
                    "
                >

                <button
                    onclick="runIMXSearch()"
                    style="
                        padding:14px 22px;
                        border:none;
                        border-radius:10px;
                        background:#0f3d73;
                        color:white;
                        font-weight:700;
                        cursor:pointer;
                    "
                >
                    Ask IMX
                </button>

            </div>

            <div style="
                margin-top:14px;
                color:#64748b;
                font-size:13px;
            ">
                Try:
                critical assets · KO-3201 · incidents ·
                loss · open actions
            </div>

        </div>


        <div id="imxSearchResult">

            <div class="detail-section">

                <h2>Manufacturing Intelligence Search</h2>

                <p style="color:#64748b;">
                    Ask IMX to connect equipment, incidents,
                    RCA evidence and accountable actions.
                </p>

            </div>

        </div>
    `;


    const input = document.getElementById("imxSearchInput");

    input.addEventListener("keydown", function (event) {

        if (event.key === "Enter") {
            runIMXSearch();
        }

    });
}


async function runIMXSearch() {

    const input =
        document.getElementById("imxSearchInput");

    const result =
        document.getElementById("imxSearchResult");

    if (!input || !result) {
        return;
    }

    const query =
        input.value.trim().toLowerCase();

    if (!query) {

        result.innerHTML = `
            <div class="detail-section">
                <strong>Enter a manufacturing question first.</strong>
            </div>
        `;

        return;
    }


    // ------------------------------------------
    // CRITICAL ASSETS
    // ------------------------------------------

    if (
        query.includes("critical asset") ||
        query.includes("critical equipment")
    ) {

        const assets =
            window.imxEquipmentMaster || [];

        const criticalAssets =
            assets.filter(function (asset) {
                return asset.criticality === "High";
            });

        let rows = "";

        criticalAssets.forEach(function (asset) {

            rows += `
                <tr class="clickable-row"
                    onclick="showAssetDetail('${asset.tag}')">

                    <td><strong>${asset.tag}</strong></td>
                    <td>${asset.plant || "-"}</td>
                    <td>${asset.failureMode || "-"}</td>
                    <td>${Number(asset.downtime || 0)} h</td>
                    <td>
                        $${Number(
                asset.estimatedLoss || 0
            ).toLocaleString()}k
                    </td>

                </tr>
            `;
        });


        result.innerHTML = `

            <div class="detail-section">

                <div class="section-header">
                    <div>
                        <h2>Critical Assets</h2>
                        <p>
                            High-criticality equipment in the
                            governed equipment dataset.
                        </p>
                    </div>

                    <div class="data-badge">
                        ${criticalAssets.length} FOUND
                    </div>
                </div>

                <table class="asset-table">

                    <thead>
                        <tr>
                            <th>ASSET</th>
                            <th>PLANT</th>
                            <th>ISSUE</th>
                            <th>DOWNTIME</th>
                            <th>ACTUAL LOSS</th>
                        </tr>
                    </thead>

                    <tbody>
                        ${rows}
                    </tbody>

                </table>

            </div>
        `;

        return;
    }


    // ------------------------------------------
    // KO-3201 / RCA QUESTION
    // ------------------------------------------

    if (query.includes("ko-3201")) {

        try {

            const response =
                await fetch("data/rca.json");

            const rcaData =
                await response.json();

            const rca =
                rcaData.find(function (item) {
                    return item.tag === "KO-3201";
                });

            if (!rca) {
                throw new Error("RCA not found");
            }


            result.innerHTML = `

                <div class="detail-section">

                    <div class="section-header">
                        <div>
                            <h2>KO-3201 Investigation</h2>

                            <p>
                                Evidence-grounded RCA knowledge
                                from the structured case.
                            </p>
                        </div>

                        <div class="data-badge">
                            RCA EVIDENCE
                        </div>
                    </div>


                    <div class="detail-grid">

                        <div class="kpi-card">

                            <div class="kpi-label">
                                EVENT
                            </div>

                            <div style="
                                font-weight:700;
                                margin-top:10px;
                            ">
                                ${rca.event}
                            </div>

                        </div>


                        <div class="kpi-card">

                            <div class="kpi-label">
                                AR NUMBER
                            </div>

                            <div style="
                                font-weight:700;
                                margin-top:10px;
                            ">
                                ${rca.arNumber}
                            </div>

                        </div>

                    </div>


                    <div style="margin-top:24px;">

                        <h3>Probable Root Cause</h3>

                        <p>
                            ${rca.probableRootCause}
                        </p>

                        <h3>Physical Cause</h3>

                        <p>
                            ${rca.physicalCause}
                        </p>

                        <h3>Detection Gap</h3>

                        <p>
                            ${rca.detectionGap}
                        </p>

                    </div>


                    <button
                        onclick="openAIInvestigation('KO-3201')"
                        style="
                            margin-top:16px;
                            padding:12px 18px;
                            border:none;
                            border-radius:8px;
                            background:#0f3d73;
                            color:white;
                            cursor:pointer;
                            font-weight:700;
                        "
                    >
                        Open Full Investigation
                    </button>

                </div>
            `;

        }
        catch (error) {

            result.innerHTML = `
                <div class="detail-section">
                    RCA evidence could not be loaded.
                </div>
            `;

        }

        return;
    }


    // ------------------------------------------
    // INCIDENTS
    // ------------------------------------------

    if (query.includes("incident")) {

        const incidents =
            window.imxIncidents || [];

        const totalDowntime =
            incidents.reduce(function (total, item) {
                return total +
                    Number(item.downtime || 0);
            }, 0);


        result.innerHTML = `

            <div class="detail-section">

                <h2>Incident Intelligence</h2>

                <div class="kpi-grid">

                    <div class="kpi-card">
                        <div class="kpi-label">
                            TOTAL INCIDENTS
                        </div>

                        <div class="kpi-value">
                            ${incidents.length}
                        </div>
                    </div>


                    <div class="kpi-card">
                        <div class="kpi-label">
                            HISTORICAL DOWNTIME
                        </div>

                        <div class="kpi-value">
                            ${totalDowntime.toLocaleString(
            undefined,
            { maximumFractionDigits: 1 }
        )} h
                        </div>
                    </div>

                </div>

            </div>
        `;

        return;
    }


    // ------------------------------------------
    // LOSS
    // ------------------------------------------

    if (
        query.includes("loss") ||
        query.includes("financial")
    ) {

        const incidents =
            window.imxIncidents || [];

        const totalLoss =
            incidents.reduce(function (total, item) {
                return total +
                    Number(item.totalLoss || 0);
            }, 0);


        result.innerHTML = `

            <div class="detail-section">

                <h2>Historical Loss Exposure</h2>

                <div class="kpi-value">
                    $${(totalLoss / 1000).toFixed(1)}M
                </div>

                <p style="color:#64748b;">
                    Historical actual + potential loss from
                    the governed incident database.
                    This value is not projected IMX savings.
                </p>

            </div>
        `;

        return;
    }


    // ------------------------------------------
    // ACTIONS
    // ------------------------------------------

    if (
        query.includes("action") ||
        query.includes("follow up") ||
        query.includes("follow-up")
    ) {

        const actions =
            JSON.parse(
                localStorage.getItem("imxActions") || "[]"
            );

        const openActions =
            actions.filter(function (action) {
                return action.status !== "CLOSED";
            });


        result.innerHTML = `

            <div class="detail-section">

                <h2>Action Intelligence</h2>

                <div class="kpi-grid">

                    <div class="kpi-card">

                        <div class="kpi-label">
                            TOTAL ACTIONS
                        </div>

                        <div class="kpi-value">
                            ${actions.length}
                        </div>

                    </div>


                    <div class="kpi-card">

                        <div class="kpi-label">
                            OPEN / IN PROGRESS
                        </div>

                        <div class="kpi-value">
                            ${openActions.length}
                        </div>

                    </div>

                </div>

                <button
                    onclick="showActionHub()"
                    style="
                        margin-top:16px;
                        padding:12px 18px;
                        border:none;
                        border-radius:8px;
                        background:#0f3d73;
                        color:white;
                        font-weight:700;
                        cursor:pointer;
                    "
                >
                    Open Action Hub
                </button>

            </div>
        `;

        return;
    }


    // ------------------------------------------
    // NO MATCH
    // ------------------------------------------

    result.innerHTML = `

        <div class="detail-section">

            <h2>No governed match found</h2>

            <p style="color:#64748b;">
                Try searching for:
                <strong>critical assets</strong>,
                <strong>KO-3201</strong>,
                <strong>incidents</strong>,
                <strong>loss</strong>,
                or <strong>open actions</strong>.
            </p>

        </div>
    `;
}
// ==========================================
// AI INVESTIGATION HUB
// ==========================================

function showAIInvestigationHub() {

    const cases = [
        {
            tag: "PU-2101B",
            event: "Mechanical Seal Leakage",
            plant: "ARP",
            discipline: "ROT",
            status: "RCA CASE"
        },
        {
            tag: "KO-3201",
            event: "High Radial Vibration Trip",
            plant: "ZCU",
            discipline: "ROT",
            status: "RCA CASE"
        },
        {
            tag: "PM-4405B",
            event: "Motor Bearing Failure",
            plant: "NUP",
            discipline: "ELE",
            status: "RCA CASE"
        },
        {
            tag: "HE-3301",
            event: "High Fouling — Duty Loss & High dP",
            plant: "ZCU",
            discipline: "STA",
            status: "RCA CASE"
        },
        {
            tag: "BL-5702",
            event: "High Vibration",
            plant: "OPP",
            discipline: "ROT",
            status: "RCA CASE"
        }
    ];

    let rows = "";

    cases.forEach(function (item) {

        rows += `
            <tr class="clickable-row"
                onclick="openAIInvestigation('${item.tag}')">

                <td>
                    <strong>${item.tag}</strong>
                </td>

                <td>${item.plant}</td>

                <td>${item.event}</td>

                <td>${item.discipline}</td>

                <td>
                    <span class="data-badge">
                        ${item.status}
                    </span>
                </td>

                <td>
                    <button
                        onclick="event.stopPropagation();
                        openAIInvestigation('${item.tag}')"
                        style="
                            padding:8px 14px;
                            border:none;
                            border-radius:8px;
                            background:#0f3d73;
                            color:white;
                            cursor:pointer;
                            font-weight:700;
                        "
                    >
                        Investigate
                    </button>
                </td>

            </tr>
        `;
    });


    mainContent.innerHTML = `

        <div class="page-header">

            <div>
                <h1>AI Investigation</h1>

                <p>
                    Evidence-grounded root cause investigation
                    combining equipment condition, incident history
                    and structured RCA knowledge.
                </p>
            </div>

            <div class="data-badge">
                HUMAN-IN-THE-LOOP
            </div>

        </div>


        <div class="kpi-grid">

            <div class="kpi-card">
                <div class="kpi-label">
                    RCA CASES
                </div>

                <div class="kpi-value">
                    5
                </div>

                <div class="kpi-description">
                    Structured manufacturing cases
                </div>
            </div>


            <div class="kpi-card">
                <div class="kpi-label">
                    INVESTIGATION METHOD
                </div>

                <div class="kpi-value"
                     style="font-size:20px;">
                    EVIDENCE
                </div>

                <div class="kpi-description">
                    Condition + incident + RCA
                </div>
            </div>


            <div class="kpi-card">
                <div class="kpi-label">
                    OUTPUT
                </div>

                <div class="kpi-value"
                     style="font-size:20px;">
                    ROOT CAUSE
                </div>

                <div class="kpi-description">
                    Probable cause with supporting evidence
                </div>
            </div>


            <div class="kpi-card">
                <div class="kpi-label">
                    VALIDATION
                </div>

                <div class="kpi-value"
                     style="font-size:20px;">
                    HUMAN
                </div>

                <div class="kpi-description">
                    Approve, modify or reject
                </div>
            </div>

        </div>


        <div class="detail-section">

            <div class="section-header">
                <div>
                    <h2>Investigation Queue</h2>

                    <p>
                        Select an equipment case to review
                        root cause evidence and recommended actions.
                    </p>
                </div>
            </div>


            <div style="overflow-x:auto;">

                <table class="asset-table">

                    <thead>
                        <tr>
                            <th>ASSET</th>
                            <th>PLANT</th>
                            <th>EVENT</th>
                            <th>DISCIPLINE</th>
                            <th>KNOWLEDGE</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>

                    <tbody>
                        ${rows}
                    </tbody>

                </table>

            </div>

        </div>


        <div class="detail-section">

            <div class="section-header">
                <div>
                    <h2>Explainable Investigation Flow</h2>

                    <p>
                        AI supports the engineer; final decisions
                        remain under human validation.
                    </p>
                </div>
            </div>


            <div class="decision-flow">

                <div class="flow-card">
                    <strong>DETECT</strong>
                    <span>
                        Condition anomaly or incident
                    </span>
                </div>

                <div class="flow-arrow">→</div>

                <div class="flow-card">
                    <strong>RETRIEVE</strong>
                    <span>
                        Relevant equipment and RCA evidence
                    </span>
                </div>

                <div class="flow-arrow">→</div>

                <div class="flow-card">
                    <strong>INDICATE</strong>
                    <span>
                        Probable root cause
                    </span>
                </div>

                <div class="flow-arrow">→</div>

                <div class="flow-card">
                    <strong>VALIDATE</strong>
                    <span>
                        Engineer approve / modify / reject
                    </span>
                </div>

                <div class="flow-arrow">→</div>

                <div class="flow-card">
                    <strong>ACT</strong>
                    <span>
                        Corrective, preventive and proactive action
                    </span>
                </div>

            </div>

        </div>
    `;
}
/* ==========================================
   SINGLE PANE HEADER SEARCH
   ========================================== */

const headerSearchInput =
    document.getElementById("headerSearchInput");

const headerSearchButton =
    document.getElementById("headerSearchButton");


function executeHeaderSearch() {

    if (!headerSearchInput) return;

    const query =
        headerSearchInput.value.trim();

    if (!query) return;


    /*
     * Open the full Search / Ask IMX page
     */
    showSearchIMX();


    /*
     * Put the query into the main search box
     * after the Search page has rendered.
     */
    requestAnimationFrame(function () {

        const searchInput =
            document.getElementById("imxSearchInput");

        if (searchInput) {

            searchInput.value = query;

            runIMXSearch();

        }

    });

}


/* Search button */

if (headerSearchButton) {

    headerSearchButton.addEventListener(
        "click",
        executeHeaderSearch
    );

}


/* Enter key */

if (headerSearchInput) {

    headerSearchInput.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Enter") {

                event.preventDefault();

                executeHeaderSearch();

            }

        }
    );

}
// ==========================================
// INITIAL APP LOAD — IMMEDIATE UI
// ==========================================
window.addEventListener("load", function () {

    console.log("IMX: application started.");

    currentLanguage = "en";

    const enButton = document.getElementById("langEN");
    const idButton = document.getElementById("langID");

    if (enButton && idButton) {
        enButton.classList.add("active");
        idButton.classList.remove("active");
    }

    document.querySelectorAll(".menu-btn").forEach(function (button) {
        button.classList.toggle(
            "active",
            button.dataset.page === "single"
        );
    });

    // Render Single Pane immediately.
    // showSinglePane() handles governed-data readiness internally.
    showSinglePane()
        .then(function () {

            requestAnimationFrame(function () {
                if (typeof renderExecutiveCharts === "function") {
                    renderExecutiveCharts();
                }
            });

            console.log("IMX: Single Pane ready.");
        })
        .catch(function (error) {

            console.error(
                "IMX Single Pane initialization error:",
                error
            );

        });

});
/* =========================================================
   IMX MOBILE NAVIGATION
========================================================= */

function initMobileMenu() {
    const menuBtn = document.getElementById("mobileMenuBtn");
    const overlay = document.getElementById("mobileOverlay");

    if (!menuBtn || !overlay) return;

    function openMenu() {
        document.body.classList.add("mobile-menu-open");
        menuBtn.innerHTML = "✕";
        menuBtn.setAttribute("aria-label", "Close menu");
    }

    function closeMenu() {
        document.body.classList.remove("mobile-menu-open");
        menuBtn.innerHTML = "☰";
        menuBtn.setAttribute("aria-label", "Open menu");
    }

    menuBtn.addEventListener("click", function () {
        if (document.body.classList.contains("mobile-menu-open")) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    overlay.addEventListener("click", closeMenu);

    /* Close sidebar after choosing a menu on mobile */
    document.querySelectorAll(".menu-btn").forEach(function (button) {
        button.addEventListener("click", function () {
            if (window.innerWidth <= 768) {
                closeMenu();
            }
        });
    });

    /* Reset when returning to desktop */
    window.addEventListener("resize", function () {
        if (window.innerWidth > 768) {
            closeMenu();
        }
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initMobileMenu);
} else {
    initMobileMenu();
}
/* =========================================================
   EARLY WARNING INTELLIGENCE
========================================================= */

function showEarlyWarningIntelligence() {

    const content = document.getElementById("mainContent");

    content.innerHTML = `
        <div class="page-header">
            <div>
                <div class="eyebrow">ANALYTICAL INTELLIGENCE</div>
                <h1>Early Warning Intelligence</h1>
                <p>
                    Detect emerging equipment risk before failure and convert
                    warning signals into explainable engineering decisions.
                </p>
            </div>
        </div>

        <!-- SUMMARY KPI -->
        <div class="ew-kpi-grid">

            <div class="ew-kpi-card">
                <span>MONITORED ASSETS</span>
                <strong>5</strong>
                <small>Governed RCA assets</small>
            </div>

            <div class="ew-kpi-card">
                <span>ANALYTICAL WARNINGS</span>
                <strong>5</strong>
                <small>Retrospective early-warning analysis</small>
            </div>

            <div class="ew-kpi-card">
                <span>AVG. WARNING LEAD</span>
                <strong>44.6 h</strong>
                <small>Analytical output across 5 RCA cases</small>
            </div>

            <div class="ew-kpi-card">
                <span>HISTORICAL EVIDENCE</span>
                <strong>0</strong>
                <small>Analytical output across 5 RCA cases</small>
            </div>

        </div>


        <!-- INTELLIGENCE PIPELINE -->
        <div class="ew-section">

            <div class="ew-section-heading">
                <div>
                    <span class="ew-section-label">END-TO-END ANALYTICS</span>
                    <h2>Analytical Intelligence Pipeline</h2>
                </div>

                <span class="ew-traceable-badge">
                    TRACEABLE
                </span>
            </div>

            <div class="ew-pipeline">

                <div class="ew-step">
                    <span>01</span>
                    <strong>Early Warning<br>Engine</strong>
                    <small>Detect</small>
                </div>

                <div class="ew-arrow">→</div>

                <div class="ew-step">
                    <span>02</span>
                    <strong>Engineering<br>Risk Index</strong>
                    <small>Prioritize</small>
                </div>

                <div class="ew-arrow">→</div>

                <div class="ew-step">
                    <span>03</span>
                    <strong>Warning<br>Lead</strong>
                    <small>Quantify</small>
                </div>

                <div class="ew-arrow">→</div>

                <div class="ew-step">
                    <span>04</span>
                    <strong>Historical<br>Similarity</strong>
                    <small>Retrieve</small>
                </div>

                <div class="ew-arrow">→</div>

                <div class="ew-step">
                    <span>05</span>
                    <strong>AI<br>Interpretation</strong>
                    <small>Understand</small>
                </div>

                <div class="ew-arrow">→</div>

                <div class="ew-step">
                    <span>06</span>
                    <strong>Recommendation</strong>
                    <small>Recommend</small>
                </div>

                <div class="ew-arrow">→</div>

                <div class="ew-step">
                    <span>07</span>
                    <strong>RCA<br>Report</strong>
                    <small>Document</small>
                </div>

            </div>

        </div>


                <!-- ASSET OVERVIEW -->
        <div class="ew-section">

            <div class="ew-section-heading">
                <div>
                    <span class="ew-section-label">HISTORICAL EVIDENCE</span>
                    <h2>Asset Early Warning Overview</h2>
                </div>
            </div>

            <div class="ew-asset-grid">

                ${createEWAssetCard(
                    "PU-2101B",
                    "Mechanical Seal Leakage",
                    "36 h",
                    "Vibration"
                )}

                ${createEWAssetCard(
                    "KO-3201",
                    "High Radial Vibration / Bearing Distress",
                    "63 h",
                    "Vibration",
                    true
                )}

                ${createEWAssetCard(
                    "PM-4405B",
                    "Motor Bearing Failure / Overheating",
                    "41 h",
                    "Temperature"
                )}

                ${createEWAssetCard(
                    "HE-3301",
                    "High Fouling / Duty Loss",
                    "~40 h",
                    "Feed"
                )}

                ${createEWAssetCard(
                    "BL-5702",
                    "High Vibration",
                    "43 h",
                    "Vibration"
                )}

            </div>

        </div>

        <!-- DYNAMIC WARNING-TO-RCA JOURNEY -->
        <div id="ewInvestigationContainer"></div>

    `;

    showEWAssetInvestigation("KO-3201");
}

/* =========================================================
   EARLY WARNING ASSET CARD
========================================================= */
function createEWAssetCard(
    asset,
    failure,
    lead,
    signal,
    highlight = false
) {

    return `
        <div
            class="ew-asset-card ${highlight ? "ew-highlight" : ""}"
            onclick="showEWAssetInvestigation('${asset}')"
            style="cursor:pointer;"
        >

            <div class="ew-asset-top">

                <strong>${asset}</strong>

                ${
                    highlight
                        ? `<span class="ew-best-badge">LONGEST LEAD</span>`
                        : `<span class="ew-confirmed-badge">CONFIRMED</span>`
                }

            </div>

            <p>${failure}</p>

            <div class="ew-asset-metric">
                <strong>${lead}</strong>
                <span>Warning Lead</span>
            </div>

            <div class="ew-signal">
                Primary signal: <strong>${signal}</strong>
            </div>

        </div>
    `;
}
function showEWAssetInvestigation(assetTag) {

    const container = document.getElementById("ewInvestigationContainer");
    if (!container) return;

    const assetData = {
        "PU-2101B": {
            title: "Mechanical Seal Leakage",
            criticality: "MEDIUM CRITICALITY",
            lead: "36 h",
            leadText: "36 hours before failure",
            signal: "Vibration",
            riskTitle: "Elevated Risk",
            riskEvidence: "Developing vibration and suction instability indicated deteriorating pump operating conditions before the seal failure.",
            conditionTitle: "Low Seal Flush / Cavitation",
            conditionEvidence: "Seal flush and suction conditions deteriorated during feed swings, increasing dry-running exposure.",
            interpretation: "Mechanical seal distress was associated with dry running caused by suction cavitation and insufficient seal flush protection.",
            recommendation: "Implement seal-flush flow monitoring and DCS alarm, add protective interlock, limit feed ramping to 1 T/H/min, and strengthen seal-flush preventive maintenance."
        },

        "KO-3201": {
            title: "High Radial Vibration / Bearing Distress",
            criticality: "HIGH CRITICALITY",
            lead: "63 h",
            leadText: "63 hours before failure",
            signal: "Radial Vibration",
            riskTitle: "Elevated Risk",
            riskEvidence: "Radial vibration deteriorated from approximately 28 μm to 52 μm before reaching the trip condition.",
            conditionTitle: "Oil Contamination",
            conditionEvidence: "Water content reached approximately 1,800 ppm, exceeding the 500 ppm warning threshold.",
            interpretation: "Bearing distress was associated with degraded oil-film condition caused by water ingress through a leaking cooler tube.",
            recommendation: "Repair the leaking cooler tube, implement online water monitoring, tighten vibration alerting and extend preventive controls to comparable assets."
        },

        "PM-4405B": {
            title: "Motor Bearing Failure / Overheating",
            criticality: "MEDIUM CRITICALITY",
            lead: "41 h",
            leadText: "41 hours before failure",
            signal: "Temperature",
            riskTitle: "Elevated Thermal Risk",
            riskEvidence: "Motor drive-end bearing temperature increased from approximately 68°C to 84°C before the failure event.",
            conditionTitle: "Lubrication Degradation",
            conditionEvidence: "Bearing condition was consistent with degraded grease and an extended relubrication interval.",
            interpretation: "Motor bearing overheating was associated with grease degradation, insufficient temperature trending and a non-risk-based relubrication interval.",
            recommendation: "Revise relubrication to a four-month interval, implement bearing-temperature trending and alerts, and include motors in routine vibration and thermography monitoring."
        },

        "HE-3301": {
            title: "High Fouling / Duty Loss",
            criticality: "MEDIUM CRITICALITY",
            lead: "~40 h",
            leadText: "approximately 40 hours before failure",
            signal: "Feed / Process Condition",
            riskTitle: "Degrading Thermal Performance",
            riskEvidence: "Increasing differential pressure and declining heat-transfer duty indicated progressive exchanger fouling.",
            conditionTitle: "Heavy-End Fouling",
            conditionEvidence: "Process conditions indicated accelerated tube-side coke or polymer deposition and increasing flow restriction.",
            interpretation: "Duty loss was associated with accelerated tube-side fouling combined with the absence of a differential-pressure cleaning trigger and fouling KPI.",
            recommendation: "Implement differential-pressure cleaning triggers and alarms, strengthen heavy-end control, monitor fouling-factor and duty KPIs, and trend exchanger performance daily."
        },

        "BL-5702": {
            title: "High Vibration",
            criticality: "HIGH CRITICALITY",
            lead: "43 h",
            leadText: "43 hours before failure",
            signal: "Vibration",
            riskTitle: "Elevated Mechanical Risk",
            riskEvidence: "Vibration increased with a dominant 2X harmonic pattern before the high-vibration event.",
            conditionTitle: "Coupling Misalignment",
            conditionEvidence: "Alignment evidence indicated developing misalignment with soft-foot and coupling degradation contributing to the event.",
            interpretation: "High vibration was associated with coupling misalignment aggravated by soft-foot and an aged coupling.",
            recommendation: "Introduce laser-alignment and soft-foot checks, strengthen coupling replacement strategy, and increase vibration monitoring for comparable Class A blowers."
        }
    };

    const data = assetData[assetTag];
    if (!data) return;

    container.innerHTML = `
        <div class="ew-section ew-investigation">

            <div class="ew-section-heading">
                <div>
                    <span class="ew-section-label">ASSET INVESTIGATION</span>
                    <h2>${assetTag} — Warning-to-RCA Journey</h2>
                    <p>${data.title}</p>
                </div>

                <span class="ew-high-badge">
                    ${data.criticality}
                </span>
            </div>

            <div class="ew-warning-panel">

                <div class="ew-warning-top">
                    <div>
                        <span>FIRST CONFIRMED WARNING</span>
                        <strong>${data.leadText}</strong>
                    </div>

                    <div>
                        <span>PRIMARY SIGNAL</span>
                        <strong>${data.signal}</strong>
                    </div>
                </div>

                <div class="ew-timeline">

                    <div class="ew-point warning-point">
                        <span></span>
                        <strong>Warning</strong>
                    </div>

                    <div class="ew-line">
                        <div class="ew-lead-label">
                            ${data.lead} WARNING LEAD
                        </div>
                    </div>

                    <div class="ew-point failure-point">
                        <span></span>
                        <strong>Failure</strong>
                    </div>

                </div>
            </div>

            <div class="ew-evidence-grid">

                <div class="ew-evidence-card">
                    <span class="ew-card-label">ENGINEERING RISK</span>
                    <h3>${data.riskTitle}</h3>
                    <p>${data.riskEvidence}</p>
                </div>

                <div class="ew-evidence-card">
                    <span class="ew-card-label">CONDITION EVIDENCE</span>
                    <h3>${data.conditionTitle}</h3>
                    <p>${data.conditionEvidence}</p>
                </div>

                <div class="ew-evidence-card">
                    <span class="ew-card-label">AI INTERPRETATION</span>
                    <h3>Probable Root Cause</h3>
                    <p>${data.interpretation}</p>
                </div>

            </div>

            <div class="ew-recommendation">

                <div>
                    <span class="ew-card-label">RECOMMENDED RESPONSE</span>

                    <h3>Convert the warning into accountable action</h3>

                    <p>${data.recommendation}</p>
                </div>

                <button
                    class="ew-action-btn"
                    onclick="showPage('ai')">
                    Open AI Investigation →
                </button>

            </div>
            ${renderHistoricalSimilarity(assetTag)}
            <!-- RCA REPORT -->
<div class="ew-section" style="margin-top:24px;">

    <div class="ew-section-heading">
        <div>
            <span class="ew-section-label">RCA REPORT</span>
            <h2>Evidence-Based RCA Summary</h2>
            <p>
                Consolidated warning, condition, interpretation and
                recommended response for ${assetTag}.
            </p>
        </div>

        <span class="ew-confirmed-badge">TRACEABLE</span>
    </div>

    <div class="ew-evidence-grid">

        <div class="ew-evidence-card">
            <span class="ew-card-label">ASSET / EVENT</span>
            <h3>${assetTag}</h3>
            <p>${data.title}</p>
        </div>

        <div class="ew-evidence-card">
            <span class="ew-card-label">EARLY WARNING</span>
            <h3>${data.lead}</h3>
            <p>
                First confirmed analytical warning detected
                ${data.leadText}.
            </p>
        </div>

        <div class="ew-evidence-card">
            <span class="ew-card-label">PRIMARY SIGNAL</span>
            <h3>${data.signal}</h3>
            <p>${data.riskEvidence}</p>
        </div>

        <div class="ew-evidence-card">
            <span class="ew-card-label">CONDITION EVIDENCE</span>
            <h3>${data.conditionTitle}</h3>
            <p>${data.conditionEvidence}</p>
        </div>

        <div class="ew-evidence-card">
            <span class="ew-card-label">ROOT CAUSE INDICATION</span>
            <h3>Probable Root Cause</h3>
            <p>${data.interpretation}</p>
        </div>

        <div class="ew-evidence-card">
            <span class="ew-card-label">RECOMMENDED RESPONSE</span>
            <h3>Corrective / Preventive Direction</h3>
            <p>${data.recommendation}</p>
        </div>

    </div>

    <div class="ew-recommendation" style="margin-top:18px;">

        <div>
            <span class="ew-card-label">EXECUTION HANDOFF</span>

            <h3>RCA → Accountable Action</h3>

            <p>
                Continue the validated recommendation into Action Hub
                for owner assignment, due date, execution tracking and
                closure evidence.
            </p>
        </div>

        <button
            class="ew-action-btn"
            onclick="sendRCAToActionHub('${assetTag}')">
            Send to Action Hub →
        </button>

    </div>

</div>

        </div>
    `;
}
// ==========================================
// HISTORICAL SIMILARITY — GOVERNED INCIDENT DB
// ==========================================

function renderHistoricalSimilarity(referenceTag) {

    const incidents = Array.isArray(window.imxIncidents)
        ? window.imxIncidents
        : [];

    if (incidents.length === 0) {
        return `
            <div class="ew-section" style="margin-top:24px;">
                <div class="ew-section-heading">
                    <div>
                        <span class="ew-section-label">
                            HISTORICAL SIMILARITY
                        </span>
                        <h2>Similar Incident Retrieval</h2>
                        <p>
                            Governed incident database is still loading.
                        </p>
                    </div>
                </div>
            </div>
        `;
    }

    // Reference characteristics for the 5 governed RCA assets.
    // Used only as retrieval keys — NOT as fabricated similarity scores.
    const referenceProfiles = {

        "PU-2101B": {
            equipmentType: "PU",
            discipline: "ROT",
            component: "Seal",
            failureMechanism: "Leakage"
        },

        "KO-3201": {
            equipmentType: "KO",
            discipline: "ROT",
            component: "Bearing",
            failureMechanism: "High Vibration"
        },

        "PM-4405B": {
            equipmentType: "EM",
            discipline: "ELE",
            component: "Bearing",
            failureMechanism: "Overheating"
        },

        "HE-3301": {
            equipmentType: "HE",
            discipline: "STA",
            component: "Tube Bundle",
            failureMechanism: "Fouling"
        },

        "BL-5702": {
            equipmentType: "BL",
            discipline: "ROT",
            component: "Coupling",
            failureMechanism: "High Vibration"
        }
    };

    const profile = referenceProfiles[referenceTag];

    if (!profile) {
        return "";
    }

    function normalize(value) {
        return String(value || "")
            .trim()
            .toUpperCase();
    }

    // Support the field names already used by the governed
    // Incident Database parser.
    function getField(incident, names) {

        for (const name of names) {

            if (
                incident[name] !== undefined &&
                incident[name] !== null &&
                String(incident[name]).trim() !== ""
            ) {
                return incident[name];
            }
        }

        return "";
    }

    const candidates = incidents
        .filter(function (incident) {

            const tag = getField(
                incident,
                ["tag", "tagNumber", "Tag Number"]
            );

            return normalize(tag) !== normalize(referenceTag);
        })
        .map(function (incident) {

            const equipmentType = getField(
                incident,
                [
                    "equipmentType",
                    "eqType",
                    "Eq. Type"
                ]
            );

            const discipline = getField(
                incident,
                [
                    "discipline",
                    "Discipline"
                ]
            );

            const component = getField(
                incident,
                [
                    "component",
                    "Component"
                ]
            );

            const failureMechanism = getField(
                incident,
                [
                    "failureMechanism",
                    "fMechanism",
                    "F Mechanism"
                ]
            );

            const matches = [];

            if (
                normalize(equipmentType) ===
                normalize(profile.equipmentType)
            ) {
                matches.push("Equipment Type");
            }

            if (
                normalize(discipline) ===
                normalize(profile.discipline)
            ) {
                matches.push("Discipline");
            }

            if (
                normalize(component) ===
                normalize(profile.component)
            ) {
                matches.push("Component");
            }

            if (
                normalize(failureMechanism) ===
                normalize(profile.failureMechanism)
            ) {
                matches.push("Failure Mechanism");
            }

            return {
                incident: incident,
                matches: matches,
                matchCount: matches.length
            };
        })

        // At least one governed attribute must match
        .filter(function (item) {
            return item.matchCount > 0;
        })

        // Strongest evidence first
        .sort(function (a, b) {

            if (b.matchCount !== a.matchCount) {
                return b.matchCount - a.matchCount;
            }

            const riskA = Number(
                getField(
                    a.incident,
                    ["riskScore", "Risk Score"]
                )
            ) || 0;

            const riskB = Number(
                getField(
                    b.incident,
                    ["riskScore", "Risk Score"]
                )
            ) || 0;

            return riskB - riskA;
        })

        .slice(0, 3);


    if (candidates.length === 0) {

        return `
            <div class="ew-section" style="margin-top:24px;">

                <div class="ew-section-heading">

                    <div>
                        <span class="ew-section-label">
                            HISTORICAL SIMILARITY
                        </span>

                        <h2>Similar Incident Retrieval</h2>

                        <p>
                            No sufficiently related historical case
                            was retrieved for ${referenceTag}.
                        </p>
                    </div>

                    <span class="ew-confirmed-badge">
                        380 INCIDENTS
                    </span>

                </div>

            </div>
        `;
    }


    const cards = candidates
        .map(function (item) {

            const incident = item.incident;

            const tag = getField(
                incident,
                ["tag", "tagNumber", "Tag Number"]
            ) || "N/A";

            const title = getField(
                incident,
                [
                    "caseTitle",
                    "riskCaseTitle",
                    "Risk Case Title"
                ]
            ) || "Historical Incident";

            const component = getField(
                incident,
                ["component", "Component"]
            ) || "N/A";

            const mechanism = getField(
                incident,
                [
                    "failureMechanism",
                    "fMechanism",
                    "F Mechanism"
                ]
            ) || "N/A";

            const downtime = Number(
                getField(
                    incident,
                    [
                        "downtime",
                        "downtimeHours",
                        "Downtime (hrs)"
                    ]
                )
            ) || 0;

            const totalLoss = Number(
                getField(
                    incident,
                    [
                        "totalLoss",
                        "Total Loss (k US$)"
                    ]
                )
            ) || 0;

            const riskScore = Number(
                getField(
                    incident,
                    ["riskScore", "Risk Score"]
                )
            ) || 0;

            return `
                <div class="ew-evidence-card">

                    <div class="ew-asset-top">

                        <strong>${tag}</strong>

                        <span class="ew-confirmed-badge">
                            ${item.matchCount} ATTRIBUTE MATCH
                        </span>

                    </div>

                    <h3 style="margin-top:10px;">
                        ${title}
                    </h3>

                    <p>
                        ${component} • ${mechanism}
                    </p>

                    <div style="
                        display:grid;
                        grid-template-columns:repeat(3,1fr);
                        gap:10px;
                        margin-top:14px;
                    ">

                        <div>
                            <span class="ew-card-label">
                                DOWNTIME
                            </span>
                            <strong style="display:block;">
                                ${downtime.toFixed(1)} h
                            </strong>
                        </div>

                        <div>
                            <span class="ew-card-label">
                                HIST. LOSS
                            </span>
                            <strong style="display:block;">
                                $${totalLoss.toLocaleString(
                                    undefined,
                                    {
                                        minimumFractionDigits: 1,
                                        maximumFractionDigits: 1
                                    }
                                )}k
                            </strong>
                        </div>

                        <div>
                            <span class="ew-card-label">
                                RISK SCORE
                            </span>
                            <strong style="display:block;">
                                ${riskScore || "N/A"}
                            </strong>
                        </div>

                    </div>

                    <p style="margin-top:14px;">
                        <strong>Matched evidence:</strong>
                        ${item.matches.join(" • ")}
                    </p>

                </div>
            `;
        })
        .join("");


    return `
        <div class="ew-section" style="margin-top:24px;">

            <div class="ew-section-heading">

                <div>

                    <span class="ew-section-label">
                        HISTORICAL SIMILARITY
                    </span>

                    <h2>
                        Similar Incident Retrieval
                    </h2>

                    <p>
                        Related historical cases retrieved from the
                        governed incident database using matching
                        equipment and failure attributes.
                    </p>

                </div>

                <span class="ew-confirmed-badge">
                    SOURCE: 380 INCIDENTS
                </span>

            </div>


            <div class="ew-evidence-grid">

                ${cards}

            </div>


            <div
                style="
                    margin-top:14px;
                    font-size:12px;
                    color:#64748b;
                "
            >
                Retrieval ranking is based on matching governed
                incident attributes. No artificial similarity
                percentage is generated.
            </div>

        </div>
    `;
}
function sendRCAToActionHub(assetTag) {

    const rcaActions = {
        "PU-2101B": {
            type: "CORRECTIVE / PREVENTIVE",
            action:
                "Implement seal-flush flow monitoring and DCS alarm, add protective interlock, limit feed ramping to 1 T/H/min, and strengthen seal-flush preventive maintenance.",
            priority: "P2"
        },

        "KO-3201": {
            type: "CORRECTIVE / PREVENTIVE",
            action:
                "Repair the leaking lube-oil cooler tube, implement online water-in-oil monitoring, tighten vibration alerting, and extend preventive controls to comparable assets.",
            priority: "P1"
        },

        "PM-4405B": {
            type: "PREVENTIVE",
            action:
                "Revise relubrication to a four-month interval, implement bearing-temperature trending and alerts, and include motors in routine vibration and thermography monitoring.",
            priority: "P2"
        },

        "HE-3301": {
            type: "CORRECTIVE / PREVENTIVE",
            action:
                "Implement differential-pressure cleaning triggers and alarms, strengthen heavy-end control, monitor fouling-factor and duty KPIs, and trend exchanger performance daily.",
            priority: "P2"
        },

        "BL-5702": {
            type: "PREVENTIVE",
            action:
                "Introduce laser-alignment and soft-foot checks, strengthen coupling replacement strategy, and increase vibration monitoring for comparable Class A blowers.",
            priority: "P1"
        }
    };

    const recommendation = rcaActions[assetTag];

    if (!recommendation) {
        alert("RCA recommendation not found.");
        return;
    }

    // Get existing Action Hub records
    const actions =
        JSON.parse(localStorage.getItem("imxActions")) || [];

    // Prevent duplicate handoff
    const duplicate = actions.find(function(action) {
        return (
            action.tag === assetTag &&
            action.source === "Early Warning Intelligence" &&
            action.status !== "CLOSED"
        );
    });

    if (duplicate) {
        alert(
            assetTag +
            " already has an active RCA recommendation in Action Hub."
        );

        showPage("actions");
        return;
    }

    // Generate Action ID
    const actionId =
        "EW-" +
        assetTag.replace(/[^A-Za-z0-9]/g, "") +
        "-" +
        Date.now().toString().slice(-6);

    const newAction = {
        id: actionId,

        tag: assetTag,

        type: recommendation.type,

        action: recommendation.action,

        pic: "UNASSIGNED",

        dueDate: "TO BE ASSIGNED",

        priority: recommendation.priority,

        status: "OPEN",

        source: "Early Warning Intelligence",

        validationStatus: "READY FOR HUMAN VALIDATION",

        closureEvidence: "",

        createdAt: new Date().toISOString()
    };

    // Add newest recommendation at the top
    actions.unshift(newAction);

    // Save to browser storage
    localStorage.setItem(
        "imxActions",
        JSON.stringify(actions)
    );

    // Keep handoff context
    window.imxRCAHandoff = newAction;

    alert(
        assetTag +
        " RCA recommendation has been sent to Action Hub."
    );

    // Open Action Hub
    showPage("actions");
}
document.addEventListener("DOMContentLoaded", function () {

    const searchInput = document.getElementById("headerSearchInput");
    const searchButton = document.getElementById("headerSearchButton");

    console.log("HEADER SEARCH LOADED");
    console.log("Input:", searchInput);
    console.log("Button:", searchButton);

    if (!searchInput || !searchButton) {
        console.error("SEARCH ELEMENT TIDAK DITEMUKAN");
        return;
    }

    function doHeaderSearch() {

        const query = searchInput.value.trim();

        console.log("SEARCH CLICKED:", query);

        if (!query) {
            alert("Masukkan kata yang ingin dicari.");
            return;
        }

        // ==========================================
        // COBA BUKA HALAMAN SEARCH
        // ==========================================

        if (typeof showSearchIMX === "function") {

            console.log("showSearchIMX ditemukan");

            showSearchIMX();

        } else {

            console.error("showSearchIMX TIDAK DITEMUKAN");

            alert("Function showSearchIMX() tidak ditemukan.");

            return;
        }


        // ==========================================
        // PINDAHKAN QUERY KE SEARCH IMX
        // ==========================================

        setTimeout(function () {

            const imxInput =
                document.getElementById("imxSearchInput");

            console.log("IMX INPUT:", imxInput);

            if (!imxInput) {

                alert("imxSearchInput tidak ditemukan.");

                return;
            }

            imxInput.value = query;


            // ==========================================
            // JALANKAN SEARCH
            // ==========================================

            if (typeof runIMXSearch === "function") {

                console.log("runIMXSearch ditemukan");

                runIMXSearch();

            } else {

                console.error("runIMXSearch TIDAK DITEMUKAN");

                alert("Function runIMXSearch() tidak ditemukan.");

            }

        }, 200);

    }


    // BUTTON
    searchButton.addEventListener("click", function (e) {

        e.preventDefault();

        doHeaderSearch();

    });


    // ENTER
    searchInput.addEventListener("keydown", function (e) {

        if (e.key === "Enter") {

            e.preventDefault();

            doHeaderSearch();

        }

    });

});

/* =========================================================
   IMX CALIBER — AI INVESTIGATION
   FINAL STANDALONE VERSION
   Paste this code at the VERY BOTTOM of app.js
   ========================================================= */

(function () {

    console.log("IMX AI Investigation: initializing...");

    const AI_DATA = {
        assets: "data/assets.json",
        conditions: "data/condition-history.json",
        rca: "data/rca.json"
    };

    let AI_CACHE = {
        assets: null,
        conditions: null,
        rca: null
    };

    /* =====================================================
       BASIC HELPERS
       ===================================================== */

    function aiEsc(value) {
        return String(value ?? "")
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    async function aiLoad(url) {

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Cannot load: " + url);
        }

        return await response.json();
    }

    async function aiGetData() {

        if (
            AI_CACHE.assets &&
            AI_CACHE.conditions &&
            AI_CACHE.rca
        ) {
            return AI_CACHE;
        }

        const [assets, conditions, rca] = await Promise.all([
            aiLoad(AI_DATA.assets),
            aiLoad(AI_DATA.conditions),
            aiLoad(AI_DATA.rca)
        ]);

        AI_CACHE.assets = assets;
        AI_CACHE.conditions = conditions;
        AI_CACHE.rca = rca;

        return AI_CACHE;
    }

    function aiFindAsset(assets, tag) {

        return (assets || []).find(function (asset) {

            return String(
                asset.tag ||
                asset.assetTag ||
                asset.equipmentTag ||
                ""
            ).toUpperCase() === String(tag).toUpperCase();

        });
    }

    function aiFindConditions(conditions, tag) {

        return (conditions || []).filter(function (item) {

            return String(item.tag || "")
                .toUpperCase() === String(tag).toUpperCase();

        });
    }

    function aiFindRCA(rca, tag) {

        return (rca || []).find(function (item) {

            return String(item.tag || "")
                .toUpperCase() === String(tag).toUpperCase();

        });
    }

    /* =====================================================
       CONDITION ANALYSIS
       ===================================================== */

    function aiAnalyzeCondition(item) {

        const latest = Number(item.latestValue);

        const alarm = Number(item.alarmLimit);
        const trip = Number(item.tripLimit);

        let level = "NORMAL";

        if (Number.isFinite(latest)) {

            if (
                Number.isFinite(trip) &&
                latest >= trip
            ) {
                level = "TRIP";
            }

            else if (
                Number.isFinite(alarm) &&
                latest >= alarm
            ) {
                level = "ALARM";
            }
        }

        return {
            parameter: item.parameter || "Unknown Parameter",
            unit: item.unit || "",
            value: Number.isFinite(latest)
                ? latest
                : "N/A",
            alarm: Number.isFinite(alarm)
                ? alarm
                : null,
            trip: Number.isFinite(trip)
                ? trip
                : null,
            level: level
        };
    }

    /* =====================================================
       AI SCORING
       ===================================================== */

    function aiCalculateScore(asset, conditionRows, rca) {

        let score = 0;

        const reasons = [];

        const criticality = String(
            asset.criticality || ""
        ).toLowerCase();

        const trips = Number(
            asset.tripCount || 0
        );

        const alarms = Number(
            asset.alarmCount || 0
        );

        const downtime = Number(
            asset.downtime || 0
        );

        const productionLoss = Number(
            asset.productionLoss || 0
        );

        /* Criticality */

        if (criticality === "high") {

            score += 20;

            reasons.push(
                "Asset has high criticality."
            );
        }

        /* Trips */

        if (trips > 0) {

            score += 25;

            reasons.push(
                trips + " trip event(s) recorded."
            );
        }

        /* Alarms */

        if (alarms >= 10) {

            score += 20;

            reasons.push(
                alarms + " alarms recorded."
            );

        } else if (alarms >= 5) {

            score += 10;

            reasons.push(
                alarms + " alarms recorded."
            );
        }

        /* Downtime */

        if (downtime >= 20) {

            score += 20;

            reasons.push(
                downtime + " hours downtime."
            );

        } else if (downtime > 0) {

            score += 8;

            reasons.push(
                downtime + " hours downtime."
            );
        }

        /* Production loss */

        if (productionLoss >= 1000) {

            score += 20;

            reasons.push(
                "High production loss: " +
                productionLoss +
                " kUS$."
            );

        } else if (productionLoss > 0) {

            score += 8;

            reasons.push(
                "Production loss: " +
                productionLoss +
                " kUS$."
            );
        }

        /* Condition evidence */

        const evidence = conditionRows.map(
            aiAnalyzeCondition
        );

        const abnormal = evidence.filter(function (item) {

            return (
                item.level === "ALARM" ||
                item.level === "TRIP"
            );

        });

        if (abnormal.length > 0) {

            score += Math.min(
                30,
                abnormal.length * 10
            );

            abnormal.forEach(function (item) {

                reasons.push(
                    item.parameter +
                    " condition is " +
                    item.level +
                    "."
                );

            });
        }

        /* Historical RCA */

        if (rca) {

            score += 10;

            reasons.push(
                "Historical RCA match is available."
            );
        }

        let severity = "MONITOR";

        if (score >= 80) {

            severity = "HIGH";

        } else if (score >= 50) {

            severity = "MEDIUM";
        }

        return {
            score: score,
            severity: severity,
            reasons: reasons,
            evidence: evidence
        };
    }

    /* =====================================================
       BADGE
       ===================================================== */

    function aiBadge(text, type) {

        let background = "#e2e8f0";
        let color = "#334155";

        if (type === "HIGH") {
            background = "#fee2e2";
            color = "#991b1b";
        }

        if (type === "MEDIUM") {
            background = "#fef3c7";
            color = "#92400e";
        }

        if (type === "TRIP") {
            background = "#fee2e2";
            color = "#991b1b";
        }

        if (type === "ALARM") {
            background = "#fef3c7";
            color = "#92400e";
        }

        if (type === "NORMAL") {
            background = "#dcfce7";
            color = "#166534";
        }

        return `
            <span style="
                display:inline-block;
                padding:5px 10px;
                border-radius:999px;
                background:${background};
                color:${color};
                font-size:11px;
                font-weight:800;
            ">
                ${aiEsc(text)}
            </span>
        `;
    }

    /* =====================================================
       EVIDENCE CARD
       ===================================================== */

    function aiEvidenceCard(item) {

        return `
            <div style="
                border:1px solid #e2e8f0;
                border-radius:12px;
                padding:16px;
                background:#ffffff;
            ">

                <div style="
                    display:flex;
                    justify-content:space-between;
                    align-items:center;
                    gap:10px;
                ">

                    <strong>
                        ${aiEsc(item.parameter)}
                    </strong>

                    ${aiBadge(
                        item.level,
                        item.level
                    )}

                </div>

                <div style="
                    margin-top:12px;
                    font-size:24px;
                    font-weight:800;
                ">
                    ${aiEsc(item.value)}
                    ${aiEsc(item.unit)}
                </div>

                <div style="
                    margin-top:8px;
                    color:#64748b;
                    font-size:12px;
                ">

                    Alarm:
                    ${
                        item.alarm !== null
                        ? aiEsc(item.alarm)
                        : "—"
                    }

                    &nbsp;&nbsp;|&nbsp;&nbsp;

                    Trip:
                    ${
                        item.trip !== null
                        ? aiEsc(item.trip)
                        : "—"
                    }

                </div>

            </div>
        `;
    }

    /* =====================================================
       HUMAN-IN-THE-LOOP ACTIONS
       ===================================================== */

    window.aiApprove = function (tag, action) {

        localStorage.setItem(
            "IMX_AI_DECISION_" + tag,
            JSON.stringify({
                tag: tag,
                action: action,
                decision: "APPROVED",
                time: new Date().toISOString()
            })
        );

        alert(
            "Recommendation approved for engineering review.\n\n" +
            "No automatic execution has been triggered."
        );
    };


    window.aiReject = function (tag, action) {

        localStorage.setItem(
            "IMX_AI_DECISION_" + tag,
            JSON.stringify({
                tag: tag,
                action: action,
                decision: "REJECTED",
                time: new Date().toISOString()
            })
        );

        alert(
            "Recommendation rejected.\n\n" +
            "No automatic action has been executed."
        );
    };


    window.aiModify = function (tag, action) {

        const modified = prompt(
            "Modify AI recommendation:",
            action
        );

        if (
            modified === null ||
            modified.trim() === ""
        ) {
            return;
        }

        localStorage.setItem(
            "IMX_AI_DECISION_" + tag,
            JSON.stringify({
                tag: tag,
                action: modified,
                decision: "MODIFIED",
                time: new Date().toISOString()
            })
        );

        alert(
            "Recommendation modified and saved for engineering review."
        );

    };

    /* =====================================================
       OPEN INVESTIGATION
       ===================================================== */

    window.openAIInvestigation = async function (tag) {

        console.log(
            "Opening AI Investigation:",
            tag
        );

        try {

            const data = await aiGetData();

            const asset = aiFindAsset(
                data.assets,
                tag
            );

            const conditions = aiFindConditions(
                data.conditions,
                tag
            );

            const rca = aiFindRCA(
                data.rca,
                tag
            );

            if (!asset) {

                document.getElementById(
                    "mainContent"
                ).innerHTML = `

                    <div class="detail-section">

                        <h2>
                            Asset Not Found
                        </h2>

                        <p>
                            No asset data was found for
                            <strong>
                                ${aiEsc(tag)}
                            </strong>.
                        </p>

                    </div>

                `;

                return;
            }

            const insight = aiCalculateScore(
                asset,
                conditions,
                rca
            );

            let rootCause =
                "No confirmed root cause available.";

            if (rca) {

                rootCause =
                    rca.probableRootCause ||
                    rca.rootCause ||
                    rca.failureMechanism ||
                    "Historical RCA indicates a potential failure mechanism.";

            }

            let actions = [];

            if (rca) {

                if (
                    Array.isArray(
                        rca.correctiveActions
                    )
                ) {

                    actions =
                        rca.correctiveActions;
                }

                else if (
                    Array.isArray(
                        rca.actions
                    )
                ) {

                    actions =
                        rca.actions;
                }
            }

            if (actions.length === 0) {

                actions = [
                    "Verify abnormal condition with field measurement.",
                    "Inspect the affected equipment and associated components.",
                    "Review operating parameters and recent process changes."
                ];
            }

            const main =
                document.getElementById(
                    "mainContent"
                );

            if (!main) {

                console.error(
                    "mainContent element not found."
                );

                return;
            }

            main.innerHTML = `

                <button
                    class="back-btn"
                    onclick="showAIInvestigationHub()"
                >
                    ← Back to AI Investigation
                </button>


                <div class="page-heading-row">

                    <div>

                        <div class="asset-tag-large">

                            ${aiEsc(
                                asset.tag ||
                                tag
                            )}

                            ·

                            ${aiEsc(
                                asset.plant ||
                                "Plant"
                            )}

                        </div>

                        <h1 class="page-title">
                            AI Investigation
                        </h1>

                        <p class="page-subtitle">

                            Evidence-based investigation
                            for equipment condition,
                            historical failure and
                            recommended response.

                        </p>

                    </div>

                    <div class="data-label">
                        HUMAN-IN-THE-LOOP
                    </div>

                </div>


                <!-- ==================================
                     PROACTIVE INSIGHT
                     ================================== -->

                <div class="investigation-banner">

                    <div class="section-label">
                        PROACTIVE AI INSIGHT
                    </div>

                    <h2>

                        ${aiBadge(
                            insight.severity,
                            insight.severity
                        )}

                        &nbsp;

                        Investigation Score:
                        ${insight.score}

                    </h2>

                    <p style="
                        margin-top:12px;
                        color:#475569;
                    ">

                        AI detected multiple evidence
                        signals that may require
                        engineering investigation.

                    </p>

                </div>


                <!-- ==================================
                     KPI
                     ================================== -->

                <div class="detail-grid">

                    <div class="kpi-card">

                        <div class="kpi-label">
                            AVAILABILITY
                        </div>

                        <div class="kpi-value">

                            ${
                                Number(
                                    asset.availability || 0
                                ).toFixed(2)
                            }%

                        </div>

                    </div>


                    <div class="kpi-card">

                        <div class="kpi-label">
                            DOWNTIME
                        </div>

                        <div class="kpi-value">

                            ${aiEsc(
                                asset.downtime || 0
                            )}
                            h

                        </div>

                    </div>


                    <div class="kpi-card">

                        <div class="kpi-label">
                            PRODUCTION LOSS
                        </div>

                        <div class="kpi-value">

                            ${Number(
                                asset.productionLoss || 0
                            ).toLocaleString()}

                            kUS$

                        </div>

                    </div>


                    <div class="kpi-card">

                        <div class="kpi-label">
                            HISTORICAL RCA
                        </div>

                        <div class="kpi-value"
                             style="font-size:20px;">

                            ${
                                rca
                                ? "MATCH FOUND"
                                : "NO MATCH"
                            }

                        </div>

                    </div>

                </div>


                <!-- ==================================
                     EVIDENCE
                     ================================== -->

                <div class="investigation-layout">

                    <div class="investigation-panel">

                        <div class="section-label">
                            01 — CONDITION EVIDENCE
                        </div>

                        <h2>
                            What triggered the investigation?
                        </h2>

                        <div style="
                            display:grid;
                            gap:12px;
                            margin-top:16px;
                        ">

                            ${
                                insight.evidence.length
                                ? insight.evidence
                                    .map(aiEvidenceCard)
                                    .join("")
                                : `
                                    <p style="
                                        color:#64748b;
                                    ">
                                        No condition evidence
                                        available.
                                    </p>
                                `
                            }

                        </div>

                    </div>


                    <!-- ==================================
                         WHY
                         ================================== -->

                    <div class="investigation-panel">

                        <div class="section-label">
                            02 — AI INTERPRETATION
                        </div>

                        <h2>
                            Why is this case prioritized?
                        </h2>

                        <ul style="
                            margin-top:15px;
                            line-height:1.7;
                            color:#334155;
                        ">

                            ${
                                insight.reasons.length
                                ? insight.reasons
                                    .map(function(reason) {

                                        return `
                                            <li>
                                                ${aiEsc(reason)}
                                            </li>
                                        `;

                                    })
                                    .join("")
                                : `
                                    <li>
                                        No significant
                                        anomaly detected.
                                    </li>
                                `
                            }

                        </ul>

                    </div>

                </div>


                <!-- ==================================
                     HISTORICAL RCA
                     ================================== -->

                <div class="detail-section">

                    <div class="section-label">
                        03 — HISTORICAL KNOWLEDGE
                    </div>

                    <h2>
                        Historical RCA Match
                    </h2>

                    ${
                        rca
                        ? `

                            <div style="
                                margin-top:15px;
                                padding:18px;
                                border:1px solid #dbeafe;
                                border-radius:12px;
                                background:#eff6ff;
                            ">

                                <strong>
                                    ${
                                        aiEsc(
                                            rca.event ||
                                            rca.failureMode ||
                                            "Historical Failure"
                                        )
                                    }
                                </strong>

                                <p style="
                                    margin-top:10px;
                                    color:#475569;
                                ">

                                    ${
                                        aiEsc(
                                            rootCause
                                        )
                                    }

                                </p>

                                ${
                                    rca.arNumber
                                    ? `
                                        <div style="
                                            margin-top:10px;
                                            font-size:12px;
                                            color:#64748b;
                                        ">
                                            Reference:
                                            ${aiEsc(
                                                rca.arNumber
                                            )}
                                        </div>
                                    `
                                    : ""
                                }

                            </div>

                        `
                        : `

                            <div style="
                                margin-top:15px;
                                padding:16px;
                                background:#f8fafc;
                                border-radius:10px;
                                color:#64748b;
                            ">

                                No historical RCA match
                                was found.

                            </div>

                        `
                    }

                </div>


                <!-- ==================================
                     ROOT CAUSE
                     ================================== -->

                <div class="detail-section">

                    <div class="section-label">
                        04 — PROBABLE ROOT CAUSE
                    </div>

                    <h2>
                        ${aiEsc(rootCause)}
                    </h2>

                    <p style="
                        margin-top:10px;
                        color:#64748b;
                    ">

                        This is a probable cause based
                        on available evidence and
                        historical knowledge.

                        It is not a confirmed diagnosis.

                    </p>

                </div>


                <!-- ==================================
                     ACTION
                     ================================== -->

                <div class="detail-section">

                    <div class="section-label">
                        05 — GUIDED ACTION
                    </div>

                    <h2>
                        Recommended Investigation Sequence
                    </h2>

                    <p style="
                        margin-top:8px;
                        color:#64748b;
                    ">

                        Review each recommendation before
                        executing any maintenance or
                        operational change.

                    </p>


                    <div style="
                        margin-top:20px;
                    ">

                        ${
                            actions.map(
                                function(action, index) {

                                    return `

                                        <div style="
                                            display:grid;
                                            grid-template-columns:
                                                38px 1fr;
                                            gap:12px;
                                            padding:16px 0;
                                            border-bottom:
                                                1px solid #e2e8f0;
                                        ">

                                            <div style="
                                                width:32px;
                                                height:32px;
                                                border-radius:50%;
                                                background:#eff6ff;
                                                color:#1d4ed8;
                                                display:flex;
                                                align-items:center;
                                                justify-content:center;
                                                font-weight:800;
                                            ">

                                                ${index + 1}

                                            </div>


                                            <div>

                                                <div style="
                                                    font-weight:650;
                                                    color:#1e293b;
                                                ">

                                                    ${aiEsc(
                                                        action
                                                    )}

                                                </div>


                                                <div style="
                                                    margin-top:10px;
                                                    display:flex;
                                                    gap:7px;
                                                    flex-wrap:wrap;
                                                ">

                                                    <button
                                                        onclick="
                                                            aiApprove(
                                                                '${aiEsc(tag)}',
                                                                '${aiEsc(action)}'
                                                            )
                                                        "
                                                        style="
                                                            padding:7px 12px;
                                                            border:0;
                                                            border-radius:7px;
                                                            background:#0f3d73;
                                                            color:white;
                                                            cursor:pointer;
                                                        "
                                                    >
                                                        Approve
                                                    </button>


                                                    <button
                                                        onclick="
                                                            aiModify(
                                                                '${aiEsc(tag)}',
                                                                '${aiEsc(action)}'
                                                            )
                                                        "
                                                        style="
                                                            padding:7px 12px;
                                                            border:1px solid #cbd5e1;
                                                            border-radius:7px;
                                                            background:white;
                                                            cursor:pointer;
                                                        "
                                                    >
                                                        Modify
                                                    </button>


                                                    <button
                                                        onclick="
                                                            aiReject(
                                                                '${aiEsc(tag)}',
                                                                '${aiEsc(action)}'
                                                            )
                                                        "
                                                        style="
                                                            padding:7px 12px;
                                                            border:1px solid #fecaca;
                                                            border-radius:7px;
                                                            background:white;
                                                            color:#991b1b;
                                                            cursor:pointer;
                                                        "
                                                    >
                                                        Reject
                                                    </button>

                                                </div>

                                            </div>

                                        </div>

                                    `;

                                }
                            ).join("")
                        }

                    </div>

                </div>


                <!-- ==================================
                     HUMAN IN LOOP
                     ================================== -->

                <div class="human-validation-box">

                    <div class="section-label">
                        HUMAN-IN-THE-LOOP
                    </div>

                    <h2>
                        Engineer remains the final
                        decision maker.
                    </h2>

                    <p style="
                        margin-top:10px;
                        color:#475569;
                    ">

                        AI detects abnormal conditions,
                        connects evidence and provides
                        recommendations.

                        It does not automatically execute
                        shutdowns, maintenance,
                        parameter changes or work orders.

                    </p>

                </div>

            `;

        }

        catch (error) {

            console.error(
                "AI Investigation Error:",
                error
            );

            const main =
                document.getElementById(
                    "mainContent"
                );

            if (main) {

                main.innerHTML = `

                    <div class="detail-section">

                        <h2>
                            AI Investigation Error
                        </h2>

                        <p style="
                            color:#991b1b;
                            margin-top:10px;
                        ">

                            ${aiEsc(
                                error.message
                            )}

                        </p>

                        <p style="
                            margin-top:10px;
                            color:#64748b;
                        ">

                            Make sure the prototype
                            is opened through a local
                            web server and that these
                            files exist:

                        </p>

                        <ul>

                            <li>
                                data/assets.json
                            </li>

                            <li>
                                data/condition-history.json
                            </li>

                            <li>
                                data/rca.json
                            </li>

                        </ul>

                    </div>

                `;
            }
        }

    };


    /* =====================================================
       AI INVESTIGATION HUB
       ===================================================== */

    window.showAIInvestigationHub = async function () {

        const main =
            document.getElementById(
                "mainContent"
            );

        if (!main) return;

        main.innerHTML = `

            <div class="page-header">

                <div>

                    <h1>
                        AI Investigation
                    </h1>

                    <p>
                        Proactive evidence-based
                        investigation and root cause
                        decision support.
                    </p>

                </div>

                <div class="data-badge">
                    HUMAN-IN-THE-LOOP
                </div>

            </div>


            <div class="kpi-grid">

                <div class="kpi-card">

                    <div class="kpi-label">
                        AI MODE
                    </div>

                    <div class="kpi-value"
                         style="font-size:20px;">
                        PROACTIVE
                    </div>

                    <div class="kpi-description">
                        Automatically identifies
                        investigation priorities.
                    </div>

                </div>


                <div class="kpi-card">

                    <div class="kpi-label">
                        EVIDENCE
                    </div>

                    <div class="kpi-value"
                         style="font-size:20px;">
                        MULTI-SOURCE
                    </div>

                    <div class="kpi-description">
                        Condition + asset + RCA
                    </div>

                </div>


                <div class="kpi-card">

                    <div class="kpi-label">
                        OUTPUT
                    </div>

                    <div class="kpi-value"
                         style="font-size:20px;">
                        ROOT CAUSE
                    </div>

                    <div class="kpi-description">
                        Probable cause supported
                        by evidence.
                    </div>

                </div>


                <div class="kpi-card">

                    <div class="kpi-label">
                        DECISION
                    </div>

                    <div class="kpi-value"
                         style="font-size:20px;">
                        HUMAN
                    </div>

                    <div class="kpi-description">
                        Engineer approves final action.
                    </div>

                </div>

            </div>


            <div class="detail-section">

                <div class="section-header">

                    <div>

                        <h2>
                            Proactive Investigation Queue
                        </h2>

                        <p>
                            AI automatically ranks equipment
                            based on available evidence.
                        </p>

                    </div>

                </div>


                <div id="aiInvestigationQueue">

                    <p style="
                        color:#64748b;
                    ">
                        Analyzing equipment...
                    </p>

                </div>

            </div>

        `;

        try {

            const data =
                await aiGetData();

            const ranked =
                (data.assets || [])
                    .map(function (asset) {

                        const conditions =
                            aiFindConditions(
                                data.conditions,
                                asset.tag
                            );

                        const rca =
                            aiFindRCA(
                                data.rca,
                                asset.tag
                            );

                        const insight =
                            aiCalculateScore(
                                asset,
                                conditions,
                                rca
                            );

                        return {
                            asset: asset,
                            insight: insight,
                            rca: rca
                        };

                    })
                    .sort(function (a, b) {

                        return (
                            b.insight.score -
                            a.insight.score
                        );

                    });


            const queue =
                document.getElementById(
                    "aiInvestigationQueue"
                );

            if (!queue) return;


            queue.innerHTML = `

                <div style="
                    overflow-x:auto;
                ">

                    <table class="asset-table">

                        <thead>

                            <tr>

                                <th>
                                    PRIORITY
                                </th>

                                <th>
                                    ASSET
                                </th>

                                <th>
                                    PLANT
                                </th>

                                <th>
                                    AI SIGNAL
                                </th>

                                <th>
                                    SCORE
                                </th>

                                <th>
                                    RCA
                                </th>

                                <th>
                                    ACTION
                                </th>

                            </tr>

                        </thead>

                        <tbody>

                            ${
                                ranked.map(
                                    function(item) {

                                        const asset =
                                            item.asset;

                                        const insight =
                                            item.insight;

                                        return `

                                            <tr
                                                class="clickable-row"
                                                onclick="
                                                    openAIInvestigation(
                                                        '${aiEsc(asset.tag)}'
                                                    )
                                                "
                                            >

                                                <td>

                                                    ${aiBadge(
                                                        insight.severity,
                                                        insight.severity
                                                    )}

                                                </td>


                                                <td>

                                                    <strong>
                                                        ${aiEsc(
                                                            asset.tag
                                                        )}
                                                    </strong>

                                                </td>


                                                <td>

                                                    ${aiEsc(
                                                        asset.plant ||
                                                        "—"
                                                    )}

                                                </td>


                                                <td>

                                                    ${
                                                        insight.reasons[0]
                                                        ? aiEsc(
                                                            insight.reasons[0]
                                                        )
                                                        : "No major anomaly"
                                                    }

                                                </td>


                                                <td>

                                                    <strong>
                                                        ${insight.score}
                                                    </strong>

                                                </td>


                                                <td>

                                                    ${
                                                        item.rca
                                                        ? aiBadge(
                                                            "MATCH",
                                                            "NORMAL"
                                                        )
                                                        : aiBadge(
                                                            "NO MATCH",
                                                            "MONITOR"
                                                        )
                                                    }

                                                </td>


                                                <td>

                                                    <button
                                                        onclick="
                                                            event.stopPropagation();
                                                            openAIInvestigation(
                                                                '${aiEsc(asset.tag)}'
                                                            )
                                                        "
                                                        style="
                                                            padding:8px 12px;
                                                            border:0;
                                                            border-radius:7px;
                                                            background:#0f3d73;
                                                            color:white;
                                                            cursor:pointer;
                                                            font-weight:700;
                                                        "
                                                    >
                                                        Investigate
                                                    </button>

                                                </td>

                                            </tr>

                                        `;

                                    }
                                ).join("")
                            }

                        </tbody>

                    </table>

                </div>

            `;

        }

        catch (error) {

            console.error(
                "AI Queue Error:",
                error
            );

            const queue =
                document.getElementById(
                    "aiInvestigationQueue"
                );

            if (queue) {

                queue.innerHTML = `

                    <div style="
                        padding:20px;
                        background:#fee2e2;
                        color:#991b1b;
                        border-radius:10px;
                    ">

                        <strong>
                            Cannot load AI Investigation.
                        </strong>

                        <p>
                            ${aiEsc(
                                error.message
                            )}
                        </p>

                    </div>

                `;
            }

        }

    };


    /* =====================================================
       PUBLIC API
       ===================================================== */

    window.IMX_AI = {

        loadData: aiGetData,

        investigate:
            window.openAIInvestigation,

        showQueue:
            window.showAIInvestigationHub

    };


    console.log(
        "IMX AI Investigation loaded successfully."
    );

})();

/* ============================================================
   IMX SINGLE PANE SEARCH — FINAL FIX
   Paste at the VERY BOTTOM of app.js
   ============================================================ */

(function () {

    console.log("IMX SEARCH FINAL FIX LOADED");


    /* ========================================================
       ESCAPE HTML
       ======================================================== */

    function searchEsc(value) {

        return String(value ?? "")
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");

    }


    /* ========================================================
       LOAD DATA DIRECTLY
       ======================================================== */

    async function loadSearchJSON(file) {

        const response = await fetch(file);

        if (!response.ok) {
            throw new Error(
                "Cannot load " + file
            );
        }

        return await response.json();

    }


    /* ========================================================
       MAIN SEARCH
       ======================================================== */

    async function performIMXHeaderSearch(query) {

        query =
            String(query || "")
                .trim()
                .toLowerCase();


        if (!query) {

            return;

        }


        console.log(
            "IMX SEARCH QUERY:",
            query
        );


        /* ================================================
           LOAD DATA
           ================================================ */
        let assets = [];
let conditions = [];
let rca = [];

try {

    const results = await Promise.all([
        loadSearchJSON("data/assets.json"),
        loadSearchJSON("data/condition-history.json"),
        loadSearchJSON("data/rca.json")
    ]);

    // Support JSON berbentuk array maupun { data: [...] }
    assets = Array.isArray(results[0])
        ? results[0]
        : (Array.isArray(results[0]?.data) ? results[0].data : []);

    conditions = Array.isArray(results[1])
        ? results[1]
        : (Array.isArray(results[1]?.data) ? results[1].data : []);

    rca = Array.isArray(results[2])
        ? results[2]
        : (Array.isArray(results[2]?.data) ? results[2].data : []);

    console.log("SEARCH DATA LOADED:", {
        assets: assets.length,
        conditions: conditions.length,
        rca: rca.length
    });

}
catch (error) {

    console.error("SEARCH DATA ERROR:", error);

    alert(
        "Data search gagal.\n\n" +
        error.message +
        "\n\n" +
        "Pastikan prototype dijalankan menggunakan Live Server."
    );

    return;
}


        /* ================================================
           FIND ASSET
           ================================================ */

        const assetMatches = assets.filter(function (asset) {

    const text = [
        asset.tag,
        asset.assetTag,
        asset.asset_id,
        asset.plant,
        asset.equipmentName,
        asset.equipment_name,
        asset.equipmentType,
        asset.equipmentClass,
        asset.discipline,
        asset.criticality,
        asset.failureMode,
        asset.failure_mode
    ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

    return text.includes(query);

});


        /* ================================================
           FIND RCA
           ================================================ */

        let rcaMatches =
            rca.filter(function (item) {

                const text = [

                    item.tag,
                    item.arNumber,
                    item.event,
                    item.probableRootCause,
                    item.physicalCause,
                    item.detectionGap,
                    ...(item.symptoms || []),
                    ...(item.evidence || [])
                        .map(function (x) {
                            return x.finding || "";
                        })

                ]
                    .join(" ")
                    .toLowerCase();


                return text.includes(query);

            });


        /*
         * If user searches simply "rca",
         * show all RCA records.
         */

        if (
            query === "rca" ||
            query === "root cause" ||
            query === "historical rca"
        ) {

            rcaMatches = rca;

        }


        /* ================================================
           FIND CONDITION
           ================================================ */

        let conditionMatches = conditions.filter(function (item) {

    const text = [
        item.tag,
        item.assetTag,
        item.parameter,
        item.unit,
        item.direction,
        item.status
    ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

    return text.includes(query);

});

        /* ================================================
           CRITICAL ASSETS
           ================================================ */

        if (
            query.includes("critical")
        ) {

            const criticalAssets =
                assets.filter(function (asset) {

                    return String(
                        asset.criticality || ""
                    )
                        .toLowerCase() === "high";

                });


            assetMatches.splice(
                0,
                assetMatches.length,
                ...criticalAssets
            );

        }


        /* ================================================
           FIND INCIDENT DATA FROM EXISTING APP
           ================================================ */

        const incidents = Array.isArray(window.imxIncidents)
    ? window.imxIncidents
    : [];

const incidentMatches = incidents.filter(function (incident) {

    const text = [
        incident.tag,
        incident.assetTag,
        incident.plant,
        incident.caseTitle,
        incident.title,
        incident.failureMechanism,
        incident.failureMode,
        incident.component,
        incident.discipline,
        incident.status,
        incident.arNumber,
        incident.description
    ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

    return text.includes(query);

});

console.log("INCIDENT MATCHES:", incidentMatches);

        /* ================================================
           SHOW SEARCH PAGE
           ================================================ */

        if (
            typeof showSearchIMX ===
            "function"
        ) {

            showSearchIMX();

        }

        else {

            console.error(
                "showSearchIMX() tidak ditemukan"
            );

            return;

        }


        /* ================================================
           WAIT FOR SEARCH PAGE
           ================================================ */

        setTimeout(
            function () {

                const searchInput =
                    document.getElementById(
                        "imxSearchInput"
                    );

                const result =
                    document.getElementById(
                        "imxSearchResult"
                    );


                if (searchInput) {

                    searchInput.value =
                        query;

                }


                if (!result) {

                    console.error(
                        "imxSearchResult tidak ditemukan"
                    );

                    return;

                }


                /* ========================================
                   RESULT HTML
                   ======================================== */

                let html = `

                    <div class="detail-section">

                        <div class="section-header">

                            <div>

                                <div class="section-label">
                                    GOVERNED SEARCH
                                </div>

                                <h2>
                                    IMX Search Result
                                </h2>

                                <p style="
                                    color:#64748b;
                                    margin-top:6px;
                                ">

                                    Query:
                                    <strong>
                                        ${searchEsc(query)}
                                    </strong>

                                </p>

                            </div>

                            <div class="data-badge">

                                ${
                                    assetMatches.length +
                                    rcaMatches.length +
                                    conditionMatches.length +
                                    incidentMatches.length
                                }

                                MATCHES

                            </div>

                        </div>

                    </div>

                `;


                /* ========================================
                   EQUIPMENT
                   ======================================== */

                if (
                    assetMatches.length
                ) {

                    html += `

                        <div class="detail-section">

                            <div class="section-label">
                                EQUIPMENT
                            </div>

                            <h2>
                                Equipment Matches
                            </h2>

                            <div style="
                                overflow-x:auto;
                                margin-top:15px;
                            ">

                                <table class="asset-table">

                                    <thead>

                                        <tr>

                                            <th>
                                                ASSET
                                            </th>

                                            <th>
                                                PLANT
                                            </th>

                                            <th>
                                                EQUIPMENT
                                            </th>

                                            <th>
                                                CRITICALITY
                                            </th>

                                            <th>
                                                DOWNTIME
                                            </th>

                                            <th>
                                                ACTION
                                            </th>

                                        </tr>

                                    </thead>

                                    <tbody>

                                        ${
                                            assetMatches
                                                .map(
                                                    function (asset) {

                                                        return `

                                                            <tr>

                                                                <td>
                                                                    <strong>
                                                                        ${searchEsc(
                                                                            asset.tag
                                                                        )}
                                                                    </strong>
                                                                </td>

                                                                <td>
                                                                    ${searchEsc(
                                                                        asset.plant
                                                                    )}
                                                                </td>

                                                                <td>
                                                                    ${searchEsc(
                                                                        asset.equipmentName
                                                                    )}
                                                                </td>

                                                                <td>
                                                                    ${searchEsc(
                                                                        asset.criticality
                                                                    )}
                                                                </td>

                                                                <td>
                                                                    ${searchEsc(
                                                                        asset.downtime || 0
                                                                    )}
                                                                    h
                                                                </td>

                                                                <td>

                                                                    <button
                                                                        onclick="
                                                                            openAIInvestigation(
                                                                                '${searchEsc(asset.tag)}'
                                                                            )
                                                                        "
                                                                        style="
                                                                            padding:8px 12px;
                                                                            border:none;
                                                                            border-radius:7px;
                                                                            background:#0f3d73;
                                                                            color:white;
                                                                            cursor:pointer;
                                                                            font-weight:700;
                                                                        "
                                                                    >
                                                                        Investigate
                                                                    </button>

                                                                </td>

                                                            </tr>


                                                        `;

                                                    }
                                                )
                                                .join("")
                                        }

                                    </tbody>

                                </table>

                            </div>

                        </div>

                    `;

                }

                /* ========================================
   INCIDENT
   ======================================== */

if (incidentMatches.length) {

    html += `

        <div class="detail-section">

            <div class="section-label">
                INCIDENT EVIDENCE
            </div>

            <h2>
                Incident Matches
            </h2>

            <p style="
                color:#64748b;
                margin-top:6px;
            ">
                Operational incidents related to the search.
            </p>

            <div style="
                display:grid;
                gap:12px;
                margin-top:18px;
            ">

                ${
                    incidentMatches.map(function (incident) {

                        return `

                            <div style="
                                border:1px solid #e2e8f0;
                                border-radius:12px;
                                padding:18px;
                                background:white;
                            ">

                                <div style="
                                    display:flex;
                                    justify-content:space-between;
                                    align-items:center;
                                    gap:10px;
                                ">

                                    <div>

                                        <div style="
                                            font-size:12px;
                                            color:#64748b;
                                            font-weight:700;
                                        ">
                                            ${searchEsc(
                                                incident.tag ||
                                                incident.assetTag ||
                                                "UNKNOWN ASSET"
                                            )}
                                        </div>

                                        <h3 style="
                                            margin-top:5px;
                                        ">
                                            ${searchEsc(
                                                incident.caseTitle ||
                                                incident.title ||
                                                "Operational Incident"
                                            )}
                                        </h3>

                                    </div>

                                    <span style="
                                        padding:5px 10px;
                                        border-radius:999px;
                                        background:#fef3c7;
                                        color:#92400e;
                                        font-size:11px;
                                        font-weight:800;
                                    ">
                                        INCIDENT
                                    </span>

                                </div>

                                <div style="
                                    margin-top:14px;
                                    color:#475569;
                                    line-height:1.6;
                                ">

                                    ${
                                        searchEsc(
                                            incident.failureMechanism ||
                                            incident.description ||
                                            "No additional description available."
                                        )
                                    }

                                </div>

                                <div style="
                                    display:flex;
                                    gap:20px;
                                    margin-top:14px;
                                    font-size:12px;
                                    color:#64748b;
                                ">

                                    <span>
                                        Status:
                                        <strong>
                                            ${searchEsc(
                                                incident.status || "—"
                                            )}
                                        </strong>
                                    </span>

                                    <span>
                                        Plant:
                                        <strong>
                                            ${searchEsc(
                                                incident.plant || "—"
                                            )}
                                        </strong>
                                    </span>

                                </div>

                            </div>

                        `;

                    }).join("")
                }

            </div>

        </div>

    `;

}
                /* ========================================
                   RCA
                   ======================================== */

                if (
                    rcaMatches.length
                ) {

                    html += `

                        <div class="detail-section">

                            <div class="section-label">
                                HISTORICAL KNOWLEDGE
                            </div>

                            <h2>
                                Historical RCA Match
                            </h2>

                            <p style="
                                color:#64748b;
                                margin-top:6px;
                            ">

                                Previous failure analysis
                                connected to the current
                                search.

                            </p>


                            <div style="
                                display:grid;
                                gap:12px;
                                margin-top:18px;
                            ">

                                ${
                                    rcaMatches
                                        .map(
                                            function (item) {

                                                return `

                                                    <div style="
                                                        border:1px solid #e2e8f0;
                                                        border-radius:12px;
                                                        padding:18px;
                                                        background:white;
                                                    ">

                                                        <div style="
                                                            display:flex;
                                                            justify-content:space-between;
                                                            align-items:center;
                                                            gap:10px;
                                                        ">

                                                            <div>

                                                                <div style="
                                                                    font-size:12px;
                                                                    color:#64748b;
                                                                    font-weight:700;
                                                                ">

                                                                    ${searchEsc(item.tag
                                                                    )}

                                                                </div>

                                                                <h3 style="
                                                                    margin-top:5px;
                                                                ">

                                                                    ${searchEsc(
                                                                        item.event
                                                                    )}

                                                                </h3>

                                                            </div>


                                                            <span style="
                                                                padding:5px 10px;
                                                                border-radius:999px;
                                                                background:#dcfce7;
                                                                color:#166534;
                                                                font-size:11px;
                                                                font-weight:800;
                                                            ">

                                                                RCA MATCH

                                                            </span>

                                                        </div>


                                                        <div style="
                                                            margin-top:15px;
                                                        ">

                                                            <div style="
                                                                font-size:11px;
                                                                color:#64748b;
                                                                font-weight:800;
                                                            ">

                                                                PROBABLE ROOT CAUSE

                                                            </div>


                                                            <p style="
                                                                margin-top:6px;
                                                                line-height:1.6;
                                                            ">

                                                                ${searchEsc(
                                                                    item.probableRootCause
                                                                )}

                                                            </p>

                                                        </div>


                                                        <div style="
                                                            margin-top:12px;
                                                        ">

                                                            <div style="
                                                                font-size:11px;
                                                                color:#64748b;
                                                                font-weight:800;
                                                            ">

                                                                PHYSICAL CAUSE

                                                            </div>


                                                            <p style="
                                                                margin-top:6px;
                                                                color:#475569;
                                                            ">

                                                                ${searchEsc(
                                                                    item.physicalCause
                                                                )}

                                                            </p>

                                                        </div>


                                                        <button
                                                            onclick="
                                                                openAIInvestigation(
                                                                    '${searchJS(asset.tag)}'
                                                                )
                                                            "
                                                            style="
                                                                margin-top:15px;
                                                                padding:9px 14px;
                                                                border:none;
                                                                border-radius:8px;
                                                                background:#0f3d73;
                                                                color:white;
                                                                font-weight:700;
                                                                cursor:pointer;
                                                            "
                                                        >

                                                            Open AI Investigation

                                                        </button>

                                                    </div>

                                                `;

                                            }
                                        )
                                        .join("")
                                }

                            </div>

                        </div>

                    `;

                }


                /* ========================================
                   CONDITION
                   ======================================== */

                if (
                    conditionMatches.length
                ) {

                    html += `

                        <div class="detail-section">

                            <div class="section-label">
                                CONDITION EVIDENCE
                            </div>

                            <h2>
                                Condition Matches
                            </h2>


                            <div style="
                                display:grid;
                                gap:10px;
                                margin-top:15px;
                            ">

                                ${
                                    conditionMatches
                                        .map(
                                            function (item) {

                                                const history =
                                                    Array.isArray(
                                                        item.history
                                                    )
                                                        ? item.history
                                                        : [];


                                                const latest =
                                                    history.length
                                                        ? history[
                                                            history.length - 1
                                                        ].value
                                                        : "—";


                                                return `

                                                    <div style="
                                                        border:1px solid #e2e8f0;
                                                        border-radius:10px;
                                                        padding:15px;
                                                    ">

                                                        <strong>

                                                            ${searchEsc(
                                                                item.tag
                                                            )}

                                                        </strong>

                                                        <span>
                                                            ·
                                                            ${searchEsc(
                                                                item.parameter
                                                            )}
                                                        </span>


                                                        <div style="
                                                            margin-top:8px;
                                                            font-size:22px;
                                                            font-weight:800;
                                                        ">

                                                            ${searchEsc(
                                                                latest
                                                            )}

                                                            ${searchEsc(
                                                                item.unit || ""
                                                            )}

                                                        </div>


                                                        <div style="
                                                            margin-top:6px;
                                                            color:#64748b;
                                                            font-size:12px;
                                                        ">

                                                            Alarm:
                                                            ${searchEsc(
                                                                item.alarmLimit ?? "—"
                                                            )}

                                                            &nbsp;&nbsp;

                                                            Trip:
                                                            ${searchEsc(
                                                                item.tripLimit ?? "—"
                                                            )}

                                                        </div>

                                                    </div>

                                                `;

                                            }
                                        )
                                        .join("")
                                }

                            </div>

                        </div>

                    `;

                }


                /* ========================================
                   NO RESULT
                   ======================================== */

                if (
                    !assetMatches.length &&
                    !rcaMatches.length &&
                    !conditionMatches.length &&
                    !incidentMatches.length
                ) {

                    html += `

                        <div class="detail-section">

                            <h2>
                                No governed match found
                            </h2>

                            <p style="
                                color:#64748b;
                                margin-top:8px;
                            ">

                                Try:

                            </p>


                            <div style="
                                display:flex;
                                gap:8px;
                                flex-wrap:wrap;
                                margin-top:15px;
                            ">

                                <span class="data-badge">
                                    rca
                                </span>

                                <span class="data-badge">
                                    KO-3201
                                </span>

                                <span class="data-badge">
                                    vibration
                                </span>

                                <span class="data-badge">
                                    critical assets
                                </span>

                            </div>

                        </div>

                    `;

                }


                result.innerHTML =
                    html;


                console.log(
                    "IMX SEARCH FINISHED",
                    {
                        assets:
                            assetMatches.length,

                        rca:
                            rcaMatches.length,

                        conditions:
                            conditionMatches.length,

                        incidents:
                            incidentMatches.length
                    }
                );

            },
            100
        );

    }


    /* ========================================================
       FORCE HEADER SEARCH
       ======================================================== */

    function triggerHeaderSearch() {

        const input =
            document.getElementById(
                "headerSearchInput"
            );


        if (!input) {

            console.error(
                "HEADER SEARCH INPUT NOT FOUND"
            );

            return;

        }


        const query =
            input.value.trim();


        if (!query) {

            input.focus();

            return;

        }


        performIMXHeaderSearch(
            query
        );

    }


    /* ========================================================
       CAPTURE CLICK
       ======================================================== */

    document.addEventListener(
        "click",
        function (event) {

            const button =
                event.target.closest(
                    "#headerSearchButton"
                );


            if (!button) {

                return;

            }

            /* ========================================================
   ESCAPE HTML
   ======================================================== */

function searchEsc(value) {

    return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


/* ========================================================
   ESCAPE JAVASCRIPT STRING
   ======================================================== */

function searchJS(value) {

    return String(value ?? "")
        .replace(/\\/g, "\\\\")
        .replace(/'/g, "\\'")
        .replace(/"/g, '\\"')
        .replace(/\n/g, "\\n")
        .replace(/\r/g, "\\r");

}


/* ========================================================
   LOAD DATA DIRECTLY
   ======================================================== */

async function loadSearchJSON(file) {

    const response = await fetch(file);

    if (!response.ok) {
        throw new Error(
            "Cannot load " + file
        );
    }

    return await response.json();

}


            /*
             * IMPORTANT:
             * Capture phase stops all old
             * search listeners from running.
             */

            event.preventDefault();
            event.stopImmediatePropagation();


            console.log(
                "HEADER SEARCH BUTTON CLICKED"
            );


            triggerHeaderSearch();

        },
        true
    );


    /* ========================================================
       CAPTURE ENTER
       ======================================================== */

    document.addEventListener(
        "keydown",
        function (event) {

            const input =
                event.target.closest(
                    "#headerSearchInput"
                );


            if (
                !input ||
                event.key !== "Enter"
            ) {

                return;

            }


            event.preventDefault();
            event.stopImmediatePropagation();


            console.log(
                "HEADER SEARCH ENTER:",
                input.value
            );


            triggerHeaderSearch();

        },
        true
    );

    /*
     * Expose for debugging.
     */

    window.IMX_FINAL_SEARCH =
        performIMXHeaderSearch;


    console.log(
        "IMX SEARCH FINAL FIX READY"
    );

})();