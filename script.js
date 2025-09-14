class PhilippineCalendar {
    constructor() {
        this.currentMonth = 0; // January
        this.currentYear = 2023; // Start with 2023
        this.minYear = 2023;
        this.maxYear = 2024;
        this.today = new Date();
        this.holidays = this.getPhilippineHolidays();
        
        this.initializeElements();
        this.setupEventListeners();
        this.renderCalendar();
    }

    initializeElements() {
        this.monthYearElement = document.getElementById('monthYear');
        this.calendarBody = document.getElementById('calendar-body');
        this.prevButton = document.getElementById('prevMonth');
        this.nextButton = document.getElementById('nextMonth');
        this.modal = document.getElementById('holidayModal');
        this.modalTitle = document.getElementById('modalTitle');
        this.modalImage = document.getElementById('modalImage');
        this.modalDescription = document.getElementById('modalDescription');
        this.modalDate = document.getElementById('modalDate');
        this.closeModal = document.querySelector('.close');
    }

    getPhilippineHolidays() {
        return {
            // 2023 Holidays
            '2023-01-01': {
                name: 'New Year\'s Day',
                description: 'New Year\'s Day marks the beginning of the new year. In the Philippines, it is celebrated with family gatherings, fireworks, and the tradition of making loud noises to ward off evil spirits. Many Filipinos attend midnight mass and prepare special foods like round fruits to symbolize prosperity.',
                image: 'https://images.pexels.com/photos/1303081/pexels-photo-1303081.jpeg'
            },
            '2023-04-06': {
                name: 'Maundy Thursday',
                description: 'Maundy Thursday commemorates the Last Supper of Jesus Christ with his disciples. In the Philippines, this is observed with solemnity and religious services. Many Filipinos participate in the "Visita Iglesia" tradition, visiting seven churches to pray and reflect.',
                image: 'https://images.pexels.com/photos/208339/pexels-photo-208339.jpeg'
            },
            '2023-04-07': {
                name: 'Good Friday',
                description: 'Good Friday commemorates the crucifixion of Jesus Christ. This is one of the most solemn days in the Philippine Christian calendar. Many Filipinos participate in the "Pabasa" (continuous reading of Christ\'s Passion), processions, and some even engage in actual crucifixion reenactments.',
                image: 'https://images.pexels.com/photos/372326/pexels-photo-372326.jpeg'
            },
            '2023-04-09': {
                name: 'Araw ng Kagitingan (Day of Valor)',
                description: 'Araw ng Kagitingan honors the fall of Bataan during World War II and pays tribute to the Filipino and American soldiers who fought against Japanese forces. The day commemorates the courage and sacrifice of those who participated in the Bataan Death March.',
                image: 'https://images.pexels.com/photos/3692748/pexels-photo-3692748.jpeg'
            },
            '2023-05-01': {
                name: 'Labor Day',
                description: 'Labor Day celebrates the contributions of workers and the labor movement. In the Philippines, this day is marked by parades, rallies, and demonstrations by various labor groups advocating for workers\' rights and better working conditions.',
                image: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg'
            },
            '2023-06-12': {
                name: 'Independence Day',
                description: 'Philippine Independence Day commemorates the declaration of Philippine independence from Spanish colonial rule on June 12, 1898. The day is celebrated with flag-raising ceremonies, parades, cultural shows, and displays of national pride across the country.',
                image: 'https://images.pexels.com/photos/3692741/pexels-photo-3692741.jpeg'
            },
            '2023-08-28': {
                name: 'National Heroes Day',
                description: 'National Heroes Day honors all the heroes who fought for Philippine freedom and independence. Celebrated on the last Monday of August, this day pays tribute to both known and unknown heroes who sacrificed their lives for the country\'s liberation.',
                image: 'https://images.pexels.com/photos/3692755/pexels-photo-3692755.jpeg'
            },
            '2023-11-30': {
                name: 'Bonifacio Day',
                description: 'Bonifacio Day honors Andrés Bonifacio, known as the "Father of the Philippine Revolution." He founded the Katipunan, a secret society that fought against Spanish colonial rule. This day celebrates his contributions to Philippine independence.',
                image: 'https://images.pexels.com/photos/3692759/pexels-photo-3692759.jpeg'
            },
            '2023-12-25': {
                name: 'Christmas Day',
                description: 'Christmas Day celebrates the birth of Jesus Christ. In the Philippines, Christmas is the most celebrated holiday, with festivities starting as early as September. Filipino families gather for Noche Buena (Christmas Eve dinner) and exchange gifts.',
                image: 'https://images.pexels.com/photos/264983/pexels-photo-264983.jpeg'
            },
            '2023-12-30': {
                name: 'Rizal Day',
                description: 'Rizal Day commemorates the execution of Dr. José Rizal, the national hero of the Philippines. Rizal was executed by Spanish colonial authorities on December 30, 1896. His writings and sacrifice inspired the Philippine Revolution against Spanish rule.',
                image: 'https://images.pexels.com/photos/3692760/pexels-photo-3692760.jpeg'
            },
            // 2024 Holidays
            '2024-01-01': {
                name: 'New Year\'s Day',
                description: 'New Year\'s Day marks the beginning of the new year. In the Philippines, it is celebrated with family gatherings, fireworks, and the tradition of making loud noises to ward off evil spirits. Many Filipinos attend midnight mass and prepare special foods like round fruits to symbolize prosperity.',
                image: 'https://images.pexels.com/photos/1303081/pexels-photo-1303081.jpeg'
            },
            '2024-02-10': {
                name: 'Chinese New Year',
                description: 'Chinese New Year is widely celebrated in the Philippines due to the significant Chinese-Filipino community. It\'s marked by dragon dances, fireworks, family reunions, and the exchange of ang pao (red envelopes with money). Many businesses close to observe this important cultural celebration.',
                image: 'https://images.pexels.com/photos/1916821/pexels-photo-1916821.jpeg'
            },
            '2024-02-25': {
                name: 'EDSA People Power Revolution Anniversary',
                description: 'This day commemorates the peaceful revolution that took place in 1986, which led to the end of Ferdinand Marcos\' dictatorship. The four-day revolution along EDSA (Epifanio de los Santos Avenue) restored democracy to the Philippines through non-violent means.',
                image: 'https://images.pexels.com/photos/3692748/pexels-photo-3692748.jpeg'
            },
            '2024-03-28': {
                name: 'Maundy Thursday',
                description: 'Maundy Thursday commemorates the Last Supper of Jesus Christ with his disciples. In the Philippines, this is observed with solemnity and religious services. Many Filipinos participate in the "Visita Iglesia" tradition, visiting seven churches to pray and reflect.',
                image: 'https://images.pexels.com/photos/208339/pexels-photo-208339.jpeg'
            },
            '2024-03-29': {
                name: 'Good Friday',
                description: 'Good Friday commemorates the crucifixion of Jesus Christ. This is one of the most solemn days in the Philippine Christian calendar. Many Filipinos participate in the "Pabasa" (continuous reading of Christ\'s Passion), processions, and some even engage in actual crucifixion reenactments.',
                image: 'https://images.pexels.com/photos/372326/pexels-photo-372326.jpeg'
            },
            '2024-04-09': {
                name: 'Araw ng Kagitingan (Day of Valor)',
                description: 'Araw ng Kagitingan honors the fall of Bataan during World War II and pays tribute to the Filipino and American soldiers who fought against Japanese forces. The day commemorates the courage and sacrifice of those who participated in the Bataan Death March.',
                image: 'https://images.pexels.com/photos/3692748/pexels-photo-3692748.jpeg'
            },
            '2024-05-01': {
                name: 'Labor Day',
                description: 'Labor Day celebrates the contributions of workers and the labor movement. In the Philippines, this day is marked by parades, rallies, and demonstrations by various labor groups advocating for workers\' rights and better working conditions.',
                image: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg'
            },
            '2024-06-12': {
                name: 'Independence Day',
                description: 'Philippine Independence Day commemorates the declaration of Philippine independence from Spanish colonial rule on June 12, 1898. The day is celebrated with flag-raising ceremonies, parades, cultural shows, and displays of national pride across the country.',
                image: 'https://images.pexels.com/photos/3692741/pexels-photo-3692741.jpeg'
            },
            '2024-08-26': {
                name: 'National Heroes Day',
                description: 'National Heroes Day honors all the heroes who fought for Philippine freedom and independence. Celebrated on the last Monday of August, this day pays tribute to both known and unknown heroes who sacrificed their lives for the country\'s liberation.',
                image: 'https://images.pexels.com/photos/3692755/pexels-photo-3692755.jpeg'
            },
            '2024-11-01': {
                name: 'All Saints\' Day',
                description: 'All Saints\' Day is a significant religious holiday in the Philippines when families visit cemeteries to honor and remember their deceased loved ones. Filipinos clean graves, offer flowers and candles, and spend time in prayer and remembrance.',
                image: 'https://images.pexels.com/photos/1666816/pexels-photo-1666816.jpeg'
            },
            '2024-11-30': {
                name: 'Bonifacio Day',
                description: 'Bonifacio Day honors Andrés Bonifacio, known as the "Father of the Philippine Revolution." He founded the Katipunan, a secret society that fought against Spanish colonial rule. This day celebrates his contributions to Philippine independence.',
                image: 'https://images.pexels.com/photos/3692759/pexels-photo-3692759.jpeg'
            },
            '2024-12-25': {
                name: 'Christmas Day',
                description: 'Christmas Day celebrates the birth of Jesus Christ. In the Philippines, Christmas is the most celebrated holiday, with festivities starting as early as September. Filipino families gather for Noche Buena (Christmas Eve dinner) and exchange gifts.',
                image: 'https://images.pexels.com/photos/264983/pexels-photo-264983.jpeg'
            },
            '2024-12-30': {
                name: 'Rizal Day',
                description: 'Rizal Day commemorates the execution of Dr. José Rizal, the national hero of the Philippines. Rizal was executed by Spanish colonial authorities on December 30, 1896. His writings and sacrifice inspired the Philippine Revolution against Spanish rule.',
                image: 'https://images.pexels.com/photos/3692760/pexels-photo-3692760.jpeg'
            }
        };
    }

    setupEventListeners() {
        this.prevButton.addEventListener('click', () => this.previousMonth());
        this.nextButton.addEventListener('click', () => this.nextMonth());
        this.closeModal.addEventListener('click', () => this.closeHolidayModal());
        
        window.addEventListener('click', (event) => {
            if (event.target === this.modal) {
                this.closeHolidayModal();
            }
        });
    }

    previousMonth() {
        this.currentMonth--;
        if (this.currentMonth < 0) {
            if (this.currentYear > this.minYear) {
                this.currentMonth = 11; // December
                this.currentYear--;
            } else {
                this.currentMonth = 0; // Stay in January 2023
            }
        }
        this.renderCalendar();
    }

    nextMonth() {
        this.currentMonth++;
        if (this.currentMonth > 11) {
            if (this.currentYear < this.maxYear) {
                this.currentMonth = 0; // January
                this.currentYear++;
            } else {
                this.currentMonth = 11; // Stay in December 2024
            }
        }
        this.renderCalendar();
    }

    getMonthName(month) {
        const months = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
        return months[month];
    }

    getWeekNumber(date) {
        const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
        const dayNum = d.getUTCDay() || 7;
        d.setUTCDate(d.getUTCDate() + 4 - dayNum);
        const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
        return Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
    }

    isHoliday(dateString) {
        return this.holidays.hasOwnProperty(dateString);
    }

    isToday(date) {
        return date.getDate() === this.today.getDate() &&
               date.getMonth() === this.today.getMonth() &&
               date.getFullYear() === this.today.getFullYear();
    }

    formatDateString(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    openHolidayModal(dateString) {
        const holiday = this.holidays[dateString];
        if (holiday) {
            this.modalTitle.textContent = holiday.name;
            this.modalImage.src = holiday.image;
            this.modalImage.alt = holiday.name;
            this.modalDescription.textContent = holiday.description;
            
            const date = new Date(dateString);
            const options = { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
            };
            this.modalDate.textContent = `Date: ${date.toLocaleDateString('en-US', options)}`;
            
            this.modal.style.display = 'block';
        }
    }

    closeHolidayModal() {
        this.modal.style.display = 'none';
    }

    renderCalendar() {
        // Update month/year display
        this.monthYearElement.textContent = `${this.getMonthName(this.currentMonth)} ${this.currentYear}`;

        // Clear calendar body
        this.calendarBody.innerHTML = '';

        // Get first day of the month
        const firstDay = new Date(this.currentYear, this.currentMonth, 1);
        const lastDay = new Date(this.currentYear, this.currentMonth + 1, 0);
        const daysInMonth = lastDay.getDate();
        const startingDayOfWeek = firstDay.getDay();

        // Get previous month's last days
        const prevMonth = new Date(this.currentYear, this.currentMonth, 0);
        const prevMonthDays = prevMonth.getDate();

        let currentWeek = [];
        let currentWeekNumber = null;

        // Add previous month's trailing days
        for (let i = startingDayOfWeek - 1; i >= 0; i--) {
            const day = prevMonthDays - i;
            const date = new Date(this.currentYear, this.currentMonth - 1, day);
            currentWeek.push({
                day: day,
                date: date,
                isCurrentMonth: false,
                isHoliday: false,
                isToday: false
            });
        }

        // Add current month's days
        for (let day = 1; day <= daysInMonth; day++) {
            const date = new Date(this.currentYear, this.currentMonth, day);
            const dateString = this.formatDateString(date);
            
            if (currentWeek.length === 0 || currentWeek.length === 7) {
                if (currentWeek.length === 7) {
                    this.renderWeek(currentWeek, currentWeekNumber);
                }
                currentWeek = [];
                currentWeekNumber = this.getWeekNumber(date);
            }

            currentWeek.push({
                day: day,
                date: date,
                dateString: dateString,
                isCurrentMonth: true,
                isHoliday: this.isHoliday(dateString),
                isToday: this.isToday(date)
            });
        }

        // Add next month's starting days to complete the last week
        let nextMonthDay = 1;
        while (currentWeek.length < 7) {
            const date = new Date(this.currentYear, this.currentMonth + 1, nextMonthDay);
            currentWeek.push({
                day: nextMonthDay,
                date: date,
                isCurrentMonth: false,
                isHoliday: false,
                isToday: false
            });
            nextMonthDay++;
        }

        // Render the last week
        this.renderWeek(currentWeek, currentWeekNumber);
    }

    renderWeek(weekDays, weekNumber) {
        const weekRow = document.createElement('div');
        weekRow.className = 'week-row';

        // Week number
        const weekNumberCell = document.createElement('div');
        weekNumberCell.className = 'week-number';
        weekNumberCell.textContent = weekNumber || '';
        weekRow.appendChild(weekNumberCell);

        // Days
        weekDays.forEach(dayData => {
            const dayCell = document.createElement('div');
            dayCell.className = 'day';
            
            if (!dayData.isCurrentMonth) {
                dayCell.classList.add('other-month');
            }
            
            if (dayData.isToday) {
                dayCell.classList.add('today');
            }
            
            if (dayData.isHoliday) {
                dayCell.classList.add('holiday');
                dayCell.addEventListener('click', () => {
                    this.openHolidayModal(dayData.dateString);
                });
            }

            const dayNumber = document.createElement('span');
            dayNumber.className = 'day-number';
            dayNumber.textContent = dayData.day;
            dayCell.appendChild(dayNumber);

            weekRow.appendChild(dayCell);
        });

        this.calendarBody.appendChild(weekRow);
    }
}

// Initialize the calendar when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new PhilippineCalendar();
});