<template>
    <body class="h-body">
        
        <div class="h-navbar">
            <div class="h-inside-navbar">
                <div class="h-onyx-name flex justify-center items-center">
                    

                    <div class="text">
                        <span>Ony</span><img src="https://i.ibb.co/sRVkLkH/logo2-removebg-preview.png" alt="" height="35" width="35"><span>Trade</span>
                    </div>

                </div>
                <ul>
                    <!-- <li class="orders">Orders</li> -->
                    <li @click="htab = 1"
                    :class="{'active' : htab == 1}">Settled</li>

                    <li @click="htab = 2"
                    :class="{'active' : htab == 2}">Cancelled</li>

                    <li @click="htab = 3"
                    :class="{'active' : htab == 3}">Completed</li>

                    <li @click="htab = 4"
                    :class="{'active' : htab == 4}">History</li>

                    <div class="husername flex items-center relative">

                    <img src="https://i.ibb.co/ZxTMM1t/download.jpg" class="h-8 ml-8 rounded-full">

                    <span class="ml-4">Tom</span>
                </div>

                </ul>
                
            </div>
        </div>

        <div v-if="htab == 1" class="h-settled tab-box">

            <div class="holdings-text">
                <div class="flex items-center text">
                    <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M480 496H48a32 32 0 01-32-32V32a16 16 0 0132 0v432h432a16 16 0 010 32z"/><path d="M156 432h-40a36 36 0 01-36-36V244a36 36 0 0136-36h40a36 36 0 0136 36v152a36 36 0 01-36 36zM300 432h-40a36 36 0 01-36-36V196a36 36 0 0136-36h40a36 36 0 0136 36v200a36 36 0 01-36 36zM443.64 432h-40a36 36 0 01-36-36V132a36 36 0 0136-36h40a36 36 0 0136 36v264a36 36 0 01-36 36z"/></svg>

                    <span class="ml-4">Settled Orders</span>
                </div>

                <div class="download-excel">
                    <p>Export</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 30 30"><path d="M 15 3 A 2 2 0 0 0 14.599609 3.0429688 L 14.597656 3.0410156 L 4.6289062 5.0351562 L 4.6269531 5.0371094 A 2 2 0 0 0 3 7 L 3 23 A 2 2 0 0 0 4.6289062 24.964844 L 14.597656 26.958984 A 2 2 0 0 0 15 27 A 2 2 0 0 0 17 25 L 17 5 A 2 2 0 0 0 15 3 z M 19 5 L 19 8 L 21 8 L 21 10 L 19 10 L 19 12 L 21 12 L 21 14 L 19 14 L 19 16 L 21 16 L 21 18 L 19 18 L 19 20 L 21 20 L 21 22 L 19 22 L 19 25 L 25 25 C 26.105 25 27 24.105 27 23 L 27 7 C 27 5.895 26.105 5 25 5 L 19 5 z M 23 8 L 24 8 C 24.552 8 25 8.448 25 9 C 25 9.552 24.552 10 24 10 L 23 10 L 23 8 z M 6.1855469 10 L 8.5878906 10 L 9.8320312 12.990234 C 9.9330313 13.234234 10.013797 13.516891 10.091797 13.837891 L 10.125 13.837891 C 10.17 13.644891 10.258531 13.351797 10.394531 12.966797 L 11.785156 10 L 13.972656 10 L 11.359375 14.955078 L 14.050781 19.998047 L 11.716797 19.998047 L 10.212891 16.740234 C 10.155891 16.625234 10.089203 16.393266 10.033203 16.072266 L 10.011719 16.072266 C 9.9777187 16.226266 9.9105937 16.458578 9.8085938 16.767578 L 8.2949219 20 L 5.9492188 20 L 8.7324219 14.994141 L 6.1855469 10 z M 23 12 L 24 12 C 24.552 12 25 12.448 25 13 C 25 13.552 24.552 14 24 14 L 23 14 L 23 12 z M 23 16 L 24 16 C 24.552 16 25 16.448 25 17 C 25 17.552 24.552 18 24 18 L 23 18 L 23 16 z M 23 20 L 24 20 C 24.552 20 25 20.448 25 21 C 25 21.552 24.552 22 24 22 L 23 22 L 23 20 z"></path></svg>
                </div>
            </div>

            <div class="h-order-search flex justify-between items-center">
                <div class="search">
                    <input type="text" placeholder="Filter Settled Orders">

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>

                </div>

                <div class="date-filter">
                    <Datepicker v-model="date" :clearable="false" required :format="format" range :enableTimePicker="false" :maxDate="new Date()"/>
                </div>
            </div>

            <div class="settled-table table custom-scroll blur-effect-down">
                <table class="w-full">
                    <thead>
                        <th>
                            <span>
                                <p>STOCK</p>
                                
                            </span>
                        </th>
                        <th>
                            <span>
                                <p>CREATED</p>
                                
                            </span>
                        </th>
                        <th>
                            <span>
                                <p>EXITED</p>
                                
                            </span>
                        </th>
                        
                        <th>
                            <span>
                                <p>QTY</p>
                                
                            </span>
                        </th>
                        <th>
                            <span>
                                <p>BUY</p>
                                
                            </span>
                        </th>
                        <th>
                            <span>
                                <p>SELL</p>
                                
                            </span>
                        </th>

                        <th>
                            <span>
                                <p>
                                P & L
                                </p>
                                
                            </span>
                        </th>
                        
                        <th>
                            <span>
                                <p>BR</p>
                            </span>
                        </th>
                        <th>
                            <span>
                                <p>AMT</p>
                            </span>
                        </th>
                        
                    </thead>
                    <tbody>
                        <tr>
                            <td class="stock">
                                <span>
                                    NIFTY21OCTFUT
                                </span>
                            </td>

                            <td class="created">
                                <span>
                                    <div class="date">12 JAN 2022</div>
                                    <div class="time">11:15:25 AM</div>
                                </span>
                            </td>

                            <td class="exited">
                                <span>
                                    <div class="date">12 JAN 2022</div>
                                    <div class="time">02:35:45 PM</div>
                                </span>
                            </td> 

                            <td class="qty">
                                <span>4500</span>
                            </td>

                            <td class="buy">
                                <span>452.55</span>
                            </td>

                            <td class="sell">
                                <span>462.55</span>
                            </td>

                            <td class="pnl-green pnl">
                                <span>800.65</span>
                            </td>

                            <td class="brokerage-green brokerage">
                                <span>400.45</span>
                            </td>

                            <td class="amount-red amount">
                                <span>600.67</span>
                            </td>
                                                    
                        </tr>

                        <tr>
                            <td class="stock">
                                <span>
                                    NIFTY21OCTFUT
                                </span>
                            </td>

                            <td class="created">
                                <span>
                                    <div class="date">12 JAN 2022</div>
                                    <div class="time">11:15:25 AM</div>
                                </span>
                            </td>

                            <td class="exited">
                                <span>
                                    <div class="date">12 JAN 2022</div>
                                    <div class="time">02:35:45 PM</div>
                                </span>
                            </td> 

                            <td class="qty">
                                <span>4500</span>
                            </td>

                            <td class="buy">
                                <span>452.55</span>
                            </td>

                            <td class="sell">
                                <span>462.55</span>
                            </td>

                            <td class="pnl-red pnl">
                                <span>800.65</span>
                            </td>

                            <td class="brokerage-green brokerage">
                                <span>400.45</span>
                            </td>

                            <td class="amount-red amount">
                                <span>600.67</span>
                            </td>
                                                    
                        </tr>

                    </tbody>
                </table>
            </div>


            <!-- ---------- MOBILE SETTLED ORDERS -------- -->

            <div class="hidden mobile-settled mobile-orders-container custom-scroll blur-effect-down">
                <div class="orders-box">
                    <div class="name">
                        <span>NIFTY21OCTFUT x 1000</span>
                    </div>
                    <div class="pnl text-green">10,000</div>

                    <div class="buy">
                        <div class="text">Buy</div>
                        <div>480.65</div>
                    </div>

                    <div class="amount">
                        <div class="text">Amount</div>
                        <div>465.54</div>
                    </div>

                    <div class="sell">
                        <div class="text">Sell</div>
                        <div>480.65</div>
                    </div>

                    <div class="created">
                        <div class="text">Created</div>
                        <div class="date">12 JAN 2022</div>
                        <div class="time">11:15:25 AM</div>
                    </div>

                    <div class="brokerage">
                        <div class="text">Brokerage</div>
                        <div>485.45</div>
                    </div>

                    <div class="exited">
                        <div class="text">Exited</div>
                        <div class="date">12 JAN 2022</div>
                        <div class="time">11:15:25 AM</div>
                    </div>
                </div>
            </div>

            
        </div>

        <div v-if="htab == 2" class="h-cancelled tab-box">
            <div class="holdings-text">
                <div class="flex items-center text">
                    <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M480 496H48a32 32 0 01-32-32V32a16 16 0 0132 0v432h432a16 16 0 010 32z"/><path d="M156 432h-40a36 36 0 01-36-36V244a36 36 0 0136-36h40a36 36 0 0136 36v152a36 36 0 01-36 36zM300 432h-40a36 36 0 01-36-36V196a36 36 0 0136-36h40a36 36 0 0136 36v200a36 36 0 01-36 36zM443.64 432h-40a36 36 0 01-36-36V132a36 36 0 0136-36h40a36 36 0 0136 36v264a36 36 0 01-36 36z"/></svg>

                    <span class="ml-4">Cancelled Orders</span>
                </div>

                <div class="download-excel">
                    <p>Export</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 30 30"><path d="M 15 3 A 2 2 0 0 0 14.599609 3.0429688 L 14.597656 3.0410156 L 4.6289062 5.0351562 L 4.6269531 5.0371094 A 2 2 0 0 0 3 7 L 3 23 A 2 2 0 0 0 4.6289062 24.964844 L 14.597656 26.958984 A 2 2 0 0 0 15 27 A 2 2 0 0 0 17 25 L 17 5 A 2 2 0 0 0 15 3 z M 19 5 L 19 8 L 21 8 L 21 10 L 19 10 L 19 12 L 21 12 L 21 14 L 19 14 L 19 16 L 21 16 L 21 18 L 19 18 L 19 20 L 21 20 L 21 22 L 19 22 L 19 25 L 25 25 C 26.105 25 27 24.105 27 23 L 27 7 C 27 5.895 26.105 5 25 5 L 19 5 z M 23 8 L 24 8 C 24.552 8 25 8.448 25 9 C 25 9.552 24.552 10 24 10 L 23 10 L 23 8 z M 6.1855469 10 L 8.5878906 10 L 9.8320312 12.990234 C 9.9330313 13.234234 10.013797 13.516891 10.091797 13.837891 L 10.125 13.837891 C 10.17 13.644891 10.258531 13.351797 10.394531 12.966797 L 11.785156 10 L 13.972656 10 L 11.359375 14.955078 L 14.050781 19.998047 L 11.716797 19.998047 L 10.212891 16.740234 C 10.155891 16.625234 10.089203 16.393266 10.033203 16.072266 L 10.011719 16.072266 C 9.9777187 16.226266 9.9105937 16.458578 9.8085938 16.767578 L 8.2949219 20 L 5.9492188 20 L 8.7324219 14.994141 L 6.1855469 10 z M 23 12 L 24 12 C 24.552 12 25 12.448 25 13 C 25 13.552 24.552 14 24 14 L 23 14 L 23 12 z M 23 16 L 24 16 C 24.552 16 25 16.448 25 17 C 25 17.552 24.552 18 24 18 L 23 18 L 23 16 z M 23 20 L 24 20 C 24.552 20 25 20.448 25 21 C 25 21.552 24.552 22 24 22 L 23 22 L 23 20 z"></path></svg>
                </div>
            </div>

            <div class="h-order-search flex justify-between items-center">
                <div class="search">
                    <input type="text" placeholder="Filter Cancelled Orders">

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>

                </div>

                <div class="date-filter">
                    <Datepicker v-model="date" :clearable="false" required :format="format" range :enableTimePicker="false" :maxDate="new Date()"/>
                </div>
            </div>

            <div class="cancelled-table table custom-scroll blur-effect-down">
                <table class="w-full">
                    <thead>
                        <th>
                            <span>
                                <p>STOCK</p>
                                
                            </span>
                        </th>
                        <th>
                            <span>
                                <p>CREATED</p>
                                
                            </span>
                        </th>
                        <th>
                            <span>
                                <p>CANCELLED</p>
                                
                            </span>
                        </th>
                        
                        <th>
                            <span>
                                <p>QTY</p>
                                
                            </span>
                        </th>
                        <th>
                            <span>
                                <p>BUY</p>
                                
                            </span>
                        </th>
                        <th>
                            <span>
                                <p>SELL</p>
                                
                            </span>
                        </th>

                        <th>
                            <span>
                                <p>
                                P & L
                                </p>
                                
                            </span>
                        </th>
                        
                        <th>
                            <span>
                                <p>BR</p>
                            </span>
                        </th>
                        <th>
                            <span>
                                <p>AMT</p>
                            </span>
                        </th>
                        
                    </thead>
                    <tbody>
                        <tr>
                            <td class="stock">
                                <span>
                                    NIFTY21OCTFUT
                                </span>
                            </td>

                            <td class="created">
                                <span>
                                    <div class="date">12 JAN 2022</div>
                                    <div class="time">11:15:25 AM</div>
                                </span>
                            </td>

                            <td class="exited">
                                <span>
                                    <div class="date">12 JAN 2022</div>
                                    <div class="time">02:35:45 PM</div>
                                </span>
                            </td> 

                            <td class="qty">
                                <span>4500</span>
                            </td>

                            <td class="buy">
                                <span>452.55</span>
                            </td>

                            <td class="sell">
                                <span>462.55</span>
                            </td>

                            <td class="pnl-green pnl">
                                <span>800.65</span>
                            </td>

                            <td class="brokerage-green brokerage">
                                <span>400.45</span>
                            </td>

                            <td class="amount-red amount">
                                <span>600.67</span>
                            </td>
                                                    
                        </tr>

                        <tr>
                            <td class="stock">
                                <span>
                                    NIFTY21OCTFUT
                                </span>
                            </td>

                            <td class="created">
                                <span>
                                    <div class="date">12 JAN 2022</div>
                                    <div class="time">11:15:25 AM</div>
                                </span>
                            </td>

                            <td class="exited">
                                <span>
                                    <div class="date">12 JAN 2022</div>
                                    <div class="time">02:35:45 PM</div>
                                </span>
                            </td> 

                            <td class="qty">
                                <span>4500</span>
                            </td>

                            <td class="buy">
                                <span>452.55</span>
                            </td>

                            <td class="sell">
                                <span>462.55</span>
                            </td>

                            <td class="pnl-red pnl">
                                <span>800.65</span>
                            </td>

                            <td class="brokerage-green brokerage">
                                <span>400.45</span>
                            </td>

                            <td class="amount-red amount">
                                <span>600.67</span>
                            </td>
                                                    
                        </tr>

                    </tbody>
                </table>
            </div>

            <!-- ---------- MOBILE CANCELLED ORDERS -------- -->

            <div class="hidden mobile-cancelled mobile-orders-container custom-scroll blur-effect-down">
                <div class="orders-box">
                    <div class="name">
                        <span>NIFTY21OCTFUT x 1000</span>
                    </div>
                    <div class="pnl text-red">10,000</div>

                    <div class="buy">
                        <div class="text">Buy</div>
                        <div>480.65</div>
                    </div>

                    <div class="amount">
                        <div class="text">Amount</div>
                        <div>465.54</div>
                    </div>

                    <div class="sell">
                        <div class="text">Sell</div>
                        <div>480.65</div>
                    </div>

                    <div class="created">
                        <div class="text">Created</div>
                        <div class="date">12 JAN 2022</div>
                        <div class="time">11:15:25 AM</div>
                    </div>

                    <div class="brokerage">
                        <div class="text">Brokerage</div>
                        <div>485.45</div>
                    </div>

                    <div class="cancelled">
                        <div class="text">Cancelled</div>
                        <div class="date">12 JAN 2022</div>
                        <div class="time">11:15:25 AM</div>
                    </div>
                </div>
            </div>

        </div>

        <div v-if="htab == 3" class="h-completed tab-box">
            <div class="holdings-text">
                <div class="flex items-center text">
                    <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M480 496H48a32 32 0 01-32-32V32a16 16 0 0132 0v432h432a16 16 0 010 32z"/><path d="M156 432h-40a36 36 0 01-36-36V244a36 36 0 0136-36h40a36 36 0 0136 36v152a36 36 0 01-36 36zM300 432h-40a36 36 0 01-36-36V196a36 36 0 0136-36h40a36 36 0 0136 36v200a36 36 0 01-36 36zM443.64 432h-40a36 36 0 01-36-36V132a36 36 0 0136-36h40a36 36 0 0136 36v264a36 36 0 01-36 36z"/></svg>

                    <span class="ml-4">Completed Orders</span>
                </div>

                <div class="download-excel">
                    <p>Export</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 30 30"><path d="M 15 3 A 2 2 0 0 0 14.599609 3.0429688 L 14.597656 3.0410156 L 4.6289062 5.0351562 L 4.6269531 5.0371094 A 2 2 0 0 0 3 7 L 3 23 A 2 2 0 0 0 4.6289062 24.964844 L 14.597656 26.958984 A 2 2 0 0 0 15 27 A 2 2 0 0 0 17 25 L 17 5 A 2 2 0 0 0 15 3 z M 19 5 L 19 8 L 21 8 L 21 10 L 19 10 L 19 12 L 21 12 L 21 14 L 19 14 L 19 16 L 21 16 L 21 18 L 19 18 L 19 20 L 21 20 L 21 22 L 19 22 L 19 25 L 25 25 C 26.105 25 27 24.105 27 23 L 27 7 C 27 5.895 26.105 5 25 5 L 19 5 z M 23 8 L 24 8 C 24.552 8 25 8.448 25 9 C 25 9.552 24.552 10 24 10 L 23 10 L 23 8 z M 6.1855469 10 L 8.5878906 10 L 9.8320312 12.990234 C 9.9330313 13.234234 10.013797 13.516891 10.091797 13.837891 L 10.125 13.837891 C 10.17 13.644891 10.258531 13.351797 10.394531 12.966797 L 11.785156 10 L 13.972656 10 L 11.359375 14.955078 L 14.050781 19.998047 L 11.716797 19.998047 L 10.212891 16.740234 C 10.155891 16.625234 10.089203 16.393266 10.033203 16.072266 L 10.011719 16.072266 C 9.9777187 16.226266 9.9105937 16.458578 9.8085938 16.767578 L 8.2949219 20 L 5.9492188 20 L 8.7324219 14.994141 L 6.1855469 10 z M 23 12 L 24 12 C 24.552 12 25 12.448 25 13 C 25 13.552 24.552 14 24 14 L 23 14 L 23 12 z M 23 16 L 24 16 C 24.552 16 25 16.448 25 17 C 25 17.552 24.552 18 24 18 L 23 18 L 23 16 z M 23 20 L 24 20 C 24.552 20 25 20.448 25 21 C 25 21.552 24.552 22 24 22 L 23 22 L 23 20 z"></path></svg>
                </div>
            </div>

            <div class="h-order-search flex justify-between items-center">
                <div class="search">
                    <input type="text" placeholder="Filter Completed Orders">

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>

                </div>

                <div class="date-filter">
                    <Datepicker v-model="date" :clearable="false" required :format="format" range :enableTimePicker="false" :maxDate="new Date()"/>
                </div>
            </div>

            <div class="completed-table table custom-scroll blur-effect-down">
                <table class="w-full">
                    <thead>
                        <th>
                            <span>
                                <p>STOCK</p>
                                
                            </span>
                        </th>
                        <th>
                            <span>
                                <p>CREATED</p>
                                
                            </span>
                        </th>
                        <th>
                            <span>
                                <p>EXITED</p>
                                
                            </span>
                        </th>
                        
                        <th>
                            <span>
                                <p>QTY</p>
                                
                            </span>
                        </th>
                        <th>
                            <span>
                                <p>BUY</p>
                                
                            </span>
                        </th>
                        <th>
                            <span>
                                <p>SELL</p>
                                
                            </span>
                        </th>

                        <th>
                            <span>
                                <p>
                                P & L
                                </p>
                                
                            </span>
                        </th>
                        
                        <th>
                            <span>
                                <p>BR</p>
                            </span>
                        </th>
                        <th>
                            <span>
                                <p>AMT</p>
                            </span>
                        </th>
                        
                    </thead>
                    <tbody>
                        <tr>
                            <td class="stock">
                                <span>
                                    NIFTY21OCTFUT
                                </span>
                            </td>

                            <td class="created">
                                <span>
                                    <div class="date">12 JAN 2022</div>
                                    <div class="time">11:15:25 AM</div>
                                </span>
                            </td>

                            <td class="exited">
                                <span>
                                    <div class="date">12 JAN 2022</div>
                                    <div class="time">02:35:45 PM</div>
                                </span>
                            </td> 

                            <td class="qty">
                                <span>4500</span>
                            </td>

                            <td class="buy">
                                <span>452.55</span>
                            </td>

                            <td class="sell">
                                <span>462.55</span>
                            </td>

                            <td class="pnl-green pnl">
                                <span>800.65</span>
                            </td>

                            <td class="brokerage-green brokerage">
                                <span>400.45</span>
                            </td>

                            <td class="amount-red amount">
                                <span>600.67</span>
                            </td>
                                                    
                        </tr>

                        <tr>
                            <td class="stock">
                                <span>
                                    NIFTY21OCTFUT
                                </span>
                            </td>

                            <td class="created">
                                <span>
                                    <div class="date">12 JAN 2022</div>
                                    <div class="time">11:15:25 AM</div>
                                </span>
                            </td>

                            <td class="exited">
                                <span>
                                    <div class="date">12 JAN 2022</div>
                                    <div class="time">02:35:45 PM</div>
                                </span>
                            </td> 

                            <td class="qty">
                                <span>4500</span>
                            </td>

                            <td class="buy">
                                <span>452.55</span>
                            </td>

                            <td class="sell">
                                <span>462.55</span>
                            </td>

                            <td class="pnl-red pnl">
                                <span>800.65</span>
                            </td>

                            <td class="brokerage-green brokerage">
                                <span>400.45</span>
                            </td>

                            <td class="amount-red amount">
                                <span>600.67</span>
                            </td>
                                                    
                        </tr>

                    </tbody>
                </table>
            </div>

            <!-- ---------- MOBILE COMPLETED ORDERS -------- -->

            <div class="hidden mobile-completed mobile-orders-container custom-scroll blur-effect-down">
                <div class="orders-box">
                    <div class="name">
                        <span>NIFTY21OCTFUT x 1000</span>
                    </div>
                    <div class="pnl text-green">10,000</div>

                    <div class="buy">
                        <div class="text">Buy</div>
                        <div>480.65</div>
                    </div>

                    <div class="amount">
                        <div class="text">Amount</div>
                        <div>465.54</div>
                    </div>

                    <div class="sell">
                        <div class="text">Sell</div>
                        <div>480.65</div>
                    </div>

                    <div class="created">
                        <div class="text">Created</div>
                        <div class="date">12 JAN 2022</div>
                        <div class="time">11:15:25 AM</div>
                    </div>

                    <div class="brokerage">
                        <div class="text">Brokerage</div>
                        <div>485.45</div>
                    </div>

                    <div class="cancelled">
                        <div class="text">Exited</div>
                        <div class="date">12 JAN 2022</div>
                        <div class="time">11:15:25 AM</div>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="htab == 4" class="h-history tab-box">
            <div class="holdings-text">
                <div class="flex items-center text">
                    <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M480 496H48a32 32 0 01-32-32V32a16 16 0 0132 0v432h432a16 16 0 010 32z"/><path d="M156 432h-40a36 36 0 01-36-36V244a36 36 0 0136-36h40a36 36 0 0136 36v152a36 36 0 01-36 36zM300 432h-40a36 36 0 01-36-36V196a36 36 0 0136-36h40a36 36 0 0136 36v200a36 36 0 01-36 36zM443.64 432h-40a36 36 0 01-36-36V132a36 36 0 0136-36h40a36 36 0 0136 36v264a36 36 0 01-36 36z"/></svg>

                    <span class="ml-4">History</span>
                </div>
            </div>

            <div class="h-order-search flex justify-between items-center">
                <div class="search">
                    <input type="text" placeholder="Filter History">

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>

                </div>

                <div class="date-filter">
                    <Datepicker v-model="date" :clearable="false" required :format="format" range :enableTimePicker="false" :maxDate="new Date()"/>
                </div>
            </div>

            <div class="history-table table custom-scroll blur-effect-down">
                <table class="w-full">
                    <thead>
                        <th>
                            <span>
                                <p>STOCK</p>
                                
                            </span>
                        </th>
                        <th>
                            <span>
                                <p>ACTION</p>
                                
                            </span>
                        </th>
                        
                        <th>
                            <span>
                                <p>QUANTITY</p>
                                
                            </span>
                        </th>
                        <th>
                            <span>
                                <p>PRICE</p>
                                
                            </span>
                        </th>
                        <th>
                            <span>
                                <p>STATUS</p>
                                
                            </span>
                        </th>

                        <th>
                            <span>
                                <p>
                                DATE & TIME
                                </p>
                                
                            </span>
                        </th>
                        
                    </thead>
                    <tbody>
                        <tr>
                            <td class="stock">
                                <span>
                                    NIFTY21OCTFUT
                                </span>
                            </td>

                            <td class="buy-sell">
                                <span class="buy-tag">
                                </span>
                            </td>

                            <td class="qty">
                                <span>4500</span>
                            </td>

                            <td class="price">
                                <span>452.55</span>
                            </td>

                            <td class="status">
                                <span class="manual-tag"></span>
                            </td>

                            <td class="date-time">
                                <span>
                                    <div class="date">12 JAN 2022</div>
                                    <div class="time">11:15:25 AM</div>
                                </span>
                            </td>
                                                    
                        </tr>

                        <tr>
                            <td class="stock">
                                <span>
                                    NIFTY21OCTFUT
                                </span>
                            </td>

                            <td class="buy-sell">
                                <span class="sell-tag">
                                </span>
                            </td>

                            <td class="qty">
                                <span>4500</span>
                            </td>

                            <td class="price">
                                <span>452.55</span>
                            </td>

                            <td class="status">
                                <span class="limit-tag"></span>
                            </td>

                            <td class="date-time">
                                <span>
                                    <div class="date">12 JAN 2022</div>
                                    <div class="time">11:15:25 AM</div>
                                </span>
                            </td>
                                                    
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- ---------- MOBILE HISTORY -------- -->

            <div class="hidden mobile-history mobile-orders-container custom-scroll blur-effect-down">
                <div class="orders-box">
                    <div class="name">
                        <span class="buy">NIFTY21OCTFUT x 1000</span>
                    </div>

                    <div class="status">
                        <span class="manual-tag"></span>
                    </div>

                    <div class="price">
                        <div class="text">Price</div>
                        <div>480.65</div>
                    </div>

                    <div class="date">
                        <div class="text">Date</div>
                        <div>12 JAN 2022</div>
                    </div>

                    <div class="time">
                        <div class="text">Time</div>
                        <div>11:15:25 AM</div>
                    </div>
                </div>

                <div class="orders-box">
                    <div class="name">
                        <span class="sell">NIFTY21OCTFUT x 1000</span>
                    </div>

                    <div class="status">
                        <span class="limit-tag"></span>
                    </div>

                    <div class="price">
                        <div class="text">Price</div>
                        <div>480.65</div>
                    </div>

                    <div class="date">
                        <div class="text">Date</div>
                        <div>12 JAN 2022</div>
                    </div>

                    <div class="time">
                        <div class="text">Time</div>
                        <div>11:15:25 AM</div>
                    </div>
                </div>
            </div>
        </div>

    </body>
</template>
<script>
import { ref} from 'vue';
import Datepicker from 'vue3-date-time-picker';
import 'vue3-date-time-picker/dist/main.css';
    export default{
        components: { Datepicker },
        setup(){
            const htab = ref(1);
            const today = new Date();
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1)
            const date = ref([yesterday,today]);
            const format = (data) => {
                return `${data[0].toLocaleDateString()} - ${data[1].toLocaleDateString()}`
            }
            return {
                htab,date,format
            }
        }
        
    };
</script>
<style>

    body{
        font-family: "Lato", sans-serif !important;
    }

    .h-body{
        background: rgb(29 29 29);        
    }

    .dp__input{
        background: transparent !important;
        border: none;
        width: 235px;
        color: white;
        padding-top: 12px;
        padding-bottom: 13px;
    }
    .dp__theme_light{
        border: none !important;
    }
    .dp__calendar_header_separator{
        background: rgb(250 250 250/0.1);
    }
    .dp__calendar_wrapper{
        background: rgb(40 40 40) !important;
    }
    .dp__action_row{
        background: rgb(60 60 60);
    }
    .dp__arrow_top{
        background: rgb(150 150 150);
        border: none;
    }
    .dp__cell_inner ,  .dp__month_year_row , .dp__selection_preview{
        color: white;
    }
    .dp__cell_disabled{
        color: rgb(250 250 250/0.4);
    }
    .dp__calendar_header_item{
        color: #00bcd4e8;
    }
    .dp__range_between{
        background: rgb(65 65 65);
        border: none;
    }
    .dp__overlay_row{
        background: rgb(55 55 55);
        color: white;
    }
    .dp__button{
        background: rgb(70 70 70);
        color: rgb(250 250 250/0.5);
    }

    .date-filter::-webkit-scrollbar-track{
        background: rgb(55 55 55) !important;
    }
    .date-filter::-webkit-scrollbar-thumb:hover{
        background: rgb(250 250 250/0.8);
    }
    .h-inside-navbar , .tab-box{
        width: 1366px;
        max-width: 100vw;
        margin: 0 auto;
    }
    .h-body{
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        color: white;
    }
    .h-navbar{
        background: var(--black1);
    }

    .h-inside-navbar{
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 55px;
        padding: 0 2rem;
    }
    .h-navbar ul{
        display: flex;
    }

    .h-onyx-name .text{
        display: flex;
        font-weight: 600;
        font-size: 20px;
    }
    .h-navbar ul{
        height: 100%;
    }
    .h-navbar ul li{
        margin-right: 25px;
        height: 100%;
        display: flex;
        align-items: center;
        position: relative;
        cursor: pointer;
    }
    .h-navbar .orders{
        font-weight: 500;
        font-size: 16px;
        color: #00bcd4;
        position: relative;
    }
    .h-navbar ul .active::before{
        content: "";
        position: absolute;
        bottom: 0;
        height: 2px;
        width: 100%;
        background: white;
        border-radius: 20px;
    } 
    .tab-box{
        flex-grow: 1;
        padding: 2rem;
        padding-right: 1rem;
        border-left: 1px solid rgb(250 250 250/0.1);
        border-right: 1px solid rgb(250 250 250/0.1);
        background: var(--black2);
        /* box-shadow: 0 0 10px rgb(0 0 0/0.5); */
    }
    .holdings-text{
        padding-bottom: 1.5rem;
        margin-right: 1rem;
        border-bottom: 1px solid rgb(250 250 250/0.1);
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .holdings-text .text svg{
        height: 28px;
        width: 28px;
        fill: white;
    }
    .holdings-text span{
        font-size: 25px;
    }

    .h-order-search{
        padding: 1.5rem 0;
        font-size: 17px;
        margin-right: 1rem;
    }
    .h-order-search .search{
        display: flex;
        align-items: center;
        border-bottom: 1px solid rgb(250 250 250/0.1);
        padding: 0 10px;
    }
    .h-order-search .search svg{
        height: 20px;
        width: 20px;
        color: rgb(250 250 250/0.9);
    }
    .h-order-search .search input{
        background: transparent;
        color: white;
        padding: 12px 0;
        width: 300px;
    }

    .h-order-search .search input::placeholder{
        color: rgb(250 250 250/0.9);
    }
    .date-filter{
        border-bottom: 1px solid rgb(250 250 250/0.1);
    }

    .table{
        text-align: center;
        width: 100%;
        overflow-y: auto ;
        position: relative;
        height: calc(100vh - 280px);
        padding-right: 1rem;
    }
    .table tbody tr:nth-child(2){
        background: rgb(30 30 30);
    }

    .table tbody tr{
        border-bottom: 1px solid rgb(250 250 250/0.1);
    }

    .table span{
        display: inline-block;
        text-align: center;
        align-items: center;
    }
    .table .time{
        font-size: 14px;
        color: rgb(250 250 250/0.6);
    }
    .table td , .table th{
        padding: 10px 0;
    }
    .table th{
        font-size: 15px;
        color: rgb(250 250 250/0.7);
        font-weight: 600;
        position: sticky;
        top: 0;
        z-index: 1;
        background: var(--black2);
    }
    .table th span{
        display: inline-flex;
    }
    .table th p{
        margin: 0 8px;
    }
    .table th svg{
        height: 10px;
        fill: rgb(250 250 250/0.5);
    }
    .table th svg:first-child{
        transform: translateY(1.5px);
    }
    .table th svg:last-child{
        transform: rotate(180deg) translateY(1.5px);
    }
    .table tbody .pnl-green span{
        padding: 3px 9px;
        background: rgb(16 185 129/0.2);
        color: rgb(0 255 0);
        position: relative;
        /* border-top: 1.5px solid rgb(0 255 0); */
        border-radius: 6px;
    }
    .table tbody .pnl-red span{
        background: rgb(239 68 68/0.2);
        padding: 3px 9px;
        color: red;
        /* border-right: 1.8px solid red; */
        border-radius: 6px;
        position: relative;
    }
    .table .pnl-green , .table .brokerage-green , .table .amount-green{
        color: rgb(0 255 0);
    }
    .table .pnl-red , .table .brokerage-red , .table .amount-red{
        color: red;
    }
    .download-excel{
        @apply bg-gradient-to-br from-green-600 to-green-700;
        display: flex;
        align-items: center;
        height: min-content;
        padding: 2px 8px;
        border-radius: 5px;
        cursor: pointer;
    }
    .download-excel svg{
        height: 20px;
        width: 20px;
        margin-left: 8px;
    }
    .download-excel p{
        margin-bottom: 1px;
    }

    .husername::before{
        content: "";
        position: absolute;
        height: 50%;
        left: 5px;
        width: 1px;
        background: rgb(40 40 40);
    }

    .buy-tag,
    .sell-tag,
    .sl-tag,
    .target-tag,
    .market-tag,
    .limit-tag,
    .manual-tag {
    @apply bg-green-600;
    display: inline-flex !important;
    justify-content: center;
    align-items: center;
    color: white;
    padding: 1px 6px;
    border-radius: 4px;
    font-size: 15px;
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
    /* transform: scale(0.85); */
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
    @apply bg-indigo-700;
    }
    .market-tag {
    @apply bg-purple-700;
    }
    .limit-tag {
    @apply bg-pink-600;
    }
    .target-tag {
    @apply bg-blue-600;
    }
    .sl-tag {
    @apply bg-yellow-600;
    }
    .sell-tag {
    @apply bg-red-600;
    }
    .buy-tag:before {
    content: "Buy";
    }
    .sell-tag:before {
    content: "Sell";
}
.mobile-orders-container{
    padding-right: 1rem;
    overflow-y: auto;
    height: calc(100vh - 310px);
}
.orders-box{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    place-items: center;
    border-radius: 10px;
    border-top: 1px solid rgb(250 250 250/0.1);
    border-left: 1px solid rgb(250 250 250/0.1);
    box-shadow: 0 8px 15px rgb(0 0 0 / 50%);
    text-align: center;
    margin: 0 5px 16px 5px;
    height: min-content;
}
.orders-box > div{
    padding: 10px 0;
}
.orders-box .pnl{
    font-size: 19px;
}
.orders-box .name{
    grid-column: 1 / span 2;
    justify-self: start;
}
.orders-box .text{
    font-size: 13px;
    color: rgb(250 250 250/0.5);
}
.orders-box .time{
    font-size: 14px;
    color: rgb(250 250 250/0.6);
}
.mobile-history .orders-box .time{
    font-size: unset;
    color: unset;
}
.orders-box .name span{
    padding: 3px 10px;
    border-radius: 30px 30px 30px 0;
    position: relative;
    left: -5px;
    border: 1px solid rgb(250 250 250/0.1);
    white-space: nowrap;
    letter-spacing: 0.8px;
    font-weight: 500;
    background: rgb(93 93 93);
}
.orders-box .name .buy{
    background: green;
}
.orders-box .name span::before{
    content: "";
    position: absolute;
    height: 10px;
    width: 5px;
    left: -1px;
    bottom: -11px;
    border-radius: 30px 0 0 30px;
    z-index: 2;
    border: 1px solid rgb(250 250 250/0.1);
    border-right: none;
    background: rgb(50 50 50);
}
.orders-box .name .buy::before{
    @apply bg-green-900;
}
.orders-box .name span::after{
    content: "";
    position: absolute;
    height: 5px;
    width: 5px;
    bottom: -6px;
    left: -1px;
    border-left: 1px solid rgb(250 250 250/0.1);
    /*background: rgb(250 250 250/0.3);*/
    background: rgb(93 93 93);
}
.orders-box .name .buy::after{
  background: green;   
}
.orders-box .name .sell::before{
  @apply bg-red-900;
}
.orders-box .name .sell , .orders-box .name .sell::after{
    @apply bg-red-700 ;
}

@media screen and (max-width: 750px){
    .h-onyx-name , .husername , .table{
        display: none !important;
    }
    .mobile-orders-container{
        display: grid !important;
    }
    .h-inside-navbar{
        justify-content: center;
    }
    .h-order-search{
        flex-direction: column;
    }
    .h-order-search .search{
        width: 100%;
        justify-content: space-between;
    }
    .h-inside-navbar{
        padding: 0;
    }
    .h-navbar ul{
        width: 100%;
        justify-content: space-evenly;
    }
    .h-navbar ul li{
        margin: 0;
    }
    .date-filter{
        margin-top: 15px;
    }
    .dp__input{
        padding-bottom: 10px;
    }
    .tab-box{
        padding: 1rem 0;
    }
    .holdings-text , .h-order-search{
        margin: 0 1rem;
    }
    .mobile-orders-container{
        padding: 0;
        margin: 0 13px;
        margin-right: 6px;
        padding-right: 7px;
    }
}

</style>