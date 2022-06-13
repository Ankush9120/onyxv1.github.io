
<template>
  <body>

    <div class="loading-main loading">

      <div class="longfazers">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>

  <div class="bird">
    <span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </span>
    <div class="base">
      <span></span>
      <div class="face"></div>
    </div>
  </div>
    </div>

    <!-- <div class="loading">
            <div class="onyx flex items-center">
              <span>O</span> <span>n</span> <span>y</span> <img class="mx-0.5" src="https://i.ibb.co/sRVkLkH/logo2-removebg-preview.png" alt=""> <span>T</span> <span>r</span> <span>a</span> <span>d</span> <span>e</span>
            </div>
            
        </div> -->
    <!-- ------------- ADMIN COMPONENT (IGNORE) ----------  -->
    <div v-if="false" class="admin-settings">
      <div class="settings-data">
        <div>
          <div class="text">Loss Limit</div>
          <input type="tel" maxlength="8" value="10">
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path></svg>
        <div>
          <div class="text">Max Lots</div>
          <input type="tel" maxlength="8" value="8">
        </div>
        <div>
          <div class="text">Max Lots/Script</div>
          <input type="tel" maxlength="8" value="12">
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path></svg>
        <div>
          <div class="text">Brokerage</div>
          <input type="tel" maxlength="8" value="200">
        </div>
        <div>
          <div class="text">Watchlist Limit</div>
          <input type="tel" maxlength="8" value="6">
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path></svg>
        <div>
          <div class="text">Stocklist Limit</div>
          <input type="tel" maxlength="8" value="15">
        </div>
      </div>

      <div class="settings-switches">
        <div>
          <div class="text">Live Data</div>
            <input id="livedata" type="checkbox">
            <label for="livedata">
              <div class="btn-cover">

              <span class="btn"></span>

              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 288c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32S224 14.33 224 32v224C224 273.7 238.3 288 256 288zM403.7 66.81c-13.92-10.84-34.03-8.406-44.92 5.5c-10.89 13.94-8.438 34.03 5.484 44.94C407.3 150.9 432 201.5 432 256c0 97.03-78.95 176-176 176S80 353 80 256c0-54.53 24.69-105.1 67.72-138.8c13.92-10.91 16.38-31 5.484-44.94c-10.91-13.91-31-16.34-44.92-5.5C49.64 112.7 16 181.7 16 256c0 132.3 107.7 240 240 240s240-107.7 240-240C496 181.7 462.4 112.7 403.7 66.81z"/></svg>
                
              </div>
            </label>
        </div>

        <div>
          <div class="text">Bid Spread</div>
            <input id="bidspread" type="checkbox">
            <label for="bidspread">
              <div class="btn-cover">

              <span class="btn"></span>

              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 288c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32S224 14.33 224 32v224C224 273.7 238.3 288 256 288zM403.7 66.81c-13.92-10.84-34.03-8.406-44.92 5.5c-10.89 13.94-8.438 34.03 5.484 44.94C407.3 150.9 432 201.5 432 256c0 97.03-78.95 176-176 176S80 353 80 256c0-54.53 24.69-105.1 67.72-138.8c13.92-10.91 16.38-31 5.484-44.94c-10.91-13.91-31-16.34-44.92-5.5C49.64 112.7 16 181.7 16 256c0 132.3 107.7 240 240 240s240-107.7 240-240C496 181.7 462.4 112.7 403.7 66.81z"/></svg>
                
              </div>
            </label>
        </div>

        <div>
          <div class="text">Mid Bid</div>
            <input id="midbid" type="checkbox">
            <label for="midbid">
              <div class="btn-cover">

              <span class="btn"></span>

              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 288c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32S224 14.33 224 32v224C224 273.7 238.3 288 256 288zM403.7 66.81c-13.92-10.84-34.03-8.406-44.92 5.5c-10.89 13.94-8.438 34.03 5.484 44.94C407.3 150.9 432 201.5 432 256c0 97.03-78.95 176-176 176S80 353 80 256c0-54.53 24.69-105.1 67.72-138.8c13.92-10.91 16.38-31 5.484-44.94c-10.91-13.91-31-16.34-44.92-5.5C49.64 112.7 16 181.7 16 256c0 132.3 107.7 240 240 240s240-107.7 240-240C496 181.7 462.4 112.7 403.7 66.81z"/></svg>
                
              </div>
            </label>
        </div>
        
        <div>
          <div class="text">Auto Square</div>
            <input id="autosquare" type="checkbox">
            <label for="autosquare">
              <div class="btn-cover">

              <span class="btn"></span>

              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 288c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32S224 14.33 224 32v224C224 273.7 238.3 288 256 288zM403.7 66.81c-13.92-10.84-34.03-8.406-44.92 5.5c-10.89 13.94-8.438 34.03 5.484 44.94C407.3 150.9 432 201.5 432 256c0 97.03-78.95 176-176 176S80 353 80 256c0-54.53 24.69-105.1 67.72-138.8c13.92-10.91 16.38-31 5.484-44.94c-10.91-13.91-31-16.34-44.92-5.5C49.64 112.7 16 181.7 16 256c0 132.3 107.7 240 240 240s240-107.7 240-240C496 181.7 462.4 112.7 403.7 66.81z"/></svg>
                
              </div>
            </label>
        </div>
      </div>
    </div>

    <!-- ------- MASTER BACKDROP ------- -->

    <div
      class="transparent-backdrop"
      v-show="intraday.squarebox || intraday.stoplossbox || intraday.targetbox || longterm.squarebox || longterm.stoplossbox || longterm.targetbox || dashboard.settingsmenu || intraday.feature || longterm.feature || dashboard.mstockdel"
      @click="intraday.squarebox = intraday.stoplossbox = intraday.targetbox = longterm.squarebox = longterm.stoplossbox = longterm.targetbox = dashboard.settingsmenu = intraday.feature = longterm.feature = dashboard.mstockdel = false"
      style="z-index: 1001 !important"
    ></div>
    <div
      v-show="dashboard.stockbox || dashboard.tradebox"
      class="master-backdrop"
      @click="dashboard.tradebox = dashboard.stockbox = false"
    ></div>

    <div
      class="blurred-backdrop"
      v-show="dashboard.logoutbox || dashboard.watchdelbox || dashboard.stockdelbox"
      @click="dashboard.logoutbox = dashboard.watchdelbox =  dashboard.stockdelbox = false"
    ></div>

    <!-- ------------ LOGOUT BOX ------------  -->

    <div class="logout-content" v-show="dashboard.logoutbox">
      <div>Do you want to Logout ?</div>
      <div class="yesno flex justify-center">
        <div class="yes click-active">Yes</div>
        <div class="no click-active" @click="dashboard.logoutbox = false">No</div>
      </div>
    </div>

    <!-- ------------ STOCK DEL BOX ------------  -->

    <div class="watchdel-content" v-show="dashboard.watchdelbox">
      <div>Do you want to delete this Watchlist ?</div>
      <div class="yesno flex justify-center">
        <div class="yes click-active">Yes</div>
        <div class="no click-active" @click="dashboard.watchdelbox = false">No</div>
      </div>
    </div>

    <!-- ------------ STOCK DEL BOX ------------  -->

    <div class="stockdel-content" v-show="dashboard.stockdelbox">
      <div>Do you want to delete this Stock ?</div>
      <div class="yesno flex justify-center">
        <div class="yes click-active">Yes</div>
        <div class="no click-active" @click="dashboard.stockdelbox = false">No</div>
      </div>
    </div>

    <!-- ------------- SETTINGS MENU -------  -->

    <transition name="topright">
      <div class="settings-menu" v-show="dashboard.settingsmenu">
        <div class="menu">
          <div>Live Data</div>
          <div class="status-on">
            <div>On</div>
          </div>
        </div>
        <div class="menu">
          <div>Watch Limit</div>
          <div>5</div>
        </div>
        <div class="menu">
          <div>Stock Limit</div>
          <div>10</div>
        </div>
      </div>
    </transition>

    <div class="main-container">
      <div class="navbar flex justify-between px-3">
        <div class="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="pc h-8 w-8"
            viewBox="0 0 512 512"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="32"
              d="M96 256h320M96 176h320M96 336h320"
            />
          </svg>

          <svg
            @click="dashboard.logoutbox=true"
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 mlogout-svg cursor-pointer hidden mobile"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            data-v-7aef48b4=""
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              data-v-7aef48b4=""
            ></path>

          </svg>
        </div>
        <div class="onyx-name flex items-center">
          Ony<img src="https://i.ibb.co/sRVkLkH/logo2-removebg-preview.png" alt="" height="35" width="35">Trade
        </div>

        <div class="flex">
          <div
            class="username flex items-center cursor-pointer"
            @click="dashboard.settingsmenu = true"
          >
            <span class="flex items-center"><p class="pc">Hi ,</p> Tom</span>
            <img src="https://i.ibb.co/ZxTMM1t/download.jpg" class="h-8 ml-3 rounded-full pc">
            <svg
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 ml-2 cursor-pointer muser-svg hidden mobile"
              viewBox="0 0 1792 1792"
            >
              <path
                d="M1600 1405q0 120-73 189.5t-194 69.5h-874q-121 0-194-69.5t-73-189.5q0-53 3.5-103.5t14-109 26.5-108.5 43-97.5 62-81 85.5-53.5 111.5-20q9 0 42 21.5t74.5 48 108 48 133.5 21.5 133.5-21.5 108-48 74.5-48 42-21.5q61 0 111.5 20t85.5 53.5 62 81 43 97.5 26.5 108.5 14 109 3.5 103.5zm-320-893q0 159-112.5 271.5t-271.5 112.5-271.5-112.5-112.5-271.5 112.5-271.5 271.5-112.5 271.5 112.5 112.5 271.5z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div class="inside-container">
        <div class="sidebar">
          <ul>
            <li
              @click="(mainbar.tabbar = 1), (dashboard.tradebox = false)"
              :class="{'active' : mainbar.tabbar == 1}"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="ionicon"
                viewBox="0 0 512 512"
              >
                <path
                  d="M80 212v236a16 16 0 0016 16h96V328a24 24 0 0124-24h80a24 24 0 0124 24v136h96a16 16 0 0016-16V212"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="32"
                />
                <path
                  d="M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256M400 179V64h-48v69"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="32"
                />
              </svg>

              <span>Watchlist</span>
            </li>

            <li @click="mainbar.tabbar = 2" :class="{'active' : mainbar.tabbar == 2}">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="ionicon"
                viewBox="0 0 512 512"
              >
                <title>Briefcase</title>
                <rect
                  x="32"
                  y="128"
                  width="448"
                  height="320"
                  rx="48"
                  ry="48"
                  fill="none"
                  stroke="currentColor"
                  stroke-linejoin="round"
                  stroke-width="32"
                />
                <path
                  d="M144 128V96a32 32 0 0132-32h160a32 32 0 0132 32v32M480 240H32M320 240v24a8 8 0 01-8 8H200a8 8 0 01-8-8v-24"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="32"
                />
              </svg>
              <span>Intraday</span>
            </li>

            <li @click="mainbar.tabbar = 5" :class="{'active' : mainbar.tabbar == 5}">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="ionicon"
                viewBox="0 0 512 512"
              >
                <path
                  d="M256 160c16-63.16 76.43-95.41 208-96a15.94 15.94 0 0116 16v288a16 16 0 01-16 16c-128 0-177.45 25.81-208 64-30.37-38-80-64-208-64-9.88 0-16-8.05-16-17.93V80a15.94 15.94 0 0116-16c131.57.59 192 32.84 208 96zM256 160v288"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="32"
                />
              </svg>
              <span>Longterm</span>
            </li>

            <li @click="mainbar.tabbar = 3" :class="{'active' : mainbar.tabbar == 3}">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                style="height: 28px; width: 28px"
                class="ionicon"
                viewBox="0 0 512 512"
              >
                <path
                  d="M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64z"
                  fill="none"
                  stroke="currentColor"
                  stroke-miterlimit="10"
                  stroke-width="32"
                />
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="32"
                  d="M256 128v144h96"
                />
              </svg>
              <span>History</span>
            </li>

            <li @click="mainbar.tabbar = 4" :class="{'active' : mainbar.tabbar == 4}">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="ionicon"
                viewBox="0 0 512 512"
              >
                <path
                  d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="32"
                />
                <circle
                  cx="256"
                  cy="256"
                  r="80"
                  fill="none"
                  stroke="currentColor"
                  stroke-miterlimit="10"
                  stroke-width="32"
                />
              </svg>
              <span>Action Watch</span>
            </li>

            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span>Notification</span>
            </li>

            <li @click="dashboard.logoutbox = true">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
              <span>Logout</span>
            </li>
          </ul>
        </div>

        <div class="m-navigation hidden">
          <ul>
            <li @click="mainbar.tabbar = 4" :class="{'active active1' : mainbar.tabbar == 4}">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="ionicon"
                viewBox="0 0 512 512"
              >
                <path
                  d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="32"
                />
                <circle
                  cx="256"
                  cy="256"
                  r="80"
                  fill="none"
                  stroke="currentColor"
                  stroke-miterlimit="10"
                  stroke-width="32"
                />
              </svg>
              <div>
                <span>Action</span>
              </div>
            </li>

            <li @click="mainbar.tabbar = 2 , intraday.chartshow=false , intraday.holdingdetails=false" :class="{'active active2' : mainbar.tabbar == 2}">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="ionicon"
                viewBox="0 0 512 512"
              >
                <title>Briefcase</title>
                <rect
                  x="32"
                  y="128"
                  width="448"
                  height="320"
                  rx="48"
                  ry="48"
                  fill="none"
                  stroke="currentColor"
                  stroke-linejoin="round"
                  stroke-width="32"
                />
                <path
                  d="M144 128V96a32 32 0 0132-32h160a32 32 0 0132 32v32M480 240H32M320 240v24a8 8 0 01-8 8H200a8 8 0 01-8-8v-24"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="32"
                />
              </svg>
              <div>
                <span>Intraday</span>
              </div>
            </li>

            <li
              @click="(mainbar.tabbar = 1), (dashboard.tradebox = false)"
              :class="{'active active3' : mainbar.tabbar == 1}"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="ionicon"
                viewBox="0 0 512 512"
              >
                <path
                  d="M80 212v236a16 16 0 0016 16h96V328a24 24 0 0124-24h80a24 24 0 0124 24v136h96a16 16 0 0016-16V212"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="32"
                />
                <path
                  d="M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256M400 179V64h-48v69"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="32"
                />
              </svg>
              <div>
                <span>Home</span>
              </div>
            </li>

            <li @click="mainbar.tabbar = 5 , longterm.chartshow=false , longterm.holdingdetails=false" :class="{'active active4' : mainbar.tabbar == 5}">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="ionicon"
                viewBox="0 0 512 512"
              >
                <path
                  d="M256 160c16-63.16 76.43-95.41 208-96a15.94 15.94 0 0116 16v288a16 16 0 01-16 16c-128 0-177.45 25.81-208 64-30.37-38-80-64-208-64-9.88 0-16-8.05-16-17.93V80a15.94 15.94 0 0116-16c131.57.59 192 32.84 208 96zM256 160v288"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="32"
                />
              </svg>
              <div>
                <span>Longterm</span>
              </div>
            </li>

            <li @click="mainbar.tabbar = 3" :class="{'active active5' : mainbar.tabbar == 3}">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                style="height: 28px; width: 28px"
                class="ionicon"
                viewBox="0 0 512 512"
              >
                <path
                  d="M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64z"
                  fill="none"
                  stroke="currentColor"
                  stroke-miterlimit="10"
                  stroke-width="32"
                />
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="32"
                  d="M256 128v144h96"
                />
              </svg>
              <div>
                <span>History</span>
              </div>
            </li>
            <div class="indicator"></div>
          </ul>
        </div>

        <div v-show="mainbar.tabbar == 1" class="dashboard">
          <!-- -------------- STOCK BOX --------------  -->

          <transition name="left">
            <div v-show="dashboard.stockbox" class="stock-box">
              <input type="text" placeholder="Search" />

              <div class="stock-box-list custom-scroll blur-effect-down">
                <div class="stock-row">
                  <div>NIFTY21OCTFUT</div>

                  <div class="price blink-green">
                    <span>654.76</span>
                  </div>
                </div>

                <div class="stock-row">
                  <div>NIFTY21OCTFUT</div>

                  <div class="price blink-green">
                    <span>654.76</span>
                  </div>
                </div>

                <div class="stock-row">
                  <div>NIFTY21OCTFUT</div>

                  <div class="price blink-green">
                    <span>654.76</span>
                  </div>
                </div>

                <div class="stock-row">
                  <div>NIFTY21OCTFUT</div>

                  <div class="price blink-green">
                    <span>654.76</span>
                  </div>
                </div>

                <div class="stock-row">
                  <div>NIFTY21OCTFUT</div>

                  <div class="price blink-green">
                    <span>654.76</span>
                  </div>
                </div>

                <div class="stock-row">
                  <div>NIFTY21OCTFUT</div>

                  <div class="price blink-green">
                    <span>654.76</span>
                  </div>
                </div>
                <div class="stock-row">
                  <div>NIFTY21OCTFUT</div>

                  <div class="price blink-green">
                    <span>654.76</span>
                  </div>
                </div>
                <div class="stock-row">
                  <div>NIFTY21OCTFUT</div>

                  <div class="price blink-green">
                    <span>654.76</span>
                  </div>
                </div>
                <div class="stock-row">
                  <div>NIFTY21OCTFUT</div>

                  <div class="price blink-green">
                    <span>654.76</span>
                  </div>
                </div>

                <div class="stock-row">
                  <div>NIFTY21OCTFUT</div>

                  <div class="price blink-green">
                    <span>654.76</span>
                  </div>
                </div>

                <div class="stock-row">
                  <div>NIFTY21OCTFUT</div>

                  <div class="price blink-green">
                    <span>654.76</span>
                  </div>
                </div>
              </div>
            </div>
          </transition>

          <!-- -------------- TRADE BOX --------------  -->
          <transition name="right">
            <div
              v-show="dashboard.tradebox"
              class="trade-box flex flex-col justify-between text-lg"
            >
              <div class="stock-details">
                <div class="stock-name justify-self-start">NIFTY21OCTFUT</div>

                <div class="stock-price justify-self-end">654.45</div>

                <div class="stock-category justify-self-start">MCX</div>

                <div class="change justify-self-end">-230 (2.34%)</div>
              </div>

              <div class="quantity">
                <div class="text">Quantity*</div>
                <input type="tel" maxlength="8" value="0" />
              </div>

              <div class="flex items-center justify-evenly">
                <div class="buy-btn">
                  Buy
                  <div class="hidden loading-cover">
                    <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                  </div>
                </div>
                <div class="sell-btn">
                  Sell
                  <div class="hidden loading-cover">
                    <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                  </div>
                </div>
              </div>

              <div class="flex items-center justify-between">
                <div class="custom-product">
                  <div class="text">Product</div>
                  <div class="relative">
                    <select>
                      <option value="1">Intraday</option>
                      <option value="2">Longterm</option>
                    </select>
                    <div class="select-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M98 190.06l139.78 163.12a24 24 0 0036.44 0L414 190.06c13.34-15.57 2.28-39.62-18.22-39.62h-279.6c-20.5 0-31.56 24.05-18.18 39.62z"/></svg>
                  </div>
                  </div>
                </div>

                <div class="custom-order">
                  <div class="text text-right">Order Type</div>
                  <div class="relative">
                    <select v-model="takeorder.type">
                      <option value="0">Market</option>
                      <option value="1">Limit</option>
                      <option value="2">SL</option>
                      <option value="3">SL-T</option>
                    </select>

                    <div class="select-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M98 190.06l139.78 163.12a24 24 0 0036.44 0L414 190.06c13.34-15.57 2.28-39.62-18.22-39.62h-279.6c-20.5 0-31.56 24.05-18.18 39.62z"/></svg>
                  </div>
                  </div>
                </div>
              </div>

              <div class="order-inputs flex justify-between items-center">
                <div>
                  <input
                    v-model="takeorder.stoploss"
                    class="text-center"
                    type="tel"
                    maxlength="8"
                    placeholder="Stoploss"
                  />
                  <div v-if="!takeorder.stoplossshow" class="blocking-div">
                    Stoploss
                  </div>
                </div>
                <span class="text whitespace-nowrap mx-3 trigger-price"
                  >Trigger Price</span
                >
                <div>
                  <input
                    v-model="takeorder.target"
                    class="text-center"
                    type="tel"
                    maxlength="8"
                    placeholder="Target"
                  />
                  <div v-if="takeorder.type != '3'" class="blocking-div">
                    Target
                  </div>
                </div>
              </div>

              <div class="price">
                <div class="text">Price*</div>
                <div class="relative">
                  <input
                    v-model="takeorder.limit"
                    type="tel"
                    maxlength="8"
                    name="price"
                  />
                  <div v-if="takeorder.type != '1'" class="blocking-div">
                    Price
                  </div>
                </div>
              </div>

              <div class="cancel-btn" @click="dashboard.tradebox = false">Cancel</div>
            </div>
          </transition>

          <div class="watch-main pb-6 relative">
            <div class="flex justify-between items-center watch-text-row">
              <div class="text-2xl text-white watch-text">Watchlists</div>

              <div class="flex items-center">
                

              </div>

              <div class="search-btn" @click="dashboard.stockbox = true">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>

            <div class="watch-cover flex items-center mt-5">
              <transition-group name="watchcover">
                <div class="watch-tabs-cover">
                  <div class="watch-tabs custom-scroll">
                    <transition-group name="watch">
                      <div
                        :class="
                          stockname.name == selectedwatchlist
                            ? 'watchlist active'
                            : 'watchlist'
                        "
                        v-for="stockname in stocklists.value"
                        :key="stockname.name"
                        @click="selectedwatchlist = stockname.name"
                      >
                        {{ stockname.name }}
                      </div>
                    </transition-group>
                  </div>
                </div>

                <button
                  class="watch-btn"
                  @click="createwatchlist"
                  :disabled="stocklists.value.length >= 4"
                >
                  <div>+ Create <span>watchlist</span></div>
                </button>
              </transition-group>
            </div>
          </div>

          <div
            class="watch-status relative flex justify-between items-center py-6"
          >
            <div>
              <div class="current-watchlist relative flex items-center">
                <div class="w-min">
                  <input
                    type="text"
                    :value="renamewatchlist"
                    @input="editwatchlistname"
                    @blur="savewatchlistname"
                    ref="editwatchlistinput"
                  />
                  <div class="span h-0 opacity-0">
                    {{ selectedwatchlist }}
                  </div>
                </div>
                <svg
                  @click="selectinputvalue"
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 ml-2 cursor-pointer active:scale-0.95"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
                  />
                </svg>

                <div
                  v-if="redalert || greenalert"
                  :class="redalert ? 'red-alert' : 'green-alert'"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    class="h-4 w-4"
                  >
                    <path d="M24 4 V28 L6 16 z" />
                  </svg>
                  {{ message }}
                </div>
              </div>
              <div class="watch-count">40 items</div>
              <div class="updated-time">Updated 26/10/2021 at 1:55 PM</div>
            </div>

            <button
              class="watch-delete"
              @click="dashboard.watchdelbox = true"
              :disabled="stocklists.value.length <= 1"
            >
              <span> Delete </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="ionicon h-5 w-5"
                viewBox="0 0 512 512"
              >
                <path
                  d="M112 112l20 320c.95 18.49 14.4 32 32 32h184c17.67 0 30.87-13.51 32-32l20-320"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="32"
                />
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                  stroke-width="32"
                  d="M80 112h352"
                />
                <path
                  d="M192 112V72h0a23.93 23.93 0 0124-24h80a23.93 23.93 0 0124 24h0v40M256 176v224M184 176l8 224M328 176l-8 224"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="32"
                />
              </svg>
            </button>
          </div>

          <div class="stock-list custom-scroll blur-effect-down">
            <table class="w-full">
              <thead>
                <th>
                  <div>
                    <span>Name</span>
                    <div class="up-down-arrow">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4 arrow-up"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4 arrow-down"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </th>

                <th>
                  <div>
                    <span>LTP</span>
                    <div class="up-down-arrow">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4 arrow-up"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4 arrow-down"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </th>

                <th>
                  <div>
                    <span>Change</span>
                    <div class="up-down-arrow">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4 arrow-up"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4 arrow-down"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </th>

                <th>
                  <div>
                    <span>Bid</span>
                    <div class="up-down-arrow">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4 arrow-up"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4 arrow-down"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </th>

                <th>
                  <div>
                    <span>Ask</span>
                    <div class="up-down-arrow">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4 arrow-up"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4 arrow-down"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </th>

                <th>
                  <div>
                    <span>High</span>
                    <div class="up-down-arrow">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4 arrow-up"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4 arrow-down"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </th>

                <th>
                  <div>
                    <span>Low</span>
                    <div class="up-down-arrow">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4 arrow-up"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4 arrow-down"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </th>

                <th></th>
              </thead>
              <tbody class="watch-row watch-row-body">
                <tr class="blink-green">
                  <td class="name flex items-center justify-around">
                    <div></div>

                    <span>NIFTY21OCTFUT</span>

                    <div class="trade-btn" @click="dashboard.tradebox = true">T</div>

                  </td>
                  <td class="price">454.45</td>
                  <td class="change">
                    <span>45.54%</span>
                  </td>
                  <td class="bid">245.41</td>
                  <td class="ask">542.21</td>
                  <td class="high">255.5</td>
                  <td class="low">212.1</td>
                  <td class="delete-stock">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="ionicon h-5 w-5 cursor-pointer"
                      viewBox="0 0 512 512"
                      data-v-7aef48b4=""
                    >
                      <path
                        d="M112 112l20 320c.95 18.49 14.4 32 32 32h184c17.67 0 30.87-13.51 32-32l20-320"
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="32"
                        data-v-7aef48b4=""
                      ></path>
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-miterlimit="10"
                        stroke-width="32"
                        d="M80 112h352"
                        data-v-7aef48b4=""
                      ></path>
                      <path
                        d="M192 112V72h0a23.93 23.93 0 0124-24h80a23.93 23.93 0 0124 24h0v40M256 176v224M184 176l8 224M328 176l-8 224"
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="32"
                        data-v-7aef48b4=""
                      ></path>
                    </svg>
                  </td>
                </tr>
                <tr class="blink-red">
                  <td class="name flex items-center justify-around">
                    <div></div>

                    <span>NIFTY21OCTFUT</span>

                    <div class="trade-btn" @click="dashboard.tradebox = true">T</div>

                  </td>
                  <td class="price">454.45</td>
                  <td class="change">
                    <span>45.54%</span>
                  </td>
                  <td class="bid">245.41</td>
                  <td class="ask">542.21</td>
                  <td class="high">255.5</td>
                  <td class="low">212.1</td>
                  <td class="delete-stock">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="ionicon h-5 w-5 cursor-pointer"
                      viewBox="0 0 512 512"
                      data-v-7aef48b4=""
                    >
                      <path
                        d="M112 112l20 320c.95 18.49 14.4 32 32 32h184c17.67 0 30.87-13.51 32-32l20-320"
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="32"
                        data-v-7aef48b4=""
                      ></path>
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-miterlimit="10"
                        stroke-width="32"
                        d="M80 112h352"
                        data-v-7aef48b4=""
                      ></path>
                      <path
                        d="M192 112V72h0a23.93 23.93 0 0124-24h80a23.93 23.93 0 0124 24h0v40M256 176v224M184 176l8 224M328 176l-8 224"
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="32"
                        data-v-7aef48b4=""
                      ></path>
                    </svg>
                  </td>
                </tr>
               
              </tbody>
            </table>
          </div>

          <div class="m-stock-search" @click="dashboard.stockbox = true">Add Stocks</div>

          <!-- ---------- MOBILE STOCK LIST ----------  -->

          <div class="m-stock-list">
            <div class="m-stock" v-touch:hold="mobilestockdel" :class="{'m-stock-delete' : dashboard.mstockdel}">
              <div @click="dashboard.tradebox = true" >
                <div class="m-name">NIFTYFIFTY50</div>
                <div class="m-price justify-self-end">784.77</div>
                <div class="m-type">MCX</div>
                <div class="m-change justify-self-end">-155 (1.55%)</div>
              </div>

              <div class="m-delete-btn">Delete</div>
            </div>

            <div class="m-stock">
              <div @click="dashboard.tradebox = true">
                <div class="m-name">NIFTYFIFTY50</div>
                <div class="m-price justify-self-end">784.77</div>
                <div class="m-type">MCX</div>
                <div class="m-change justify-self-end">-155 (1.55%)</div>
              </div>
            </div>

            <div class="m-stock">
              <div @click="dashboard.tradebox = true">
                <div class="m-name">NIFTYFIFTY50</div>
                <div class="m-price justify-self-end">784.77</div>
                <div class="m-type">MCX</div>
                <div class="m-change justify-self-end">-155 (1.55%)</div>
              </div>
            </div>

            <div class="m-stock">
              <div @click="dashboard.tradebox = true">
                <div class="m-name">NIFTYFIFTY50</div>
                <div class="m-price justify-self-end">784.77</div>
                <div class="m-type">MCX</div>
                <div class="m-change justify-self-end">-155 (1.55%)</div>
              </div>
            </div>
          </div>
        </div>

        <div v-show="mainbar.tabbar == 2" class="intraday">
          <!-- ------- INTRADAY SQUARE BOX ------ -->
          <transition name="bottom">
            <div class="square-box" v-show="intraday.squarebox">
              <div class="text-red stock">NIFTY21OCTFUT</div>

              <input type="tel" placeholder="Enter Quantity" maxlength="8" />
              <div class="square-btn" @click="intraday.feature = false">
                Square
              </div>
            </div>
          </transition>

          <!-- ------- INTRADAY STOPLOSS BOX ------ -->
          <transition name="bottom">
            <div class="stoploss-box" v-show="intraday.stoplossbox">
              <div class="text-green stock">NIFTY21OCTFUT</div>

              <input type="tel" placeholder="Enter Quantity" maxlength="8" />
              <input type="tel" placeholder="Enter Price" maxlength="8" />
              <div class="stoploss-btn" @click="intraday.feature = false">Stoploss</div>
            </div>
          </transition>

          <!-- ------- INTRADAY TARGET BOX ------ -->
          <transition name="bottom">
            <div class="target-box" v-show="intraday.targetbox">
              <div class="text-red stock">NIFTY21OCTFUT</div>

              <input type="tel" placeholder="Enter Quantity" maxlength="8" />
              <input type="tel" placeholder="Enter Price" maxlength="8" />
              <div class="target-btn" @click="intraday.feature = false">Target</div>
            </div>
          </transition>

          <!-- ------- INTRADAY CHART  -------- -->
          
          <input id="intraday-fullchart" type="checkbox" class="hidden">
          <div class="chart-box-main" :class="{'details' : intraday.chartshow}">

            <label for="intraday-fullchart" class="fullscreen-btn hidden"> 
              <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M336 448h56a56 56 0 0056-56v-56M448 176v-56a56 56 0 00-56-56h-56M176 448h-56a56 56 0 01-56-56v-56M64 176v-56a56 56 0 0156-56h56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>
            </label>
            
            <div
              class="chart-box flex custom-scroll"
              
            >
              <h2 class="chart-text sticky top-8">
                <span>Stocks</span>
              </h2>
              
                <div class="card" @click="intraday.chartshow = !intraday.chartshow">
                  <div class="photo"></div>

                  <div class="chart mx-4">
                    <div class="bar bar-green" style="height: 50%">
                      <div class="stocknumber">20,000</div>
                      
                      <div class="stockname">
                        <span>NIFTY21OCTFUT</span>
                      </div>
                      <!-- <p>NIFTY21OCTFUT</p> -->
                    </div>
                    <div class="bar bar-red" style="height: 90%">
                      <div class="stocknumber">23,545</div>
                      
                      <div class="stockname">
                        <span>NIFTY21OCTFUT</span>
                      </div>

                    </div>
                    <div class="bar bar-green" style="height: 50%">
                       <div class="stocknumber">23,545</div>
                      
                      <div class="stockname">
                        <span>NIFTY21OCTFUT</span>
                      </div>
                    </div>
                    <div class="bar bar-red" style="height: 90%">
                       <div class="stocknumber">23,545</div>
                      
                      <div class="stockname">
                        <span>NIFTY21OCTFUT</span>
                      </div>
                    </div>
                    <div class="bar bar-green" style="height: 40%">
                       <div class="stocknumber">23,545</div>
                      
                      <div class="stockname">
                        <span>NIFTY21OCTFUT</span>
                      </div>
                    </div>
                    <div class="bar bar-green" style="height: 40%">
                       <div class="stocknumber">23,545</div>
                      
                      <div class="stockname">
                        <span>NIFTY21OCTFUT</span>
                      </div>
                    </div>
                    <div class="bar bar-green" style="height: 40%">
                       <div class="stocknumber">23,545</div>
                      
                      <div class="stockname">
                        <span>NIFTY21OCTFUT</span>
                      </div>
                    </div>
                    <div class="bar bar-red" style="height: 40%">
                       <div class="stocknumber">23,545</div>
                      
                      <div class="stockname">
                        <span>NIFTY21OCTFUT</span>
                      </div>
                    </div>
                    <div class="bar bar-green" style="height: 40%">
                       <div class="stocknumber">23,545</div>
                      
                      <div class="stockname">
                        <span>NIFTY21OCTFUT</span>
                      </div>
                    </div>
                    <div class="bar bar-red" style="height: 40%">
                       <div class="stocknumber">23,545</div>
                      
                      <div class="stockname">
                        <span>NIFTY21OCTFUT</span>
                      </div>
                    </div>
                    <div class="bar bar-green" style="height: 40%">
                       <div class="stocknumber">23,545</div>
                      
                      <div class="stockname">
                        <span>NIFTY21OCTFUT</span>
                      </div>
                    </div>
                  </div>
                </div>
             

              <h3 class="chart-pnl sticky bottom-8">
                <span>1,45,587</span>
              </h3>
            </div>
          </div>

          <!-- --------- INTRADAY HOLDINGS -------  -->

          <div class="holdings-table custom-scroll blur-effect-down">
            <div class="heading">
              <div class="hname">Name</div>
              <div class="hqty">Q</div>
              <div class="hpnl">P&L</div>
              <div class="hprice">Price</div>
              <div class="hsp">SP</div>
              <div class="hltp">LTP</div>
              <div class="htime">Time</div>
              <div class="hdots"></div>
            </div>

            <div v-touch:hold="mintradayfeature" class="row" @click="intraday.holdingdetails=!intraday.holdingdetails" :class="{'holding-details' : intraday.holdingdetails}">

              <div class="name">
                <span class="buy">  NIFTY21OCTFUT <p class="m-qty hidden">x 500</p></span>
              </div>
              <div class="qty">1000</div>
              <div class="pnl text-green">21184.54</div>
              <div class="price">
                <div class="text hidden">Price</div>
                <div>5414.53</div>
              </div>
              <div class="sp">
                <div class="text hidden">Settled Price</div>
                <div>5414.53</div>
              </div>
              <div class="ltp">
                <div class="text hidden">LTP</div>
                <div>5414.53</div>
              </div>

              <div class="date hidden">
                <span>14 JAN</span>
              </div>
              <div class="time">
                <span>06.20.55 PM</span>
              </div>

              <div class="pnl-svg hidden">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" class="text-green h-6" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M352 144h112v112"/><path d="M48 368l121.37-121.37a32 32 0 0145.26 0l50.74 50.74a32 32 0 0045.26 0L448 160" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg></span>  
              </div>

              <div
                class="more relative flex items-center cursor-pointer"
                @click="intraday.feature = !intraday.feature"
              >
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>

                
              </div>

              <!-- -------- HOLDINGS FEATURE ------- -->

                <transition name="hfeature">
                  <div class="holdings-feature" v-show="intraday.feature">
                    <div class="square-btn">
                      <span @click="(intraday.squarebox = true) , (intraday.feature = false)">
                        Square
                      </span>
                      <div class="hidden loading-cover">
                        <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                      </div>
                    </div>

                    <div class="stoploss-btn">
                      <span @click="(intraday.stoplossbox = true) , (intraday.feature = false)">
                        Stoploss
                      </span>
                      <div class="hidden loading-cover">
                        <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                      </div>
                    </div>

                    <div class="target-btn">
                      <span @click="(intraday.targetbox = true) , (intraday.feature = false)">
                        Target 
                      </span>
                      <div class="hidden loading-cover">
                        <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                      </div>
                    </div>
                  </div>
                </transition>
            </div>

          </div>

        </div>

        <div v-show="mainbar.tabbar == 5" class="longterm">
          <transition name="holdingsdata">
            <div class="holdings-data" v-show="!longterm.chartshow">
              <div class="chains flex justify-between">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <title />
                  <g data-name="Layer 2" id="Layer_2">
                    <path
                      d="M18.89,3.69a3.82,3.82,0,0,0-4.6.6l-2,2a3.82,3.82,0,0,0-.6,4.6l-.8.8a3.82,3.82,0,0,0-4.6.6l-2,2a3.82,3.82,0,0,0-.6,4.6l-2.4,2.4,1.41,1.41,2.4-2.4a3.79,3.79,0,0,0,4.6-.6l2-2a3.82,3.82,0,0,0,.6-4.6l.8-.8a3.79,3.79,0,0,0,4.6-.6l2-2a3.82,3.82,0,0,0,.6-4.6l2.4-2.4L21.29,1.29Zm-8.6,12.6-2,2a1.83,1.83,0,0,1-1.67.49l1.08-1.08L6.29,16.29,5.21,17.37a1.83,1.83,0,0,1,.49-1.67l2-2a1.81,1.81,0,0,1,1.67-.49L8.29,14.29l1.41,1.41,1.08-1.08A1.83,1.83,0,0,1,10.29,16.29Zm8-8-2,2a1.83,1.83,0,0,1-1.67.49l1.08-1.08L14.29,8.29,13.21,9.37a1.83,1.83,0,0,1,.49-1.67l2-2a1.81,1.81,0,0,1,1.67-.49L16.29,6.29l1.41,1.41,1.08-1.08A1.83,1.83,0,0,1,18.29,8.29Z"
                    />
                  </g>
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <title />
                  <g data-name="Layer 2" id="Layer_2">
                    <path
                      d="M18.89,3.69a3.82,3.82,0,0,0-4.6.6l-2,2a3.82,3.82,0,0,0-.6,4.6l-.8.8a3.82,3.82,0,0,0-4.6.6l-2,2a3.82,3.82,0,0,0-.6,4.6l-2.4,2.4,1.41,1.41,2.4-2.4a3.79,3.79,0,0,0,4.6-.6l2-2a3.82,3.82,0,0,0,.6-4.6l.8-.8a3.79,3.79,0,0,0,4.6-.6l2-2a3.82,3.82,0,0,0,.6-4.6l2.4-2.4L21.29,1.29Zm-8.6,12.6-2,2a1.83,1.83,0,0,1-1.67.49l1.08-1.08L6.29,16.29,5.21,17.37a1.83,1.83,0,0,1,.49-1.67l2-2a1.81,1.81,0,0,1,1.67-.49L8.29,14.29l1.41,1.41,1.08-1.08A1.83,1.83,0,0,1,10.29,16.29Zm8-8-2,2a1.83,1.83,0,0,1-1.67.49l1.08-1.08L14.29,8.29,13.21,9.37a1.83,1.83,0,0,1,.49-1.67l2-2a1.81,1.81,0,0,1,1.67-.49L16.29,6.29l1.41,1.41,1.08-1.08A1.83,1.83,0,0,1,18.29,8.29Z"
                    />
                  </g>
                </svg>
              </div>

              <div class="grid grid-cols-4 text-center h-full items-center">
                <div>
                  <div class="text">Margin</div>
                  <div>5248.54</div>
                </div>
                <div>
                  <div class="text">Settled</div>
                  <div>5248.54</div>
                </div>
                <div>
                  <div class="text">P & L</div>
                  <div>5248.54</div>
                </div>
                <div>
                  <div class="text">Total</div>
                  <div>5248.54</div>
                </div>
              </div>
            </div>
          </transition>

          <!-- ------- LONGTERM SQUARE BOX ------ -->
          <transition name="bottom">
            <div class="square-box" v-show="longterm.squarebox">
              <div class="text-red stock">NIFTY21OCTFUT</div>

              <input type="tel" placeholder="Enter Quantity" maxlength="8" />
              <div class="square-btn" @click="longterm.feature = false">Square</div>
            </div>
          </transition>

          <!-- ------- LONGTERM STOPLOSS BOX ------ -->
          <transition name="bottom">
            <div class="stoploss-box" v-show="longterm.stoplossbox">
              <div class="text-green stock">NIFTY21OCTFUT</div>

              <input type="tel" placeholder="Enter Quantity" maxlength="8" />
              <input type="tel" placeholder="Enter Price" maxlength="8" />
              <div class="stoploss-btn" @click="longterm.feature = false">Stoploss</div>
            </div>
          </transition>

          <!-- ------- LONGTERM TARGET BOX ------ -->
          <transition name="bottom">
            <div class="target-box" v-show="longterm.targetbox">
              <div class="text-red stock">NIFTY21OCTFUT</div>

              <input type="tel" placeholder="Enter Quantity" maxlength="8" />
              <input type="tel" placeholder="Enter Price" maxlength="8" />
              <div class="target-btn" @click="longterm.feature = false">Target</div>
            </div>
          </transition>

          <!-- ------- LONGTERM CHART  -------- -->

          <input id="longterm-fullchart" type="checkbox" class="hidden">
          <div class="chart-box-main" :class="{'details' : longterm.chartshow} ">

            <label for="longterm-fullchart" class="fullscreen-btn hidden"> 
              <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M336 448h56a56 56 0 0056-56v-56M448 176v-56a56 56 0 00-56-56h-56M176 448h-56a56 56 0 01-56-56v-56M64 176v-56a56 56 0 0156-56h56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>
            </label>

            <div
              class="chart-box flex custom-scroll"
              
            >
              <h2 class="chart-text sticky top-8">
                <span>Stocks</span>
              </h2>
              
                <div class="card" @click="longterm.chartshow = !longterm.chartshow">
                  <div class="photo"></div>

                  <div class="chart mx-4">

                    <div class="bar bar-green" style="height: 50%">
                      <div class="stocknumber">20,000</div>
                      
                      <div class="stockname">
                        <span>NIFTY21OCTFUT</span>
                      </div>
                    </div>

                    <div class="bar bar-red" style="height: 90%">
                      <div class="stocknumber">23,545</div>
                      
                      <div class="stockname">
                        <span>NIFTY21OCTFUT</span>
                      </div>

                    </div>

                    <div class="bar bar-green" style="height: 50%">
                       <div class="stocknumber">23,545</div>
                      
                      <div class="stockname">
                        <span>NIFTY21OCTFUT</span>
                      </div>
                    </div>

                    <div class="bar bar-red" style="height: 90%">
                       <div class="stocknumber">23,545</div>
                      
                      <div class="stockname">
                        <span>NIFTY21OCTFUT</span>
                      </div>
                    </div>
                    
                  </div>
                </div>
             

              <h3 class="chart-pnl sticky bottom-8">
                <span>1,45,587</span>
              </h3>
            </div>
          </div>

          <!-- --------- LONGTERM HOLDINGS -------  -->

          <div class="holdings-table custom-scroll blur-effect-down">
            <div class="heading">
              <div class="hname">Name</div>
              <div class="hqty">Q</div>
              <div class="hpnl">P&L</div>
              <div class="hprice">Price</div>
              <div class="hsp">SP</div>
              <div class="hltp">LTP</div>
              <div class="htime">Time</div>
              <div class="hdots"></div>
            </div>

            <div v-touch:hold="mlongtermfeature" class="row" @click="longterm.holdingdetails=!longterm.holdingdetails" :class="{'holding-details' : longterm.holdingdetails}">

              <div class="name">
                <span class="sell"><span class="stockindex">#1 -</span> NIFTY50FUT <p class="m-qty hidden">x 500</p></span>
              </div>
              <div class="qty">1000</div>
              <div class="pnl text-red">21184.54</div>
              <div class="price">
                <div class="text hidden">Price</div>
                <div>5414.53</div>
              </div>
              <div class="sp">
                <div class="text hidden">Settled Price</div>
                <div>5414.53</div>
              </div>
              <div class="ltp">
                <div class="text hidden">LTP</div>
                <div>5414.53</div>
              </div>

              <div class="date hidden">
                <span>14 JAN</span>
              </div>
              <div class="time">
                <span>06.20.55 PM</span>
              </div>

              <div class="pnl-svg hidden">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" class="text-red h-6" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M352 144h112v112"/><path d="M48 368l121.37-121.37a32 32 0 0145.26 0l50.74 50.74a32 32 0 0045.26 0L448 160" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg></span>  
              </div>

              <div
                class="more relative flex items-center cursor-pointer"
                @click="longterm.feature = !longterm.feature"
              >
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>

              </div>

              <!-- -------- HOLDINGS FEATURE ------- -->

              <transition name="hfeature">
                <div class="holdings-feature" v-show="longterm.feature">
                  <div class="square-btn">
                    <span @click="(longterm.squarebox = true) , (longterm.feature = false)">
                      Square
                    </span>
                    <div class="hidden loading-cover">
                      <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                    </div>
                  </div>

                  <div class="stoploss-btn">
                    <span @click="(longterm.stoplossbox = true) , (longterm.feature = false)">
                      Stoploss
                    </span>
                    <div class="hidden loading-cover">
                      <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                    </div>
                  </div>
                  
                  <div class="target-btn">
                    <span @click="(longterm.targetbox) , (longterm.feature = false)">
                      Target 
                    </span>
                    <div class="hidden loading-cover">
                      <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                    </div>
                  </div>
                </div>
              </transition>
              
            </div>

          </div>
        </div>

        <div v-show="mainbar.tabbar == 3" class="history">
          <ul>
            <li @click="mainbar.orderbar = 1" :class="{'active' : mainbar.orderbar == 1}">Pending</li>

            <li @click="mainbar.orderbar = 2" :class="{'active' : mainbar.orderbar == 2}"> Executed</li>

            <li @click="mainbar.orderbar = 3" :class="{'active' : mainbar.orderbar == 3}">Cancelled</li>
          </ul>

          <!-- ---------------- PENDING HISTORY ----------------  -->

          <div v-show="mainbar.orderbar == 1" class="pending-history orders-history">
            <div v-show="false" class="no-orders">
              <svg xmlns="http://www.w3.org/2000/svg" height="100px" viewBox="0 0 1792 1792" width="100px"><path d="M1703 478q40 57 18 129l-275 906q-19 64-76.5 107.5t-122.5 43.5h-923q-77 0-148.5-53.5t-99.5-131.5q-24-67-2-127 0-4 3-27t4-37q1-8-3-21.5t-3-19.5q2-11 8-21t16.5-23.5 16.5-23.5q23-38 45-91.5t30-91.5q3-10 .5-30t-.5-28q3-11 17-28t17-23q21-36 42-92t25-90q1-9-2.5-32t.5-28q4-13 22-30.5t22-22.5q19-26 42.5-84.5t27.5-96.5q1-8-3-25.5t-2-26.5q2-8 9-18t18-23 17-21q8-12 16.5-30.5t15-35 16-36 19.5-32 26.5-23.5 36-11.5 47.5 5.5l-1 3q38-9 51-9h761q74 0 114 56t18 130l-274 906q-36 119-71.5 153.5t-128.5 34.5h-869q-27 0-38 15-11 16-1 43 24 70 144 70h923q29 0 56-15.5t35-41.5l300-987q7-22 5-57 38 15 59 43zm-1064 2q-4 13 2 22.5t20 9.5h608q13 0 25.5-9.5t16.5-22.5l21-64q4-13-2-22.5t-20-9.5h-608q-13 0-25.5 9.5t-16.5 22.5zm-83 256q-4 13 2 22.5t20 9.5h608q13 0 25.5-9.5t16.5-22.5l21-64q4-13-2-22.5t-20-9.5h-608q-13 0-25.5 9.5t-16.5 22.5z"/></svg>

              <div class="text">So Far No Pending Orders For Today</div>
              <div class="view-history">View History</div>
            </div>

            <table class="w-full">
              <thead>
                <th></th>
                <th>Name</th>
                <th>Qty</th>
                <th>Price</th>
                <th class="pc">Status</th>
                <th class="pc">Time</th>
                <th class="pc"></th>
              </thead>

              <tbody>
                <tr class="sell-position">
                  <td>
                    <div class="sell-circle"></div>
                  </td>
                  <td class="name"> 
                    <div>NIFTY21OCTFUT</div>
                    <div class="m-time">06:00:55 PM</div>
                    <span class="market-tag"></span>
                  </td>
                  <td class="qty">
                    <div class="edit-qty relative w-min m-auto">
              
                      <input @blur="history.confirmqty = true" v-show="!history.confirmqty" class="green-border" type="tel" maxlength="8" value="500">

                      <!--  DUMMY DIV  -->
                      <div class="h-0 opacity-0">
                        500
                      </div>
                        


                      <div v-show="history.confirmqty">
                        
                        <div class="confirm-btn-cover">
                          <div class="confirm-btn2" @click="history.confirmqty = false">
                          Confirm
                            
                          </div>
                        </div>

                        <div class="cancel-btn-cover">
                          <div class="cancel-btn2" @click="history.confirmqty = false">
                          Cancel
                          </div>
                        </div>
                      </div>

                    </div>
                  </td>
                  <!-- ----- price ----  -->
                  <td>
                    <div class="edit-price relative w-min m-auto">

                      <input @blur="history.confirmprice = true" v-show="!history.confirmprice" class="green-border" type="tel" maxlength="8" value="454.45">

                      <!--  DUMMY DIV  -->
                      <div class="h-0 opacity-0">
                        454.45
                      </div>

                      <div v-show="history.confirmprice">
                        
                        <div class="confirm-btn-cover">
                          <div class="confirm-btn2" @click="history.confirmprice = false">
                          Confirm
                            
                          </div>
                        </div>

                        <div class="cancel-btn-cover">
                          <div class="cancel-btn2" @click="history.confirmprice = false">
                          Cancel
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="status pc">
                    <div class="limit-tag"></div>
                  </td>
                  <td class="time pc">06:00:55 PM</td>

                  <!-- PC DELETE BUTTON -->
                  <td class="pc">
                    <svg xmlns="http://www.w3.org/2000/svg" class="m-auto h-5 w-5 cursor-pointer" viewBox="0 0 512 512" data-v-7aef48b4=""><path d="M112 112l20 320c.95 18.49 14.4 32 32 32h184c17.67 0 30.87-13.51 32-32l20-320" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" data-v-7aef48b4=""></path><path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M80 112h352" data-v-7aef48b4=""></path><path d="M192 112V72h0a23.93 23.93 0 0124-24h80a23.93 23.93 0 0124 24h0v40M256 176v224M184 176l8 224M328 176l-8 224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path></svg>
                  </td>
                </tr>

                
              </tbody>
            </table>  
          </div>

          <!-- ---------------- EXECUTED HISTORY ----------------  -->

          <div v-show="mainbar.orderbar == 2" class="history-table custom-scroll blur-effect-down">
            <table class="w-full">
              <thead>
                <th class="w-4"></th>
                <th class="hname">
                  <select v-model="historyselection.type">
                    <option value="0">Intraday</option>
                    <option value="1">Longterm</option>
                  </select>
                  <div class="select-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M98 190.06l139.78 163.12a24 24 0 0036.44 0L414 190.06c13.34-15.57 2.28-39.62-18.22-39.62h-279.6c-20.5 0-31.56 24.05-18.18 39.62z"/></svg>
                  </div>
                </th>
                <th class="hqty pc">Qty</th>
                <th class="hprice pc">Price</th>
                <th class="hstatus">Status</th>
                <th class="hdate pc">Date</th>
                <th class="htime">Time</th>
              </thead>

              <!-- -------- INTRADAY HISTORY ---------  -->

              <tbody v-if="!historyselection.longtermshow">
                <tr>
                  <td>
                    <div class="buy-circle"></div>
                  </td>
                  <td class="name">
                    <div>NIFTY21OCTFUT</div>
                    <div class="hidden pricexqty">145.49  x  400</div>
                  </td>
                  <td class="qty pc">500</td>
                  <td class="price pc">154.52</td>
                  <td class="status">
                    <div class="market-tag"></div>
                  </td>
                  <td class="date pc">14 JAN</td>
                  <td class="time">
                    <div class="hidden">14 JAN</div>
                    <div class="mobile-time">3:10:45 PM</div>
                  </td>
                </tr>
              </tbody>

              <!-- -------- LONGTERM HISTORY ---------  -->

              <tbody v-if="historyselection.longtermshow">
                <tr>
                  <td>
                    <div class="buy-circle"></div>
                  </td>
                  <td class="name">
                    <div>NIFTY21O</div>
                    <div class="hidden pricexqty">145.49  x  400</div>
                  </td>
                  <td class="qty pc">500</td>
                  <td class="price pc">154.52</td>
                  <td class="status">
                    <div class="market-tag"></div>
                  </td>
                  <td class="date pc">14 JAN</td>
                  <td class="time">
                    <div class="hidden">14 JAN</div>
                    <div class="mobile-time">3:10:45 PM</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- ---------------- CANCELLED HISTORY ----------------  -->

          <div v-show="mainbar.orderbar == 3" class="cancelled-history orders-history">
            <div v-show="false" class="no-orders">
              <svg xmlns="http://www.w3.org/2000/svg" height="100px" viewBox="0 0 1792 1792" width="100px"><path d="M1703 478q40 57 18 129l-275 906q-19 64-76.5 107.5t-122.5 43.5h-923q-77 0-148.5-53.5t-99.5-131.5q-24-67-2-127 0-4 3-27t4-37q1-8-3-21.5t-3-19.5q2-11 8-21t16.5-23.5 16.5-23.5q23-38 45-91.5t30-91.5q3-10 .5-30t-.5-28q3-11 17-28t17-23q21-36 42-92t25-90q1-9-2.5-32t.5-28q4-13 22-30.5t22-22.5q19-26 42.5-84.5t27.5-96.5q1-8-3-25.5t-2-26.5q2-8 9-18t18-23 17-21q8-12 16.5-30.5t15-35 16-36 19.5-32 26.5-23.5 36-11.5 47.5 5.5l-1 3q38-9 51-9h761q74 0 114 56t18 130l-274 906q-36 119-71.5 153.5t-128.5 34.5h-869q-27 0-38 15-11 16-1 43 24 70 144 70h923q29 0 56-15.5t35-41.5l300-987q7-22 5-57 38 15 59 43zm-1064 2q-4 13 2 22.5t20 9.5h608q13 0 25.5-9.5t16.5-22.5l21-64q4-13-2-22.5t-20-9.5h-608q-13 0-25.5 9.5t-16.5 22.5zm-83 256q-4 13 2 22.5t20 9.5h608q13 0 25.5-9.5t16.5-22.5l21-64q4-13-2-22.5t-20-9.5h-608q-13 0-25.5 9.5t-16.5 22.5z"/></svg>

              <div class="text">So Far No Cancelled Orders For Today</div>
              <div class="view-history">View History</div>
            </div>

            <table class="w-full">
              <thead>
                <th></th>
                <th>Name</th>
                <th class="hqty pc">Qty</th>
                <th class="hprice pc">Price</th>
                <th class="hstatus">Status</th>
                <th class="h-time">Time</th>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div class="buy-circle"></div>
                  </td>
                  <td class="name">
                    <div>NIFTY50OCTFUT</div>
                    <div class="hidden pricexqty">145.49  x  400</div>
                  </td>
                  <td class="qty pc">600</td>
                  <td class="price pc">220.45</td>
                  <td class="status">
                    <div class="market-tag"></div>
                  </td>
                  <td class="time">
                    <div class="hidden">14 JAN</div>
                    <div class="mobile-time">
                      3:10:45 PM
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div v-show="mainbar.tabbar == 4" class="action-watch">
          <div class="action-cover custom-scroll">
            <div class="green-action action-card">
              <div class="action-content">
                <div class="text">
                  <div class="stock">NIFTY21OCTFUT</div>
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M414 321.94L274.22 158.82a24 24 0 00-36.44 0L98 321.94c-13.34 15.57-2.28 39.62 18.22 39.62h279.6c20.5 0 31.56-24.05 18.18-39.62z"/></svg>

                    <span class="price">2451.50</span>

                    <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M414 321.94L274.22 158.82a24 24 0 00-36.44 0L98 321.94c-13.34 15.57-2.28 39.62 18.22 39.62h279.6c20.5 0 31.56-24.05 18.18-39.62z"/></svg>
                  </div>

                  <div>11:45 PM</div>
                </div>
              </div>
            </div>

            <div class="action-card red-action">
              <div class="action-content">
                <div class="text">
                  <div class="stock">NIFTY21OCTFUT</div>
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M414 321.94L274.22 158.82a24 24 0 00-36.44 0L98 321.94c-13.34 15.57-2.28 39.62 18.22 39.62h279.6c20.5 0 31.56-24.05 18.18-39.62z"/></svg>

                    <span class="price">2451.50</span>

                    <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M414 321.94L274.22 158.82a24 24 0 00-36.44 0L98 321.94c-13.34 15.57-2.28 39.62 18.22 39.62h279.6c20.5 0 31.56-24.05 18.18-39.62z"/></svg>
                  </div>

                  <div>11:45 PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <notifications class="notification" position="bottom right" />
  </body>
</template>

<script>
import { notify } from "@kyvg/vue3-notification";
import { ref, reactive, onMounted, computed } from "vue";
export default {
  setup() {
    const mainbar = reactive({
      tabbar : 1,
      orderbar : 1
    });
    const dashboard = reactive({
      tradebox : false,
      stockbox : false,
      logoutbox : false,
      watchdelbox : false,
      stockdelbox : false,
      settingsmenu : false,
      mstockdel : false,
    });
    const history = reactive({
      confirmqty : false,
      confirmprice : false,
    });
    const intraday = reactive({
      squarebox : false,
      stoplossbox : false,
      targetbox : false,
      chartshow : false,
      holdingdetails : false,
      feature : false,
    });
    const longterm = reactive({
      squarebox : false,
      stoplossbox : false,
      targetbox : false,
      chartshow : false,
      holdingdetails : false,
      feature : false,
    });
    const editwatchlistinput = ref(null);
    const redalert = ref(false);
    const message = ref("Welcome To Onyx");
    const greenalert = ref(true);
    const historyselection = reactive({
      type: "0",
      longtermshow: computed(
        () => historyselection.type == "1"
      ),

    });
    const takeorder = reactive({
      type: "0",
      limit: 0,
      target: 0,
      stoploss: 0,
      stoplossshow: computed(
        () => takeorder.type == "2" || takeorder.type == "3"
      ),
    });
    // STOPLOSS COMPUTED
    const stocklists = reactive({
      value: [{ name: "My Stock", value: [] }],
    });
    const selectedwatchlist = ref("My Stock");
    const renamewatchlist = ref(selectedwatchlist.value);
    const noti = () => {
      notify({
        // (optional)
        // Name of the notification holder
        // group: 'foo',

        // (optional)
        // Title (will be wrapped in div.notification-title)
        // title: "Watchlist Renamed Successfully",

        // Content (will be wrapped in div.notification-content)
        text: "Watchlist Renamed Successfully",

        // (optional)
        // Class that will be assigned to the notification
        type: "red",
        position: "bottom",
        // (optional, override)
        // Time (in ms) to keep the notification on screen
        duration: 1000000,

        // (optional, override)
        // Time (in ms) to show / hide notifications
        // speed: 1000

        // (optional)
        // Data object that can be used in your template
      });
    };
    // Hold Mobile Stock Delete Box 
    const mobilestockdel = () => {
      dashboard.mstockdel = !dashboard.mstockdel;
    } ;

    // Hold Mobile Intraday Sq/sl/target 
    const mintradayfeature = () => {
      intraday.feature = !intraday.feature;
    };

    // Hold Mobile LONGTERM Sq/sl/target 
    const mlongtermfeature = () => {
      longterm.feature = !longterm.feature;
    };
    // Input Selector
    const selectinputvalue = () => {
      console.log(editwatchlistinput.value);
      editwatchlistinput.value.focus();
    };

    // Edit Function
    const editwatchlistname = () => {
      renamewatchlist.value = editwatchlistinput.value.value;
      if (editwatchlistinput.value.value.length < 3) {
        redalert.value = true;
        message.value = "Name Should Not Be Less Than 3";
      } else if (renamewatchlist.value.length > 12) {
        redalert.value = true;
        message.value = "Name Can Not Be More Than 11";
      } else {
        redalert.value = false;
      }
    };
    // Save Watchlist Name
    const savewatchlistname = () => {
      if (redalert.value) {
        redalert.value = false;
        renamewatchlist.value = selectedwatchlist.value;
      } else if (renamewatchlist.value != selectedwatchlist.value) {
        // Changing Position Of Edit Cursor To Last
        editwatchlistinput.value.selectionStart = renamewatchlist.value.length;
        stocklists.value[
          stocklists.value.findIndex((a) => a.name == selectedwatchlist.value)
        ].name = renamewatchlist.value;
        selectedwatchlist.value = renamewatchlist.value;
      }
    };
    // Create Watchlist
    const createwatchlist = () => {
      const stockwatchlistnames = stocklists.value.map((x) => x.name);
      let newwatchlistname = stockwatchlistnames.length;
      while (stockwatchlistnames.includes("WatchList#" + newwatchlistname)) {
        newwatchlistname++;
      }
      stocklists.value.push({
        name: "WatchList#" + newwatchlistname,
        value: [],
      });
    };
    // OnMounted
    onMounted(() => {
      setTimeout(() => {
        greenalert.value = false;
        console.log("Working");
      }, 3000);
    });
    // expose to template
    return {
      noti,
      mainbar,
      editwatchlistname,
      editwatchlistinput,
      selectinputvalue,
      stocklists,
      selectedwatchlist,
      redalert,
      greenalert,
      renamewatchlist,
      message,
      savewatchlistname,
      takeorder,
      createwatchlist,
      historyselection,
      history,
      intraday,
      longterm,
      dashboard,
      mobilestockdel,
      mintradayfeature,
      mlongtermfeature
    };
  },
};
</script>

<style scoped>
@import "../assets/graph.css";

body {
  font-family: "Lato", sans-serif;
  color: white;
}
input:focus::placeholder {
  color: transparent !important;
}
.main-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: var(--black1);
}
.onyx-name {
  font-size: 18px;
  font-weight: 600;
}
.navbar {
  height: 45px;
  width: 100%;
}

.sidebar {
  color: white;
  padding: 0 9px;
}

.sidebar li {
  border-radius: 8px;
  margin: 20px 0px;
  padding: 5px 6px;
  cursor: pointer;
  position: relative;
}

.sidebar li:hover {
  background: rgb(250 250 250/0.1);
}

.sidebar .active {
  background: white !important;
  box-shadow: 0 0 10px rgb(0 0 0);
}

.sidebar .active svg {
  color: black;
}

.sidebar span {
  display: none;
}

.sidebar ul li svg {
  color: white;
  height: 25px;
  width: 25px;
  margin: auto;
}

.dashboard,
.intraday,
.history,
.action-watch,
.longterm {
  flex-grow: 1;
  background: var(--black2);
  border-radius: 20px 0 0 0;
  border-top: 1px solid rgb(250 250 250/0.1);
  border-left: 1px solid rgb(250 250 250/0.1);
  padding: 2rem;
}
.dashboard,
.history {
  padding-right: 1rem;
}
.history,
.action-watch {
  max-height: calc(100vh - 45px);
}
.intraday,
.longterm {
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
  position: relative;
  overflow: hidden;
}

.inside-container {
  flex-grow: 1;
  display: flex;
}

.navbar {
  display: flex;
  align-items: center;
  color: white;
}

.navbar svg path {
  color: white;
}

.search-bar input {
  background: transparent;
  color: white;
}

.watchlist {
  border-radius: 25px;
  width: min-content;
  white-space: nowrap;
  padding: 4px 12px;
  border: 1px solid rgb(250 250 250/0.1);
  margin-right: 25px;
  cursor: pointer;
  position: relative;
}

.current-watchlist input {
  background: transparent;
  font-size: 22px;
  font-weight: 600;
  width: 100%;
}

.current-watchlist .span {
  font-size: 22px;
  font-weight: 600;
  white-space: nowrap;
}
.watch-main,
.watch-status {
  padding-right: 1rem;
}
.watch-main::before {
  content: "";
  position: absolute;
  height: 1px;
  background: rgb(250 250 250/0.1);
  bottom: 0;
  width: calc(100% - 1rem);
}

.watch-cover .active {
  background: var(--blackactive);
  border: 1px solid rgb(250 250 250/0);
}

.watch-cover > div {
  display: flex;
}

.watch-delete {
  background: rgb(50 50 50);
  border-radius: 4px;
  display: flex;
  align-items: center;
  padding: 3px 3px 3px 6px;
  cursor: pointer;
  width: min-content;
  position: relative;
  height: min-content;
}
.watch-delete:disabled {
  filter: blur(2px);
  cursor: not-allowed;
}

.search-btn {
  background: white;
  color: black;
  border-radius: 100px;
  box-shadow: 0 0 10px rgb(0 0 0/0.8);
  padding: 5px;
  cursor: pointer;
  width: 30px;
  transition: width 0.3s;
  position: relative;
}
.search-btn::after{
  content: "Add Stock";
  position: absolute;
  top: 50%;
  left: 55%;
  transform: translate(-50%,-50%);
  white-space: nowrap;
  text-align: center;
  z-index: 1;
  opacity: 0;
  font-weight: 500;
  padding: 10px 0 10px 10px;
  border-radius: 100px;
}
.search-btn:hover{
  width: 150px;
}
.search-btn:hover::after{
  transition: opacity 0.2s;
  transition-delay: 0.1s;
  opacity: 0.8;
}
.watch-btn {
  cursor: pointer;
  white-space: nowrap;
  color: white;
  background: rgb(50 50 50);
  border-radius: 25px;
  padding: 2px 10px 4px 10px;
  z-index: 2;
}

.watch-btn:disabled {
  filter: blur(2px);
  cursor: not-allowed;
}

.watch-btn:hover {
  color: white;
}

.watch-delete span {
  position: relative;
  margin-right: 4px;
  padding-right: 4px;
}

.watch-delete span::before {
  display: none;
  content: "";
  position: absolute;
  right: -3px;
  height: 80%;
  top: 10%;
  width: 1px;
  background: rgb(250 250 250/0.3);
}

.watch-text {
  font-weight: 600;
  font-size: 24px;
}

.watch-count,
.updated-time {
  color: rgb(250 250 250/0.5);
}

.watch-tabs {
  display: flex;
  overflow-x: auto;
  padding-left: 15px;
}

.watch-tabs-cover {
  position: relative;
  max-width: calc(100vw - 280px);
}

.watch-tabs::after,
.watch-tabs::before {
  content: "";
  display: block;
  min-width: 20px;
  min-height: 100%;
  position: absolute;
  right: 0;
  z-index: 1;
  background: linear-gradient(to right, transparent, rgb(25 25 25) 80%);
}

.watch-tabs::before {
  right: unset;
  left: 0;
  background: linear-gradient(to left, transparent, rgb(25 25 25) 80%);
}

.stock-list {
  overflow-y: auto;
  height: calc(100vh - 358px);
  position: relative;
  padding-right: 1rem;
}

.trade-box .blur-effect-down::after,
.trade-box .blur-effect-up::before {
  width: 95%;
}

.up-down-arrow {
  color: rgb(250 250 250/0.5);
}

.up-down-arrow svg:first-child {
  position: relative;
  top: 4px;
}

.up-down-arrow svg:last-child {
  position: relative;
  bottom: 4px;
}

table thead th {
  position: sticky;
  top: 0;
  z-index: 1;
  background: var(--black2);
}

table thead span {
  margin-right: 2px;
}

table th > div {
  display: flex;
  align-items: center;
  justify-content: center;
}
table td,
table th {
  padding: 10px 0;
  text-align: center;
}

table td:first-child {
  font-weight: 600;
}

table tr {
  border-bottom: 1px solid rgb(250 250 250/0.1);
}

table tbody tr:nth-child(2n) {
  background: rgb(30 30 30);
}

.logout-content,
.watchdel-content,
.stockdel-content {
  background: rgb(40 40 40);
  position: fixed;
  width: 200px;
  left: calc(50% - 100px);
  top: calc(50% - 42.5px);
  z-index: 1001;
  animation: centerpop 0.3s ease-out 1;
  padding: 10px 15px;
  box-shadow: 0 0 15px rgb(0 0 0/0.5);
  border-radius: 10px;
  border: 1px solid rgb(250 250 250/0.1);
  text-align: center;
  white-space: nowrap;
}
.stockdel-content{
  width: 266px;
  left: calc(50% - 133px);
}
@keyframes centerpop {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
.watchdel-content {
  width: 294px;
  left: calc(50% - 147px);
}
.yesno > div {
  background: rgb(250 250 250/0.3);
  width: 45px;
  padding-bottom: 2px;
  text-align: center;
  border-radius: 5px;
  margin: 5px 8px;
  margin-top: 8px;
  box-shadow: 0 0 10px rgb(0 0 0/0.3);
  cursor: pointer;
}
.yesno > div:hover {
  background: rgb(250 250 250/0.4) !important;
}

.green-alert,
.red-alert {
  position: relative;
  left: 20px;
  white-space: nowrap;
  background: linear-gradient(
    to right,
    rgb(5 150 105/50%),
    rgb(250 250 250 / 10%)
  );
  backdrop-filter: blur(10px);
  padding: 0px 10px 2px 10px;
  border-radius: 4px;
  border: 1px solid rgb(250 250 250/0.1);
  box-shadow: 0 0 10px rgb(0 0 0/0.7);
  animation: showalert 3s linear 1;
  opacity: 0.3;
  cursor: pointer;
}
.green-alert:hover,
.red-alert:hover {
  opacity: 1;
}
@keyframes showalert {
  0% {
    opacity: 0;
  }
  10%,
  90% {
    opacity: 1;
  }
}
.red-alert {
  background: linear-gradient(
    to right,
    rgb(250 0 0 / 50%),
    rgb(250 250 250 / 10%)
  );
}
.green-alert svg,
.red-alert svg {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: -12px;
  fill: rgb(5 105 105/0.5);
}
.red-alert svg {
  fill: rgb(250 0 0/0.5);
}

.trade-box {
  position: fixed;
  right: 0;
  top: calc(50vh - 250px);
  height: 500px;
  width: 400px;
  z-index: 1000;
  border-radius: 20px 0 0 20px;
  background: var(--black2);
  box-shadow: 0 0 10px rgb(0 0 0/0.8);
  border: 1px solid rgb(250 250 250/0.1);
  padding: 25px 30px;
}
.stock-details {
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
  border-radius: 15px 0 0 0;
}
.stock-details .stock-category,
.stock-details .change {
  color: rgb(250 250 250/0.5);
  font-size: 16px;
}
.quantity input,
.price input {
  width: 100%;
  background: transparent;
  border: 1px solid rgb(250 250 250/0.1);
  border-radius: 4px;
  text-align: center;
  padding: 4px 15px;
  padding: 3px;
}
.trade-box .text {
  font-size: 16px;
  color: rgb(250 250 250/0.6);
  margin-bottom: 2px;
}
.bs-switch {
  border: 1px solid rgb(250 250 250/0.2);
  height: 27px;
  width: 54px;
  border-radius: 50px;
  position: relative;
  background: var(--black2);
  cursor: pointer;
}
.bs-switch .ball {
  position: absolute;
  top: 2px;
  left: 3px;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: white;
  transition: left 0.2s;
}

.buy-btn,
.sell-btn,
.cancel-btn {
  background: #047857;
  border-radius: 4px;
  padding: 2px 20px 4px 20px;
  border: 1px solid rgb(250 250 250/0);
  cursor: pointer;
  width: 40%;
  text-align: center;
  position: relative;
}

.sell-btn {
  background: #dc2626;
}
.cancel-btn {
  padding: 2px 15px 4px 15px;
  background: rgb(50 50 50);
  border: 1px solid rgb(250 250 250/0.1);
  width: initial;
}

.sl-input,
.target-input {
  width: 80px;
  background: transparent;
  text-align: center;
}

.sell-mode .ball {
  left: 29px;
  transition: 0.2s;
}

.trade-btn {
  color: white;
  background: rgb(250 250 250/0.1);
  padding: 0 10px;
  border-radius: 3px;
  border-top: 1px solid rgb(250 250 250 / 10%);
  border-left: 1px solid rgb(250 250 250 / 10%);
  cursor: pointer;
  visibility: hidden;
}
.trade-btn:hover {
  background: rgb(250 250 250/0.2);
}
.stock-list tbody tr:hover .trade-btn {
  visibility: unset;
}

.trade-box select {
  background: var(--black2) !important;
  border: 1px solid rgb(250 250 250/0.1);
  border-radius: 4px;
  width: 150px;
  cursor: pointer;
  padding: 5px 0;
}
.trade-box .custom-product .select-icon{
  top: 13px;
  left: 10px;
}
.trade-box .custom-order .select-icon{
  top: 13px;
  left: unset;
  right: 10px;
}
.order-inputs input {
  background: transparent;
  border: 1px solid rgb(250 250 250/0.1);
  border-radius: 4px;
  width: 100%;
  padding: 3px;
}

.order-inputs > div {
  width: inherit;
  position: relative;
}

.order-inputs .blocking-div,
.price .blocking-div {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 999;
  backdrop-filter: blur(2px);
  top: 0;
  border-radius: 4px;
  cursor: not-allowed;
  text-align: center;
  border: 1px solid rgb(250 250 250/0.1);
  color: rgb(250 250 250/0.5);
  overflow: hidden;
  background: var(--black2);
  padding: 3px;
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='6' height='6' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5 0h1L0 6V5zm1 5v1H5z' fill='rgb(250 250 250/0.4)' fill-rule='evenodd'/%3E%3C/svg%3E");
}
.trade-box .trigger-price {
  color: rgb(250 250 250/0.8);
}

.stock-light {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: red;
}
.stock-l {
  border-left: 1px solid var(--blue);
}
.stock-l > div {
  background: linear-gradient(to right, lime, transparent);
  margin-left: 2px;
}
.stock-l::before,
.stock-l::after {
  content: "/";
  color: var(--blue);
  position: absolute;
  top: -10px;
  font-size: 10px;
  transform: rotate(32deg);
}

.stock-l::after {
  top: unset;
  bottom: -10px;
  transform: rotate(-32deg);
}
.stock-list td {
  position: relative;
}

.stock-list .blink-green .name::before,
.stock-list .blink-red .name::before {
  content: "";
  position: absolute;
  left: 0;
  top: 15%;
  width: 100px;
  height: 70%;
  border-radius: 10px 0 0 10px;
  background: linear-gradient(to right, rgb(0 255 0/0.6), transparent);
}

.stock-list .blink-red .name::before {
  background: linear-gradient(to right, rgb(255 0 0/0.6), transparent);
}

.blink-green .change span,
.stock-row .blink-green span {
  background: rgb(16 185 129/0.2);
  padding: 5px 8px;
  border-radius: 6px;
  color: rgb(0, 255, 0);
  animation: blinkgreen 0.5s linear 1;
}
@keyframes blinkgreen {
  20%,
  80% {
    background: green;
    color: white;
  }
}
.blink-red .change span,
.stock-row .blink-red span {
  background: rgb(239 68 68/0.2);
  color: red;
  padding: 5px 8px;
  border-radius: 6px;
  animation: blinkred 0.5s linear 1;
}
@keyframes blinkred {
  20%,
  80% {
    background: red;
    color: white;
  }
}

.stock-box {
  position: fixed;
  height: 450px;
  top: calc(50vh - 225px);
  width: 450px;
  left: 0;
  z-index: 1000;
  background: var(--black2);
  border-radius: 0 20px 20px 0;
  box-shadow: 0 0 10px rgb(0 0 0/0.8);
  border: 1px solid rgb(250 250 250/0.1);
  padding: 20px;
  display: flex;
  flex-direction: column;
}
.stock-box input {
  border-radius: 4px;
  border: 1px solid rgb(250 250 250/0.1);
  background: transparent;
  padding: 10px;
  text-align: center;
  margin-right: 20px;
}
.stock-box input:focus-within , .trade-box input:focus-within {
  border: 1px solid #00ffe7;
}
.stock-box td:first-child {
  text-align: start;
}
.stock-box td:last-child {
  text-align: end;
}
.stock-box-list {
  position: relative;
  overflow-y: auto;
  margin-top: 20px;
  padding-right: 10px;
}
.stock-box-list .stock-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  position: relative;
  overflow: hidden;
}
.stock-box-list .stock-row::before {
  content: "Add";
  text-align: center;
  margin: auto 0;
  position: absolute;
  background: var(--black2);
  background-image: linear-gradient(
    to right,
    transparent,
    rgba(37, 99, 235, 0.5),
    transparent
  );
  padding-top: 8px;
  height: 100%;
  width: 98%;
  top: 100%;
  cursor: pointer;
  left: 0%;
}
.stock-box-list .stock-row:hover:before {
  top: 0%;
  transition: 0.25s;
}
.stock-box-list .stock-row::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background: rgb(250 250 250/0.1);
}
.master-backdrop {
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: 999;
}
.chart-box {
  display: grid;
  grid-template-columns: 1fr;
  position: relative;
  width: calc(100vw - 123px);
  overflow-x: auto;
  overflow-y: hidden;
  border-radius: 10px;
  margin-bottom: 12px;
}
.chart-box-main {
  position: relative;
  margin: 0 2rem;
}
.chart-box-main::before,
.chart-box-main::after {
  content: "";
  background: linear-gradient(to left, transparent, rgb(25 25 25) 80%);
  width: 20px;
  height: calc(100% - 10px);
  position: absolute;
  z-index: 3;
  top: 0;
  left: 0;
}
.chart-box-main::after {
  left: unset;
  right: 0;
  background: linear-gradient(to right, transparent, rgb(25 25 25) 80%);
}
.chart-box .text {
  font-size: 20px;
  font-weight: 500;
}

.fullscreen-btn{
  position: absolute;
  /*top: 0;*/
  bottom: 43px;
  right: 0;
  z-index: 10;
  cursor: pointer;
}

.fullscreen-btn svg{
  /*fill: red;*/
  color: rgb(250 250 250/0.6);
  height: 30px;
}

#intraday-fullchart:checked ~ .chart-box-main .fullscreen-btn , #longterm-fullchart:checked ~ .chart-box-main .fullscreen-btn{
  top: unset;
  bottom: 90px;
  right: 20px;
}
.chart-box .text + div {
  color: rgb(250 250 250/0.8);
}

.investment-data {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 15px;
}
.investment-data > div {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  box-shadow: 0 8px 15px rgb(0 0 0/0.3);
  text-align: center;
  display: grid;
  place-content: center;
  border-top: 1px solid rgb(250 250 250/0.1);
  border-left: 1px solid rgb(250 250 250/0.1);
}
.square-btn,
.target-btn,
.stoploss-btn {
  @apply bg-gradient-to-br from-red-600 to-red-700 hover:from-red-700 hover:to-red-600;
  border-radius: 4px;
  padding: 1px 0px 5px 0px;
  font-size: 18px;
  text-align: center;
  box-shadow: 0 0 10px rgb(0 0 0/0.3);
  margin: auto;
  cursor: pointer;
  position: relative;
}
.square-box .square-btn,
.target-box .target-btn,
.stoploss-box .stoploss-btn {
  margin-bottom: 1px;
  width: 90px;
}
.square-btn {
  border: 1px solid #dc2626;
  height: min-content;
}
.stoploss-btn {
  @apply bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-600;
}
.target-btn {
  @apply bg-gradient-to-br from-green-600 to-green-700 hover:from-green-700 hover:to-green-600;
}
.blurred-backdrop,
.transparent-backdrop {
  position: fixed;
  height: 100vh;
  width: 100vw;
  backdrop-filter: blur(10px);
  z-index: 1000;
}
.transparent-backdrop {
  backdrop-filter: unset;
  z-index: 1000;
}
.square-box,
.target-box,
.stoploss-box {
  position: fixed;
  bottom: 0;
  width: 220px;
  left: calc(50% - 110px);
  background: var(--black2);
  border-radius: 10px 10px 0 0;
  z-index: 1003;
  border: 1px solid rgb(0 0 0 / 0.1);
  border-bottom: 0;
  box-shadow: 0 0 15px rgb(0 0 0/0.6);
  padding: 15px 20px;
  border: 1px solid rgb(250 250 250/0.1);
  text-align: center;
}
.stoploss-box input,
.target-box input,
.square-box input {
  background: transparent;
  width: 100%;
  box-shadow: 0 0 10px rgb(250 250 250/0.2) inset;
  margin: 0px 10px 15px 0;
  text-align: center;
  border-radius: 5px;
  padding: 5px;
  border: 1px solid rgb(250 250 250/0);
  border-bottom: 1px solid rgb(250 250 250/0.3);
}
.stoploss-box .stock,
.square-box .stock,
.target-box .stock {
  margin-bottom: 8px;
}
.stoploss-box input:focus-within {
  border: 1px solid rgb(59 130 246);
  box-shadow: 0 0 10px rgba(59 130 246/0.3) inset;
}
.target-box input:focus-within {
  border: 1px solid rgb(16 185 129);
  box-shadow: 0 0 10px rgb(16 185 129/0.3) inset;
}
.square-box input:focus-within {
  border: 1px solid rgb(239 68 68);
  box-shadow: 0 0 10px rgb(239 68 68/0.3) inset;
}
.stoploss-box input::placeholder,
.target-box input::placeholder,
.square-box input::placeholder {
  font-size: 15px;
  color: rgb(250 250 250/0.8);
}
.stoploss-box .stoploss-submit,
.target-box .target-submit,
.square-box .square-submit {
  padding: 5px;
  border-radius: 5px;
  margin-top: 8px;
  box-shadow: 0 0 10px rgb(0 0 0/0.3);
  cursor: pointer;
}
.buy-circle,
.sell-circle {
  height: 7px;
  width: 7px;
  margin: auto;
  border-radius: 50%;
  background: lime;
  box-shadow: 0 0 10px lime;
}
.sell-circle {
  background: rgb(239 68 68);
  box-shadow: 0 0 10px rgb(239 68 68);
}
.sidebar li span {
  display: none;
  background: rgb(250 250 250/0.3);
  padding: 2px 10px;
  position: absolute;
  backdrop-filter: blur(5px);
  border-radius: 4px;
  left: 100%;
  top: 2px;
  border: 1px solid rgb(250 250 250/0.1);
  box-shadow: 0 0 10px rgb(250 250 250/0.3);
  animation: moveleft 0.15s ease-out 1;
  transform: translate(10px);
  z-index: 10;
  white-space: nowrap;
}
@keyframes moveleft {
  0% {
    transform: translateX(0px);
  }
  100% {
    transform: translateX(10px);
  }
}
.sidebar li:hover span {
  display: unset;
}
.active-longterm .longterm:before,
.active-intraday .intraday:before {
  content: "";
  position: absolute;
  bottom: 0;
  height: 1px;
  width: 200px;
  max-width: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: white;
}
.history ul{
  font-size: 18px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  place-items: center;
  grid-gap: 30px;
  margin-bottom: 30px;
}
.history ul input{
  height: 18px;
  width: 18px;
  top: 2px;
  margin-right: 5px;
  display: none;
}
.history ul li{
  position: relative;
  padding-bottom: 10px;
  cursor: pointer;
  width: 100%;
  text-align: center;
}
.history ul .active::before{
  content: "";
  height: 1px;
  width: 100px;
  left: 50%;
  transform: translateX(-50%);
  background: #ff4243;
  bottom: 0px;
  position: absolute;
}
.history-table{
  height: 100%;
  overflow-y: auto;
  position: relative;
  padding-right: 16px;
}
.history-table input{
  background: transparent;
}
.history table th {
  padding-top: 0;
  color: rgb(250 250 250/0.5);
  letter-spacing: 0.5px;
}
.history .pending-history table input{
  background: transparent;
  width: calc(100% + 15px);
  text-align: center;
  position: relative;
  left: -7.5px;
  border-radius: 8px;
  padding: 3px 5px;
  background: rgb(250 250 250/0.2);
  border: 1px solid rgb(255 255 255/0);
}
.history .pending-history table .green-border:focus-within{
  border: 1px solid rgb(0 255 0/0.5);
}
.history .pending-history table .red-border:focus-within{
  border: 1px solid rgb(255 0 0/0.8);
}
.history-table select{
  background: var(--black2);
  cursor: pointer;
  font-weight: 600;
  letter-spacing: 0.5px;
}
.orders-history{
  height: 100%;
}
.orders-history .no-orders{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50% , -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.orders-history .no-orders svg{
  fill: rgb(250 250 250/0.6);
}
.orders-history .no-orders svg:hover{
  fill: rgb(250 250 250/0.8);
}
.pending-history .confirm-btn-cover,
.pending-history .cancel-btn-cover{
  height: 26px;
  width: 90px;
  position: relative;
}
.pending-history .cancel-btn-cover{
  margin-top: 10px;
}
.pending-history .confirm-btn2 , .pending-history .cancel-btn2{
  @apply bg-green-700;
  border-radius: 8px;
  cursor: pointer;
  position: absolute;
  height: 100%;
  left: 50%;
  transform: translateX(-50%);
  padding: 0 8px;
  font-size: 14px;
}
.pending-history .confirm-btn2{
  padding-top: 2px;
}
.pending-history .cancel-btn2{
  @apply bg-red-600;
  line-height: 24px;
}
.pending-history .confirm-btn svg , .pending-history .cancel-btn svg{
  height: 30px;
  margin: auto;
  stroke: 600;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
}
.pending-history .cancel-btn svg{
  top: 0px;
  height: 35px;
}
.view-history{
  background: #ff4243;
  width: min-content;
  white-space: nowrap;
  padding: 6px 12px 8px 12px;
  border-radius: 6px;
  cursor: pointer;
}
.no-orders .text{
  margin: 12px 0;
}
.setting-b {
  position: fixed;
  right: 25px;
  top: 40px;
  width: 200px;
  border-radius: 10px;
  border: 1px solid rgb(250 250 250/0.1);
  padding: 10px 15px;
  background: var(--black2);
  box-shadow: 0 0 15px rgb(0 0 0/0.5);
  z-index: 1001;
}
.setting-b > div {
  padding: 8px 10px;
  border-bottom: 1px solid rgb(250 250 250/0.1);
}
.setting-b > div:last-child {
  border: none;
}
.holdings-data {
  width: 90%;
  position: absolute;
  height: 70px;
  border-radius: 8px;
  box-shadow: 0 10px 15px rgb(0 0 0/0.6);
  z-index: 5;
  background: var(--black2);
  left: 5%;
  border: 1px solid rgb(250 250 250/0);
  border-top: 1px solid rgb(250 250 250/0.1);
  border-left: 1px solid rgb(250 250 250/0.1);
}
.holdings-data .chains svg {
  fill: white;
  height: 30px;
  transform: rotate(-45deg);
  position: absolute;
  top: -30px;
  left: 25px;
}
.holdings-data .text {
  font-size: 15px;
  font-weight: 400;
  color: rgb(250 250 250/0.5);
}
.holdings-data .chains svg:last-child {
  left: unset;
  right: 25px;
}
.holdings-table {
  overflow-x: hidden;
  overflow-y: auto;
  margin-right: 13px;
  height: calc(100vh - 455px);
}
.holdings-table .row,
.holdings-table .heading {
  position: relative;
  display: grid;
  grid-template-columns: 20% 12% 12% 12% 12% 12% 12% 8%;
  place-items: center;
  border-top: 1px solid rgb(250 250 250/0.1);
  border-left: 1px solid rgb(250 250 250/0.1);
  border-radius: 10px;
  margin: 0 12px 15px 25px;
  box-shadow: 0 8px 15px rgb(0 0 0 / 0.5);
  white-space: nowrap;
}
.holdings-table .heading {
  position: sticky;
  top: 0;
  border-radius: 8px 8px 5px 5px;
  background: rgb(35 35 35);
  font-weight: 600;
  z-index: 2;
}
.holdings-table > div > div {
  padding: 15px 0;
}
.holdings-table .heading > div {
  padding: 8px 0;
}
.holdings-table > div > div:first-child {
  justify-self: start;
}
.holdings-table .heading > div:first-child {
  justify-self: unset;
}
.holdings-table .more .dot {
  height: 4px;
  width: 4px;
  border-radius: 50%;
  margin: 0 2px;
  background: white;
}
.holdings-table .more {
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 12px 0;
}
.holdings-table .buy,
.holdings-table .sell {
  padding: 2px 10px;
  padding-left: 15px;
  border-radius: 30px 30px 30px 0;
  position: relative;
  left: -5px;
  border: 1px solid rgb(250 250 250/0.1);
  white-space: nowrap;
  letter-spacing: 0.8px;
  font-weight: 500;
  background: green;
}
.holdings-table .buy::before,
.holdings-table .sell::before {
  @apply bg-green-900;
  content: "";
  position: absolute;
  height: 10px;
  width: 5px;
  left: -1px;
  bottom: -11px;
  border-radius: 30px 0 0 30px;
  z-index: 1;
  border: 1px solid rgb(250 250 250/0.1);
  border-right: none;
}
.holdings-table .sell::before {
  @apply bg-red-900;
}
.holdings-table .buy::after,
.holdings-table .sell::after {
  content: "";
  position: absolute;
  height: 5px;
  width: 5px;
  bottom: -5px;
  left: -1px;
  border-left: 1px solid rgb(250 250 250/0.1);
  background: green;
}
.holdings-table .sell,
.holdings-table .sell::after {
  @apply bg-red-700;
}
.holdings-feature {
  position: absolute;
  /*border: 1px solid rgb(250 250 250/0.1);*/
  border-right: none;
  border-radius: 6px 0 0 6px;
  /*top: 390px;*/
  top: -5px;
  right: -25px;
  background: var(--black2);
  padding: 8px 19px 8px 19px !important;
  text-align: center;
  box-shadow: 0 0 15px rgb(0 0 0/0.6);
  cursor: default;
  z-index: 1005;
}
@keyframes rightpop {
  0% {
    transform: translateX(110%);
  }
  100% {
    transform: translateX(0);
  }
}
.holdings-feature > div {
  width: 90px;
  margin: 10px 0;
}
.stoploss-btn2 {
  @apply bg-blue-700 !important;
}
.target-btn2 {
  @apply bg-green-700 !important;
}
.settings-menu {
  position: fixed;
  z-index: 1001;
  right: 30px;
  top: 40px;
  background: var(--black2);
  padding: 10px 20px;
  border-radius: 8px;
  box-shadow: 0 0 15px rgb(0 0 0/0.6);
  border: 1px solid rgb(250 250 250/0.1);
  border-radius: 6px;
  width: 200px;
}
.settings-menu .menu {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgb(250 250 250/0.1);
  border-radius: 4px;
  padding: 7px;
}
.settings-menu .menu > div:last-child {
  width: 25px;
  text-align: center;
}
.settings-menu .menu:last-child {
  border: none;
}
.settings-menu .status-on {
  color: #00ffe7;
}
.settings-menu .status-off{
  color: red;
}
.action-cover {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-template-rows: max-content;
  grid-gap: 25px;
  overflow-y: auto;
  height: 100%;
}
.action-card {
  width: 230px;
  height: 120px;
  text-align: center;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-self: center;
  box-shadow: 8px 8px 15px rgb(0 0 0/0.5);
  letter-spacing: 0.4px;
  margin: 3px 0;
}
.action-content {
  display: grid;
  place-items: center;
  grid-gap: 15px;
  padding: 15px 15px;
  height: 100%;
  width: 100%;
  background: var(--black2);
  z-index: 3;
  line-height: 30px;
}
.action-watch .action-card::before{
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  transform: skew(0.5deg , 0.5deg);
  background-image: linear-gradient(315deg,lime,lime);
  z-index: 2;
}
.action-watch .red-action::before{
  background: linear-gradient(315deg,red,red);
}
.action-watch .action-card svg{
  fill: lime;
  height: 13px;
  width: 13px;
  display: inline;
}
.action-watch .red-action svg{
  fill: red;
  transform: rotate(180deg);
}
.action-watch .green-action .price,
.action-watch .red-action .price {
  color: lime;
  background: rgb(16 185 129/0.2);
  padding: 3px 8px 5px 8px;
  border-radius: 6px;
  margin: 0 5px;
}
.green-action .stock {
  color: lime;
}
.red-action .stock {
  color: red;
}
.action-watch .red-action .price {
  background: rgb(239 68 68/0.2);
  color: red;
}
.buy-tag,
.sell-tag,
.sl-tag,
.target-tag,
.market-tag,
.limit-tag,
.manual-tag {
  @apply bg-green-600 bg-opacity-95;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 1px 5px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
}
.mobile-buy-tag,
.mobile-sell-tag {
  border-radius: 100%;
  color: white;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0px 6px 0px 7px;
  transform: scale(0.85);
  @apply bg-green-600;
}
.sl-tag::before {
  content: "StopLoss";
}
.target-tag::before {
  content: "Target";
}
.market-tag::before {
  content: "Market";
}
.limit-tag::before {
  content: "Limit";
}
.manual-tag::before {
  content: "Manual";
}
.manual-tag {
  @apply bg-indigo-700 !important;
}
.market-tag {
  @apply bg-purple-700 !important;
}
.limit-tag {
  @apply bg-pink-600 !important;
}
.target-tag {
  @apply bg-blue-600 !important;
}
.sl-tag {
  @apply bg-yellow-600 !important;
}
.mobile-sell-tag {
  @apply bg-red-600;
}
.buy-tag:before {
  content: "Buy";
  font-size: 13px;
}
.sell-tag:before {
  content: "Sell";
  font-size: 13px;
}

/* --------- RESPONSIVE ---------  */
@media screen and (max-width: 900px){
  .holdings-table .row , .holdings-table .heading{
    grid-template-columns: 25% 7% 15% 11% 11% 11% 15% 5%;
  }
}
@media screen and (min-width: 750px) {
  .m-stock-list,
  .m-stock-search,
  .muser-svg,
  .mlogout-svg , .pending-history table .name span , .pending-history table .name .m-time{
    display: none !important;
  }
}
@media screen and (max-width: 750px) {
  .stock-box-list::before,
  .watch-main::before,
  .watch-btn span,
  .search-btn,
  .updated-time,
  .sidebar li:nth-child(n + 6),
  .stock-list,
  ::-webkit-scrollbar,
  .sidebar , .holdings-table .stockindex , .pending-history table .pc , .navbar .pc {
    display: none;
  }
  .navbar .mobile{
    display: unset;
  }
  .dashboard,
  .intraday,
  .history,
  .action-watch,
  .longterm{
    height: calc(100vh - 160px);
  }

  .navbar .username{
    margin-left: auto;
  }
  .navbar .onyx-name{
    justify-self: center;
  }
  .navbar{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
  .fullscreen-btn{
    display: flex;
  }
  .dashboard , .action-watch , .intraday , .longterm , .history{
    border-radius: 0;
    border: none;
  }
  .master-backdrop{
    backdrop-filter: blur(10px);
  }
  .dashboard {
    border-radius: unset;
    border: none;
    padding: 1rem;
  }
  .inside-container {
    flex-grow: unset;
    height: calc(100% - 45px);
    flex-direction: column-reverse;
  }
  .red-alert,
  .green-alert {
    position: fixed;
    top: 160px;
    left: 150px;
    z-index: 111;
  }
  .settings-menu{
    right: 22px;
  }
  .m-navigation {
    display: unset;
    position: relative;
    z-index: 111;
  }
  .m-navigation .indicator {
    position: absolute;
    height: 70px;
    width: 70px;
    background: var(--black1);
    border-radius: 50%;
    top: -35px;
    left: 0;
    z-index: 1;
    transition: left 0.4s;
  }
  .m-navigation .indicator::before {
    content: "";
    position: absolute;
    top: 5px;
    left: -28px;
    width: 30px;
    height: 30px;
    background: transparent;
    border-radius: 50%;
    box-shadow: 15px 18px var(--black1);
  }
  .m-navigation .indicator::after {
    content: "";
    position: absolute;
    top: 5px;
    right: -28px;
    width: 30px;
    height: 30px;
    background: transparent;
    border-radius: 50%;
    box-shadow: -15px 18px var(--black1);
  }
  .m-navigation ul .active1 ~ .indicator {
    left: calc(10vw - 37px);
    transition: 0.4s;
  }
  .m-navigation ul .active2 ~ .indicator {
    left: calc(30vw - 37px);
    transition: 0.4s;
  }
  .m-navigation ul .active3 ~ .indicator {
    left: calc(50vw - 37px);
    transition: 0.4s;
  }
  .m-navigation ul .active4 ~ .indicator {
    left: calc(70vw - 37px);
    transition: 0.4s;
  }
  .m-navigation ul .active5 ~ .indicator {
    left: calc(90vw - 37px);
    transition: 0.4s;
  }
  .m-navigation svg {
    height: 25px;
    width: 25px;
    margin: auto;
    position: relative;
    z-index: 2;
    transform: translateY(0px);
    transition: 0.5s;
  }
  .m-navigation ul {
    display: grid;
    grid-template-columns: repeat(6, 20%);
  }
  .m-navigation li {
    position: relative;
    padding: 12px 0;
  }
  .m-navigation li div:last-child {
    transform: translateY(15px);
    transition: transform 0.5s;
    position: relative;
    z-index: 3;
  }
  .m-navigation li span {
    font-size: 15px;
    border-radius: 20px;
    padding: 2px 8px;
    background: white;
    color: black;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  .m-navigation .active div:last-child {
    transform: translateY(-25px);
  }
  .m-navigation .active svg {
    transform: translateY(-35px);
    transition: 0.5s;
  }
  .watch-main {
    padding:0 0 1rem 0;
  }
  .watch-cover{
    margin-top: 1rem;
  }
  .watch-status {
    padding: 0;
  }
  .watch-tabs-cover {
    max-width: calc(100vw - 118px);
  }
  .watch-tabs {
    padding-left: 0;
  }
  .watch-tabs::before {
    display: none;
  }
  .watch-btn {
    margin-left: 5px;
  }
  .m-stock-search {
    background: transparent;
    width: 100%;
    border: 1px solid rgb(250 250 250/0.1);
    padding: 7px 0;
    border-radius: 4px;
    text-align: center;
    color: rgb(250 250 250/0.5);
    margin: 12px 0;
  }
  .m-stock-list {
    overflow-y: auto;
    height: calc(100% - 210px);
  }
  .m-stock {
    position: relative;
    display: flex;
    border-bottom: 1px solid rgb(255 255 255/0.1);
    overflow: hidden;
  }
  .m-stock > div:first-child {
    padding: 10px 0;
    flex-grow: 1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: relative;
    z-index: 1;
    background: var(--black2);
    right: 0;
    transition: right 0.3s;
  }
  .m-stock-delete > div:first-child {
    right: 90px;
  }
   .m-stock > div:first-child:hover{
    background: linear-gradient(to right, rgb(250 0 0 / 50%), rgb(250 250 250 / 10%)) !important;
  }
  .m-delete-btn {
    display: grid;
    place-items: center;
    width: 80px;
    height: 100%;
    /*background: rgb(250 250 250/0.1);*/
    background: linear-gradient(to left, rgb(250 0 0 / 50%), rgb(250 250 250 / 10%)) !important;

    position: absolute;
    right: -82px;
    z-index: 1002;
    cursor: pointer;
    transition: right 0.3s;
  }
  .m-stock-delete .m-delete-btn{
    right: 0;
  }
  .m-stock-list .m-stock:nth-child(odd) .m-change {
    color: var(--green);
  }
  .m-stock-list .m-stock:nth-child(even) .m-change {
    color: var(--red);
  }
  .m-type {
    color: rgb(250 250 250/0.5);
  }
  .stock-box,
  .trade-box {
    width: 100%;
    height: 500px;
    max-height: 95vh;
    top: unset;
    bottom: 0;
    z-index: 1001;
    border-radius: 25px 25px 0 0;
    box-shadow: 0 -5px 15px rgb(0 0 0/0.6);
  }
  .trade-box{
    padding: 20px;
  }
  .stock-box input{
    margin: 0;  
  }
  @keyframes bottompop {
    0% {
      transform: translateY(110%);
    }
    100% {
      transform: translateY(0%);
    }
  }
  .stock-box-list {
    padding: 0px;
  }
  .stock-box-list .stock-row::before,
  .stock-box-list .stock-row::after {
    width: 100%;
    left: 0;
  }
  .stock-box-list .stock-row::before{
    content: unset;
  }
  .stock-box-list .stock-row {
    margin: 0;
    padding: 10px 5px;
  }

  .intraday , .longterm{
    padding: 1rem 0;
  }

 .pending-history .buy-tag,
.pending-history .sell-tag,
.pending-history .sl-tag,
.pending-history .target-tag,
.pending-history .market-tag,
.pending-history .limit-tag,
.pending-history .manual-tag{
  font-size: 14px;
  height: 22px;
  padding-bottom: 2px;
}

.pending-history .name .m-time{
  color: rgb(250 250 250/0.6);
}

  /* ----------- MOBILE HOLDINGS -----  */

  .holdings-feature{
    /*position: absolute;*/
    right: -22px;
    /*top: 0;*/
    /*top: 374px;   */
  }

  .holdings-table{
    margin: 0 13px;
  }

  .holdings-data{
    top: 30px;
  }
    .holdings-table .hqty , .holdings-table .qty , .holdings-table .htime , .holdings-table .hpnl , .holdings-table .hname , .holdings-table .hdots , .holdings-table .more {
    display: none;
  }
  .holdings-table .m-qty , .holdings-table .pnl-svg , .holdings-table .date , .holdings-table .text{
    display: unset;
  }

  .holdings-table .date , .holdings-table .time , .holdings-table .pnl-svg{
    height: 0;
    padding: 0 !important;
    overflow: hidden;
    transition: height 0.5s;
    display: grid;
    place-items: center;
  }


  .holding-details .date , .holding-details .time , .holding-details .pnl-svg{
    height: 44px;
    line-height: unset;
    transition: height 0.5s
  }

  .holdings-table .mobile-name{
    display: flex;
    justify-content: space-between;
  }
  .holdings-table .heading{
    display: none;
    grid-template-columns: 1fr 1fr 1fr;
  }
  .holdings-table .name{
    grid-column: 1 / span 2;
  }
  .holdings-table .name .buy , .holdings-table .name .sell{
   padding: 3px 10px; 
  }
  .holdings-table .pnl{
    font-size: 19px;
  }
  .holdings-table .row{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin: 0 5px 16px 5px;
  }
  .holdings-table .row > div{
    padding: 10px 0;
    text-align: center;
  }
  .holdings-table .text{
    font-size: 13px;
    color: rgb(250 250 250 /0.5);
  }

  .chart-box-main{
    padding: 0;
    margin: 0 1rem;
  }
  .chart-box{
    width: calc(100vw - 33px);
  }
  .chart-box-main::before, .chart-box-main::after{
    height: 100%;
  }

  #intraday-fullchart:checked ~ .chart-box-main , #longterm-fullchart:checked ~ .chart-box-main{
  position: fixed;
  z-index: 1001;
  margin: 0 !important;
  position: fixed;
  border-radius: 0;
  height: 100vh;
  top: 0;
  width: 100vw;
  left: 0;
  background: var(--black2);
}
#intraday-fullchart:checked ~ .chart-box-main .chart-box , #longterm-fullchart:checked ~ .chart-box-main .chart-box{
  margin: 0;
  width: 100vh !important;
  position: fixed;
  height: min-content !important;
  top: calc(50% - 150px);
  left: calc(50vw - 50vh);
  transform: rotate(90deg);
}
#intraday-fullchart:checked ~ .chart-box-main .chart-text , #longterm-fullchart:checked ~ .chart-box-main .chart-text{
  z-index: 1111;
}
#intraday-fullchart:checked ~ .chart-box-main .chart-pnl , #longterm-fullchart:checked ~ .chart-box-main .chart-pnl{
  z-index: 1111;
}
  
/* -------------- MOBILE HISTORY -----------  */

  .history-table .hidden , .cancelled-history .hidden{
    display: block;
  }
  .history-table .pc , .cancelled-history .pc{
    display: none;
  }
  .history-table .pricexqty , .cancelled-history .pricexqty , .mobile-time{
    color: rgb(250 250 250 /0.6);
  }

  .history , .action-watch{
    padding: 1rem;
  }
  .history-table{
    padding: 0;
  }
  .history-table th:first-child{
    width: 5%;
  }

  /* ------------- MOBILE  ACTION WATCH -------  */ 
  .action-watch{
    font-size: 15px;
  }
  .action-cover{
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 20px;
  }
  .action-card{
    width: 200px;
    height: 110px;
  }
  .action-content{
    padding: 0px;
  }
}
@media screen and (max-width: 400px) {
  .holdings-data{
    width: 96%;
    left: 2%;
  }
  .holdings-data .chains svg{
    left: 15px;
  }
  .holdings-data .chains svg:last-child{
    right: 15px;
  }
}

@media screen and (max-width: 350px){
  .history , .action-watch{
    padding: 1rem 0.5rem;
  }
  .watch-text{
    font-size: 22px;
  }
  .current-watchlist input{
    font-size: 20px;
  }
  .holdings-table .pnl {
    font-size: 17px;
  }
  .trade-box .stock-name , .trade-box .stock-price , .buy-btn , .sell-btn , .trade-box select , .trade-box .blocking-div , .trade-box input{
    font-size: 16px;
  }
  .holdings-data .text + div , .holdings-table .row , .watch-cover , .m-stock-list , .trade-box .text , .stock-box{
    font-size: 15px;
  }
  .history-table , .m-navigation li span , .holdings-data .text{
    font-size: 14px;
  }
  .market-tag{
    font-size: 12px;
  }
  .holdings-table {
    margin: 0 3px;
  }
  .trade-box select{
    width: 40vw;
  }
  .red-alert , .green-alert{
    top: 22px;
    left: 135px;
    font-size: 12px;
  }
}

@media screen and (max-width: 319px){
  .holdings-table .pnl{
    font-size: 15px;
  }
  .holdings-data .text + div , .holdings-table .row{
    font-size: 14px;
  }
  .m-navigation li span , .holdings-data .text{
    font-size: 13px;
  }
  .history-table{
    font-size: 12px;
  }
  .market-tag{
    font-size: 11px;
  }
  .red-alert , .green-alert{
    top: 24px;
    left: 130px;
    font-size: 10px;
    padding: 0px 2px 2px 2px;
  }
}

/* ---------  VUE TRANSITIONS ---------  */

.left-enter-from {
  transform: translateX(-100%);
}
.left-enter-active {
  transition: 0.5s ease;
}
.left-leave-active {
  transition: 0.4s ease;
}
.left-leave-to {
  transform: translateX(-100%);
}

.right-enter-from {
  transform: translateX(100%);
}
.right-enter-active {
  transition: 0.5s ease;
}
.right-leave-active {
  transition: 0.4s ease;
}
.right-leave-to {
  transform: translateX(100%);
}

.hfeature-enter-from {
  transform: translateX(100%);
}
.hfeature-enter-active {
  transition: 0.5s ease;
}
.hfeature-leave-active {
  transition: 0.4s ease;
}
.hfeature-leave-to {
  transform: translateX(100%);
}

.bottom-enter-from {
  transform: translateY(100%);
}
.bottom-enter-active {
  transition: 0.5s ease;
}
.bottom-leave-active {
  transition: 0.4s ease;
}
.bottom-leave-to {
  transform: translateY(100%);
}

.topright-enter-from {
  transform: scale(0);
  transform-origin: top right;
}
.topright-enter-active {
  transition: 0.4s ease;
}
.topright-leave-active {
  transition: 0.3s ease;
}
.topright-leave-to {
  transform: scale(0);
  transform-origin: top right;
}

.watch-enter-from {
  transform: scale(0.5);
}
.watch-enter-active,
.watch-leave-active {
  transition: 0.3s ease;
}
.watch-leave-to {
  transform: scale(0.5);
}
.watchcover-move {
  transition: all 0.2s ease;
}

.holdingsdata-enter-from {
  transform: translateY(-120px);
}
.holdingsdata-enter-active,
.holdingsdata-leave-active {
  transition: 0.5s;
}
.holdingsdata-leave-to {
  transform: translateY(-120px);
}

@media screen and (max-width: 750px) {
  .left-enter-from,
  .right-enter-from {
    transform: translateY(100%);
  }
  .left-enter-active,
  .right-enter-active {
    transition: 0.5s ease;
  }
  .left-leave-active,
  .right-leave-active {
    transition: 0.4s ease;
  }
  .left-leave-to,
  .right-leave-to {
    transform: translateY(100%);
  }
}


/* ------------- ADMIN ----------  */

.admin-settings{
  display: grid;
  grid-template-rows: 70% auto;
  position: fixed;
  right: 0;
  height: 450px;
  width: 400px;
  top: calc(50% - 225px);
  background: var(--black2);
  border-radius: 20px 0 0 20px;
  box-shadow: 0 0 10px rgb(0 0 0/0.8);
  z-index: 1001;
  padding-bottom: 10px;
  border: 1px solid rgb(250 250 250/0.1);
}
.settings-data{
  display: grid;
  grid-template-columns: 1fr 0px 1fr;
  place-items: center;
  text-align: center;
}
.settings-data .text{
  color: rgb(250 250 250/0.5);
  font-weight: 600;
}
.settings-data input{
  background: transparent;
  border-bottom: 1px solid rgb(250 250 250/0.3);
  text-align: center;
  width: 60%;
  padding: 2px 0;
}
.settings-data input:focus-within{
  border-bottom: 1px solid #00ffe7;
}
.settings-data svg{
  height: 18px;
  width: 18px;
  color: rgb(250 250 250/0.7);
  position: relative;
  top: 10px;
}
.settings-switches{
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
}
.settings-switches > div{
  display: flex;
  justify-content: space-between;
  width: 70%;
}
.settings-switches input{
  display: none;
}
.settings-switches svg{
  fill: red;
  filter: drop-shadow(0 0 30px red) ;
  width: 20px;
  height: 20px;
  margin: auto;
  position: absolute;
}
.settings-switches .btn-cover{
  position: relative;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
  display: grid;
  place-items: center;
}
.settings-switches label .btn{
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  background: #1b1b1b;
  border-radius: 50%;
  box-shadow: 0 0 15px rgb(250 250 250 /0.2) , inset 0 -2px 5px rgb(0 0 0) , inset 0 1px 3px rgb(250 250 250/0.8);
}
.settings-switches input:checked ~ label svg{
  fill: #00ffe7;
  filter: drop-shadow(0 0 30px #00ffe7) ;
}
.loading{
    position: fixed;
    place-items: center;
    height: 100vh;
    width: 100vw;
    z-index: 1002;
    animation: offs 2s linear 1;
    opacity: 0;
    visibility: hidden;
    background: rgb(0 0 0/0.1);
    backdrop-filter: blur(5px);
}

    @keyframes offs{
      0% , 80%{
        opacity: 1;
        visibility: unset;
      }

      100%{
        display: none ;
        opacity: 0;
        visibility: hidden;
      }

    }

 .bird {
    position: absolute;
    top: 50%;
    margin-left: -50px;
    left: 50%;
    animation: speeder 0.4s linear infinite;
}
 .bird > span {
    height: 5px;
    width: 35px;
    background: white;
    position: absolute;
    top: -19px;
    left: 60px;
    border-radius: 2px 10px 1px 0;
}
 .base span {
    position: absolute;
    width: 0;
    height: 0;
    border-top: 6px solid transparent;
    border-right: 100px solid white;
    border-bottom: 6px solid transparent;
}
 .base span:before {
    content: "";
    height: 22px;
    width: 22px;
    border-radius: 50%;
    background: white;
    position: absolute;
    right: -110px;
    top: -16px;
}
 .base span:after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-top: 0 solid transparent;
    border-right: 55px solid white;
    border-bottom: 16px solid transparent;
    top: -16px;
    right: -98px;
}
 .face {
    position: absolute;
    height: 12px;
    width: 20px;
    background: white;
    border-radius: 20px 20px 0 0;
    transform: rotate(-40deg);
    right: -125px;
    top: -15px;
}
 .face:after {
    content: "";
    height: 12px;
    width: 12px;
    background: white;
    right: 4px;
    top: 7px;
    position: absolute;
    transform: rotate(40deg);
    transform-origin: 50% 50%;
}
 .bird > span > span:nth-child(1), .bird > span > span:nth-child(2), .bird > span > span:nth-child(3), .bird > span > span:nth-child(4) {
    width: 30px;
    height: 1px;
    background: white;
    position: absolute;
    animation: fazer1 0.2s linear infinite;
}
 .bird > span > span:nth-child(2) {
    top: 3px;
    animation: fazer2 0.4s linear infinite;
}
 .bird > span > span:nth-child(3) {
    top: 1px;
    animation: fazer3 0.4s linear infinite;
    animation-delay: -1s;
}
 .bird > span > span:nth-child(4) {
    top: 4px;
    animation: fazer4 1s linear infinite;
    animation-delay: -1s;
}
 @keyframes fazer1 {
    0% {
      left: 0;
    }
    100% {
      left: -80px;
      opacity: 0;
	}
}
 @keyframes fazer2 {
    0% {
      left: 0;
    }
    100% {
      left: -100px;
      opacity: 0;
    }
}
 @keyframes fazer3 {
    0% {
      left: 0;
    }
    100% {
      left: -50px;
      opacity: 0;
	}
}
 @keyframes fazer4 {
    0% {
      left: 0;
    }
    100% {
      left: -150px;
      opacity: 0;
    }
}
 @keyframes speeder {
    0% {
      transform: translate(2px, 1px) rotate(0deg);
    }
    10% {
      transform: translate(-1px, -3px) rotate(-1deg);
    }
    20% {
      transform: translate(-2px, 0px) rotate(1deg);
    }
    30% {
      transform: translate(1px, 2px) rotate(0deg);
    }
    40% {
      transform: translate(1px, -1px) rotate(1deg);
    }
    50% {
      transform: translate(-1px, 3px) rotate(-1deg);
    }
    60% {
      transform: translate(-1px, 1px) rotate(0deg);
    }
    70% {
      transform: translate(3px, 1px) rotate(-1deg);
    }
    80% {
      transform: translate(-2px, -1px) rotate(1deg);
    }
    90% {
      transform: translate(2px, 1px) rotate(0deg);
    }
    100% {
      transform: translate(1px, -2px) rotate(-1deg);
    }
}

  .loading-main{
    position: fixed;
    height: 100vh;
    width: 100vw;
    border: 1px solid rgb(250 0 0/0);
    backdrop-filter: blur(5px);
    z-index: 1002;
  }
  .longfazers {
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 1002;
  }
  .longfazers span {
    position: absolute;
    height: 2px;
    width: 20%;
    background: rgb(250 250 250/0.3);
  }
  .longfazers span:nth-child(1) {
    top: 20%;
    animation: lf 0.6s linear infinite;
    animation-delay: -5s;
  }
  .longfazers span:nth-child(2) {
    top: 40%;
    animation: lf2 0.8s linear infinite;
    animation-delay: -1s;
  }
  .longfazers span:nth-child(3) {
    top: 60%;
    animation: lf3 0.6s linear infinite;
  }
  .longfazers span:nth-child(4) {
    top: 80%;
    animation: lf4 0.5s linear infinite;
    animation-delay: -3s;
  }
  @keyframes lf {
    0% {
      left: 200%;
    }
    100% {
      left: -200%;
      opacity: 0;
    }
  }
  @keyframes lf2 {
    0% {
      left: 200%;
    }
    100% {
      left: -200%;
      opacity: 0;
    }
  }
  @keyframes lf3 {
    0% {
      left: 200%;
    }
    100% {
      left: -100%;
      opacity: 0;
    }
  }
  @keyframes lf4 {
    0% {
      left: 200%;
    }
    100% {
      left: -100%;
      opacity: 0;
    }
  }



  /*---------- DOT ANIMATION -------- */

  .loading-cover{
    width: 100%;
    height: 100%;
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    cursor: not-allowed !important;
  }
  .buy-btn .loading-cover{
    background: #047857;    
  }

  .sell-btn .loading-cover{
    background: #dc2626;    
  }

  .square-btn .loading-cover{
    @apply bg-gradient-to-br from-red-600 to-red-700 hover:from-red-700 hover:to-red-600;
    border-radius: 4px;
  }

  .stoploss-btn .loading-cover{
    @apply bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-600;
    border-radius: 4px;
  }

  .target-btn .loading-cover{
    @apply bg-gradient-to-br from-green-600 to-green-700 hover:from-green-700 hover:to-green-600;
    border-radius: 4px;
  }

  .lds-ellipsis {
  display: inline-block;
  position: absolute;
  left: calc(50% - 22px);
  top: calc(50% - 1px);
  transform: scale(0.6);
}
.lds-ellipsis div {
  position: absolute;
  top: calc(50% - 6.5px);
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: #fff;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.lds-ellipsis div:nth-child(1) {
  left: 8px;
  animation: lds-ellipsis1 0.6s infinite;
}
.lds-ellipsis div:nth-child(2) {
  left: 8px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(3) {
  left: 32px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(4) {
  left: 56px;
  animation: lds-ellipsis3 0.6s infinite;
}
@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
}

</style>