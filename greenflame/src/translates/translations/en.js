import React from 'react';

export const en = {
  locale: 'en',
  messages: {
    common: {
      error: {
        attention: 'Attention!',
        idInvalid: 'Your ID number is invalid.',
        couponORCodeInvalid: 'The coupon number or discount code is invalid.',
        clientType: 'Choose type of client.',
        formStep2: 'The marked fields are mandatory.',
        reservationNotFound: 'Reservation not found.',
        reservationCancelled: 'Your reservation has been cancelled',
        airlineIata: 'Choose an airline.',
        airlineFlight: 'Flight number.',
        completeAllFields: 'All fields are mandatory.',
        invalidEmail: 'Invalid email address.',
        canNotPay:
          'A transaction error occurred. Verify your credit/debit card information and try again.',
      },
      validationMessages: {
        codePromotionalSuccess: 'The discount code has been applied to your reservation.',
        couponNumberSuccess: 'The coupon has been applied to your reservation.',
        reservationCancelled: 'Your reservation has been cancelled',
        subscriptionSuccess: 'You have subscribed successfully to our data base.',
      },
      navbar: {
        button: {
          reserve: 'Make a reservation',
        },
        links: {
          promotions: 'Offers',
          searchReservation: 'Find a Reservation',
          travelAgency: 'Travel agents',
          AutoRentaBusiness: 'AutoRenta Business',
          AutoRentaOnTheGo: 'AutoRenta ON THE GO',
        },
        tooltip: 'Soon',
      },
      banner: {
        text: 'Have you tried our new app? Available for iPhone y Android',
      },
      footer: {
        subscribe: 'Subscribe for exclusive offers and deals',
        fullName: 'Name and Last Name',
        email: 'E-mail address',
        register: 'Register ',
        contactUs: 'Contact Us',
        sawgrass: '4000 Ponce de Leon Blvd.',
        suite: 'Suite 470, Coral Gables, FL 33146.',
        info: 'info@autorenta.com',
        clientAttention: 'Customer Service',
        adviser: 'Contact an Online Specialist',
        faq: 'FAQ',
        searchReservation: 'Find a Reservation',
        affiliates: 'Affiliates',
        access: 'Access my Account',
        registerAccount: 'Register an Account',
        promotions: 'Active Promotions',
        aboutUs: 'About AutoRenta',
        politics: 'Cancellation Policy',
        cookies: 'Cookie Policy',
        privacy: 'Privacy Policy',
        copyRight: 'Copyright © 2021 AutoRenta.com is a registered trademark of Mobiility, LLC. All Rights Reserved.',
      },
      loader: {
        searching: 'We are checking the best vehicle options for your selected dates.',
        cancel: 'We are cancelling your reservation, please don´t close this window.',
        creating: 'We are creating your reservation, please wait.',
        booking: 'We are locating your reservation.',
        paying: 'We are processing the payment of your reservation, please don´t close this window.',
      },
      progressBar: {
        startYourSearch: 'Start your search',
        chooseYourPlan: 'Choose your plan',
        confirmYourSearch: 'Confirm your reservation',
      },
      searchReservationModal: {
        title: 'Find a reservation',
        id: 'Travel Agent or Corporate ID',
        checkbox: 'I am a Travel Agency or Company ',
      },
    },
    home: {
      googleModal: {
        title: 'Find a location',
        button: 'SEARCH IN THE AREA',
        notFoundTitle: 'Attention!',
        notFound1: 'There are no Car Rental companies in the selected location.',
        notFound2: 'Please change the location and try again.',
        distance: 'Distance: ',
        officeCode: 'Location Code: ',
        extendedOfficeCode: 'Extended location code: ',
      },
      makeYourReservation: {
        doYourReservationIn: 'Make your reservation with',
        only3Steps: 'only 3 steps',
        placeToPickUp: 'Where do you want to pick up the vehicle?',
        placeToDropOff: 'Where do you want to drop off the vehicle?',
        country: 'Country of residence',
        age: 'Age',
        carType: 'Vehicle type',
        search: 'Search',
        dateToPickUp: 'Date and time of pick up',
        dateToDropOff: 'Date and time of drop off',
        findOnMap: 'Find location on the map',
        years: 'years',
        types: {
          0: 'All vehicles',
          1: 'Small / Mini',
          2: 'Economy',
          3: 'Compact',
          4: 'Intermediate',
          5: 'Standard',
          6: 'Full Size',
          7: 'Premium / Luxury',
          8: 'Sport / Convertible',
          9: 'Minivan / Maxivan',
          10: 'Intermediate SUV ',
          11: 'Standard to Full Size SUV',
          12: 'Premium, Elite and Luxury SUV',
          13: 'Crossover',
          14: 'Economy to Intermediate Station Wagon',
          15: 'Full Size, Premium, Luxury, Elite Station Wagon,',
        },
      },
      offers: {
        mainTitle: 'Discover all the offers and promotions',
        mainTitleMobile: 'Offers and promotions',
        button: 'More information',
      },
    },
    step1: {
      resultMessage:
        'There are no matches for your search. Please try again.',
      activeSearch: {
        title: 'Active Search',
        age: 'Age: ',
        years: ' years',
        modify: 'Modify',
        modifyModal: {
          title: 'Modify search',
        },
      },
      result: {
        showFirst: 'Show recommended vehicles first',
        orderBy: 'Sort by',
        minToMax: 'Price (low to high) ',
        maxToMin: 'Price (hight to low) ',
        dropoff:
          'A One-Way Fee might apply, as pick up and drop off locations are different.',
        carsResult: {
          orSimilar: 'or similar',
          seats: 'seats',
          doors: 'door',
          bigBags: 'large bags',
          smallBags: 'small bags',
          gear: 'Transmission',
          air: 'A/C',
          featured: 'Featured!',
          cancel: 'Free Cancellation if cancelled up to 48 hours prior to the scheduled pick-up time.',
          adviseThin: 'Some car rental companies charge ', 
          adviseStrong: 'a fee for drivers between 21 and 24 years old.',
          additionalInformation: 'Important information',
          seeDetails: 'View rate plan details',
          reserveNow: 'Reseve now',
        },
        filterList: {
          mainTitle: 'Filter results',
          companies: 'CAR RENTAL COMPANY',
          types: 'VEHICLE TYPE',
          seats: 'SEATS',
          bags: 'BAGS',
          gears: 'TRANSMISSION',
          price: 'PRICE',
          moreBags: 'or more bags',
        },
        modalDetailInformation: {
          title: 'View rate details',
          subtitle: 'Rate code:',
        },
        modalAdditionalInformation: {
          title: 'Important information',
          secureTitle: 'Protection and coverages',
          secureText:
            'Most of the rental plans include basic coverages\n' +
            'that relieves you of financial responsibility if the car y damaged or stolen, and against third-party bodily injury and property damage during the rental. There are also optional coverages and protections.',
          franTitle: 'Deductible',
          franText:
            'Deductible is the amount paid out of pocket by the renter, that depending on the coverage can be a fixed amount or a percentage, \n' +
            'when the rented vehicle is damaged or stolen. This amount will depend \n' +
            'on the rented vehicle.',
          depoTitle: 'Credit card hold',
          depoText:
            'At the time of rental, an authorization hold will be secured on the credit card provided by the customer \n' +
            'to cover the estimated rental charges and any additional charges that may be incurred. The amount and/or percentage will \n' +
            'be determined by each car rental company. The car rental company will authorize the release of the set aside amount upon the completion of the rental, but the card issuer´s rules apply for your \n' +
            'account to be credited for the amount.',
          poliTitle: 'Fuel Policy',
          poliText:
            'Most rentals come with a full tank of fuel and the vehicle must be returned with a full tank \n' +
            'except if the rate includes the first fuel tank.  If the car is returned with less fuel, the car rental company will charge the customer for refueling \n' +
            'plus, a service charge.',
          kiloTitle: 'Mileage',
          kiloText:
            'Most of the rental plans include unlimited mileage, however in some cities or vehicle types \n' +
            'only a fixed number of miles is included. In that case customer must pay for the additional miles driven during the period of rental \n' +
            'at the rate indicated in the rental agreement.',
          cardTitle: 'Credit / Debit Card',
          cardText:
            'At the time of rental, the customer must present a valid and accepted credit card with the renters name on the card. \n' +
            'A debit card is not accepted as the authorization hold cannot be reversed and the set aside amount cannot be posted back to the account.',
        },
      },
    },
    step2: {
      details: {
        optionalEquipment: 'Optional equipment & Services',
        baseFee: 'Base rate',
        totalFee: 'Total Fees & Taxes',
        title: 'View rental details',
        selectedPlan: 'SELECTED PLAN',
        changePlan: 'Change plan',
        feeCode: 'Rate code: ',
        additionalEquipment: 'OPTIONAL EQUIPMENT & SERVICES',
        chargesDetail: 'RATE, FEES AND TAXES',
        estimatedTotal: 'ESTIMATED TOTAL',
        text1:
          'At the time of rental, the customer must present a valid and accepted credit card with the renters name on the card.',
        text2:
          'Some car rental companies charge a fee for drivers between 21 and 24 years old.',
        text3:
          'Some fees and taxes might not be included in the base rate. Some of the optional equipment and services can be paid at the destination.',
        agree:
          'I have read, and I accept the terms and conditions of the country and city of rental.',
        confirm: 'Confirm reservation',
      },
      carSelected: {
        orSimilar: 'or similar',
        seats: 'seats',
        doors: 'doors',
        bigBags: 'large bags',
        smallBags: 'small bags',
        gear: 'Transmission',
        air: 'A/C',
        featured: 'Featured!',
        cancel: 'Free Cancellation if cancelled up to 48 hours prior to the scheduled pick-up time.',
        adviseThin: 'Some car rental companies charge ',
        adviseStrong: 'a fee for drivers between 21 and 24 years old.',
        additionalInformation: 'Important information',
        seeDetails: 'Plan details',
        reserveNow: 'Reserve now',
      },
      clientType: {
        title: 'Customer type',
        passenger: 'Direct customer',
        agency: 'Travel Agency',
        corporation: 'Company',
        choose: 'Select an option',
        validate: 'Validate',
        typeYourId: 'Please enter your ID number',
      },
      passenger: {
        email: 'E-mail',
      },
      agencyOrCorporation: {
        title: 'Customer information',
        subtitle: 'Renter´s personal information',
        name: 'Name',
        surname: 'Last name',
        phone: 'Phone number (optional)',
        flyCompany: 'Airline (optional)',
        flyNumber: 'Flight number(optional)',
        additionalInformation: 'Important information',
        promotionalCode: 'Discount code',
        coupon: 'Coupon number',
      },
      optionalEquipment: {
        title: 'Add optional equipment & services to your rental',
        titleMobile: 'Add optional equipment',
        text:
          'Optional equipment can only be reserved and is subject to availability. It will be confirmed at the pick-up location at the time of rental and will be charged to the customer credit card upon completion of the rental. ' +
          'The cost of the optional equipment is not included in the rate and the customer will only see the estimated cost. Costs are subject to changes.',
        perDay: '(per day)',
        GPS: 'GPS',
        babySeat: 'Infant Safety Seat',
        childrenSeat: 'Child Safety Seat',
        elevatorSeat: 'Child Booster Seat',
        elevatorSeatMobile: 'Booster Seat',
      },
      changePlan: {
        title: 'Change plan',
        quoteFee: 'Quote this rate',
        selectedFee: 'Selected rate',
      },
      requirements: {
        title: 'RENTAL REQUIREMENTS',
        question1: 'Minimum Age',
        response1:
          'The minimum age to rent a vehicle is 25 years old. Customers between the ages 21 and 24 will be charge with a fee (Young renter fee or underage surcharge). The fee amount will depend on the rental location. The rental of luxury cars, mini-vans, 12-passenger vans, specialty cars, full-size SUVs and premium SUVs will not be permitted. Additional drivers are also subject to the same minimum age policy.',
        question2: 'ID',
        response2:
          'The renter and each additional driver must present an accepted and valid picture ID issued by the country of residence. For international rentals, a valid Passport is the only accepted ID.',
        question3: 'Driver’s License',
        response3:
          'The renter and all additional drivers must present a valid driver´s license issued by the country of residence. In some US cities, it is mandatory to present an international driver´s license along with the one issued by the country of residence. This last requirement also applies to all additional drivers.',
        question4: 'Credit Card',
        response4:
          'At the time of rental, the renter must present a valid and accepted credit card with the renter´s name on it. The name on all rental credentials (ID, credit card and driver´s license) must match the name on the reservation. Debit cards are not accepted.',
        question5: 'Additional Fees and Taxes',
        response5:
          'Additional taxes and fees may apply to underage drivers, optional equipment or for returning the vehicle at a different than the pick-up office (One-Way Fee).',
        question6: 'Pre-paid Voucher',
        response6:
          'At the time of rental customer must present a printed or electronic copy of the prepaid voucher as a proof that the rental was prepaid. The prepaid voucher must show the renter´s name, rate code, inclusions, vehicle category and the amount prepaid. If the reservation is a Pay Later (Pay on Destination) reservation, the renter must give the confirmation number at the rental location counter.',
        question7: 'Important information',
        response7:
          'The car rental companies reserve the right to deny a rental if the customer fails to meet the rental requirements and/or, at their discretion, the renter is considered a risk to other people.',
      },
    },
    step3: {
      agencyOrOrganizationPayment: {
        reservationValue: 'Estimated total:',
        discount: ' AutoRenta Discount (prepaid only):',
        commission: 'Travel Agency commission (Prepaid only):',
        neto: 'Net to pay (prepaid only):',
        titleReservation1: 'Pay reservation with a credit card',
        titleReservation2: 'The prepaid voucher and invoice will be sent to your email and will be uploaded to the user´s profile.',
        choose: 'Select your form of payment:',
        next: 'Next',
        bankTitle: 'To pay with a wire transfer',
        bankSubtitle: 'Account information.',
        bank: 'Bank',
        accountNumber: 'Account number: ',
        routeNumber: 'Routing number (ABA): ',
        deposit: 'Direct deposit: ',
        swift: 'SWIFT: ',
        message: 'Send deposit/wire transfer confirmation to the following E-mail:',
      },
      payment: {
        titleReservation: 'Pay this reservation with your credit card',
        subtitleReservation1: 'Pay now and get a ',
        subtitleReservation2: ' of discount in the base rate!',
        choose: 'Please select your form of payment for this reservation:',
        creditCard: 'Credit/Debit card',
        next: 'Next',
        creditCardPayment: {
          cardNumber: 'Card Number',
          country: 'Country of the credit card',
          cvc: 'CVC (security code)',
          cvcMobile: 'Security code',
          expirationDate: 'MM/YY',
          postalCode: 'Zip code',
          payNow: 'Pay now',
          payNow2: 'Pay now',
          back: 'Back',
        },
        account: 'Enter your account information',
        email: 'Email address',
        password: 'Password',
        login: 'Log in',
        back: 'Back',
        payOk: 'Payment successfully completed!',
        text1: 'To Pay Later this reservation (Pay on Destination)',
        text2: 'Go to the car rental company location office and give your confirmation number.',
        text3: 'The customer must meet all the rental requirements: minimum age, valid and accepted picture ID, credit card and driver´s license.',
        reservationNumber: 'For a pay on destination reservation please give the confirmation number:',
      },
      reservationState: {
        cancelReservationModal: {
          title: 'Cancel a reservation',
          subtitle:
            'You are about to cancel your reservation! Do you want to continue? \n' +
            'Once you cancel your reservation it cannot be reinstated.',
          lastname: 'Last name',
          reservationNumber: 'AutoRenta confirmation number',
          email: 'E-mail',
          agency: 'Travel Agency ID',
          corporation: 'Corporate ID',
          cancel: 'Cancel reservation',
        },
        titleReservation: 'Your reservation has been created correctly!',
        textReservation:
          'To know the different forms of payment options you have to pay your reservation call: 954.237.4737 or send us an email to info@autorenta.com. Please remember that some fees and taxes may not be included in the total value of the rental. Optional equipment and services can be paid only at the rental location.',
        titlePayment: 'Payment successfully completed!',
        textPayment1: 'We charged you ',
        textPayment2: ' to the credit card ',
        textPayment25:
          'Please remember that some fees and taxes, as well as the optional equipment and services must be paid at the rental location at the time of rental.',
        textPayment3: 'You got a ',
        textPayment4: 'We will send your prepaid Voucher and Invoice.',
        textPayment5: ' discount of ',
        subtitle: 'To view, modify or cancel your AutoRenta reservation use the number: ',
        emailText: 'We will send your confirmation via E-mail:',
        agencyText: 'Travel Agency ID Number',
        organizationText: 'Corporate ID Number',
        cancel: 'Cancel',
        print: 'Print',
      },
      reservationDetails: {
        title: 'View rental details',
        fullName: 'Name and last name',
        email: 'E-mail',
        phone: 'Phone number',
        estimatedTotal: 'Estimated Total',
        flyCompany: 'Airline',
        flyNumber: 'Flight number',
        promotionalCode: 'Discount code',
        coupon: 'Coupon number',
        pickUpTitle: 'Pick-up location',
        dropOffTitle: 'Drop off location',
        orSimilar: 'or similar',
        seats: 'seats',
        doors: 'doors',
        bigBags: 'large bags',
        smallBags: 'small bags',
        gear: 'Transmission',
        air: 'A/C',
        selectedPlan: 'Selected Plan',
        detailsTitle: 'Rate, fees and taxes',
        baseFee: 'Base rate',
        optionalEquipment: 'Optional equipment total',
        estimated: 'Estimated total',
        additionalEquipmentTitle: 'Optional Equipment',
        optionalEquipmentTaxes: 'Additional fees and taxes may apply for the selected optional equipment.',
        

        conditionsTitle: 'Rental Terms & Conditions',
        conditionText1:
          'AutoRenta confirms a vehicle type or a car group, never a make or model. All vehicles are subject to availability and the photo displayed may be an example only and AutRrenta reserves all rights to change all images shown on the website without previous notice.',
        conditionText2:
          'The minimum age to rent a vehicle is 25 years old. Customers between the ages 21 and 24 will be charge with a fee (Young renter fee or underage surcharge). The fee amount will depend on the rental location. The rental of luxury cars, mini-vans, 12-passenger vans, specialty cars, full-size SUVs and premium SUVs will not be permitted. Additional drivers are also subject to the same minimum age policy.',
        conditionText3:
        'The renter and all additional drivers must present a valid driver´s license issued by the country of residence.', 
        conditionText4:
        'In some US cities, it is mandatory to present an international driver´s license along with the one issued by the country of residence. This last requirement also applies to all additional drivers.',        
        conditionText5:
          ' At the time of rental, the customer must present a valid and accepted credit card with the renters name on the card.',
        conditionText6:
          ' At the time of rental, an authorization hold will be secured on the credit card provided by the Customer. The amount and/or percentage will be determined by each car rental company. The car rental company will authorize the release of the set aside amount upon the completion of the rental, but the card issuer´s rules apply for your account to be credited for the amount.',
        conditionText7:
          ' A debit card is not accepted as the authorization hold cannot be reversed and the set aside amount cannot be posted back to the account.',
        conditionText8:
          'Optional equipment can only be reserved and is subject to availability. It will be confirmed at the pick-up location at the time of rental and will be charged to the customer credit card upon completion of the rental. The cost of the optional equipment is not included in the rate and the customer will only see the estimated cost. Costs are subject to changes.',
        conditionText9:
          'Additional taxes and fees may apply to underage drivers, optional equipment or for returning the vehicle at a different than the pick-up office (One-Way Fee).',
        conditionText10:
          'Most of the car rental companies wait for the customer up to 2 hours of the scheduled time, however, we strongly recommend contacting the location of rental to notify your time of arrival and avoid any cancelation/no show charge.',
        conditionText11:
          'There is a 29-minute grace for returns. After 30 minutes, an additional hour or day (depending on return time) x charges + taxes apply. There is no grace for rental fees, surcharges, optional equipment or protection charges, so full day late + taxes will apply for these items.',
        


conditionText12:
          'Rental extensions will result in additional charges. If you are extending your rental, please contact the location of rental to advise approximate date and time of return.',
        conditionText13:
          'For any changes on your reservation please call us (954.237.4737) or send us an email to info@autorenta.com.',
      },
    },
    promotion: {
      home: 'Home',
      title: 'Promotions',
    },
    faq: {
      title: 'FAQ',
      subtitle:
        'In this section your will find the answer to the most frequently asked questions regarding a car rental.',
      question1: 'What are the rental requirements?',
      response1_1:
        '- Minimum age: Car rental companies rent vehicles to individuals who are 25 or older. A surcharge applies to qualified renters between 21 and 24.',
      response1_2:
        '- ID: The renter and each additional driver must present an accepted and valid picture ID issued by the country of residence. For international rentals, a valid Passport is the only accepted ID.',
      response1_3:
        '- Driver’s license: The renter and all additional drivers must present a valid driver´s license issued by the country of residence. In some US cities, it is mandatory to present an international driver´s license along with the one issued by the country of residence. This last requirement also applies to all additional drivers.',
      response1_4: 
        '- Credit card: At the time of rental, the renter must present a valid and accepted credit card with the renter´s name on it. The name on all rental credentials (ID, credit card and driver´s license) must match the name on the reservation. Debit cards are not accepted as the authorization hold cannot be reversed and the set aside amount cannot be posted back to the account.',
      response1_5: 'The additional driver must also meet the minimum age, picture ID and driver´s license requirements.',
      question2: 'Is it necessary to have an international driver´s license?',
      response2:
        'In some US cities and in some countries, it is mandatory to present an international driver´s license along with the one issued by the country of residence. This last requirement also applies to all additional drivers. For more information regarding this topic please call us (954.237.4737) or send us an email to info@autorenta.com.',
      question3: 'Will the car rental company put an authorization hold on my credit card even if I prepaid my rental at AutoRenta.com?',
      response3:
        'At the time of rental, an authorization hold will be secured on the credit card provided by the customer to cover the estimated rental charges and any additional charges that may be incurred. The amount and/or percentage will be determined by each car rental company. The car rental company will authorize the release of the set aside amount upon the completion of the rental, but the card issuer´s rules apply for your account to be credited for the amount.',
      question4: 'What will be the amount held on my credit card?',
      response4:
        ' The amount and/or percentage will be determined by each car rental company. The car rental company will authorize the release of the set aside amount upon the completion of the rental, but the card issuer´s rules apply for your account to be credited for the amount.',
      question5: 'Can I use a friend or a family member credit card?',
      response5:
        'No. The name on all rental credentials (ID, credit card and driver´s license) must match the name on the reservation.',
      question6: 'What protections and additional equipment can I add to my rental?',
      response6_1:
        'Most of our rental plans include protection and coverages, and in some cases additional equipment. You can always request optional services, equipment, and protection at the time of rental. Our rental plans will specify inclusions.',
      question7: 'Do I have to purchase any mandatory coverage/protection?',
      response7:
        'All coverages/protections are all optional. Most of our rental plans include the recommended coverage/protection.',
      question8: 'Is any protection coverage/protection included in my rental?',
      response8:
        'Most car rental companies include the basic liability coverage.',
      question9: 'What is best, purchase protection/coverages in advance or arriving to the rental location?',
      response9:
        'Our recommendation is to choose a rental plan with protection/coverage included or add them at the time of booking. Adding protection/coverages at the time of rental may increase considerably the estimated total.',
      question10: 'What should I do if the rented vehicle is damaged or stolen? ',
      response10:
        'First, contact the police and file a report. Always complete the car rental company Accident/incident report at the rental location within 24 hours of the incident. The rental location can give you more information of the procedures you should follow.',
      question11: 'Some of the plans include partial damage waiver, what does this mean?',
      response11:
        'Renters who paid for an LDW, will not have to cover expenses related to the car´s damage or lost. If the renter paid for a CDW will only have to cover the deductible if the vehicle is damaged or lost. The amount of the deductible will depend on the country, rental location and vehicle type.',
      question12: 'What should I do if I get in crash in my rented vehicle?',
      response12:
        'If you get in a car accident in a rented vehicle, the first thing you should do is call the police and file a report. You should call then the rental location, provide information about the accident and always complete the car rental company accident/incident report.',
      question13: 'What is the roadside assistance included in AutoRenta´s rental plans?',
      response13:
        'In the unlikely event of operational difficulty or emergency, you should contact the Roadside assistance number to get reliable and fast service. Service available 24/7.',
      question14: 'Should I request an infant/child safety seat?',
      response14:
        'Safety is number one priority at AutoRenta.com. In most countries and cities, infants, toddlers, and children must be seated securely using safety seats. Most rental companies offer the following infant/child safety seat options:',
      response14_1:
       '- Up to 1 year old (and up to 20-22 pounds) Rear-facing Infant-only car seat, Convertible or 3-in-1 seat.',
      response14_2:
        '- Ages 1-3 (and 20 to 40 pounds) Rear-facing car seat until the top height and weight limit allowed by the manufacturer is exceeded.',
      response14_3:
        '- Ages 4-7 (or until 4"9" tall) Forward-facing car seat until the top height and weight limit allowed by the manufacturer is exceeded.',
      question15: 'How can I ad dan infant/child safety seat to my reservation?',
      response15:
        'Infant/Child safety seats are optional products, and they are not included in our rates. You can request them during the booking process or directly at the rental location. An Infant/Child safety seat cannot be prepaid. The cost of this product should be paid at the rental location.',
      question16: 'Is it possible to include more than one additional driver to my rental?',
      response16:
        'Yes, it is possible. Each additional driver must meet the minimum age, picture ID and driver´s license requirements. Most of our rental plans include one additional driver for free. If you want to add more than one additional driver to your rental, it will have an extra cost.',
      question17: 'if I am the only registered driver in the rental agreement, can someone else drive the rented vehicle?',
      response17:
        'Only the renter and the registered additional drivers must drive the rented vehicle. All additional drivers must meet the minimum age, picture ID and driver´s license requirements. Most of our rental plans include one additional driver for free. If you want to add more than one additional driver to your rental, it will have an extra cost.',
      question18: 'How far in advance should I book by car rental?',
      response18:
        'It is important to book your car rental in advance, as prices tend to be more competitive if done so. If your booking is done too close to your trip, it may be possible that your desired vehicle is not available, the prices may be too high or you won´t find any vehicles available.',
      question19: 'How can I cancel or modify my reservation?',
      response19_1:
        'On the AutoRenta.com homepage select the "Find a reservation" button. Then you will be able to modify or cancel your reservation. Also, in your email confirmation click in the CANCEL THIS RESERVATION button and confirm this action.',
      response19_2:
        'If the reservation was prepaid, please read our cancellation policy.',
      response19_3:
        'To modify your reservation, please call us (954.237.4737) or send us an email to info@autorenta.com. You must modify your reservation at least 36 hours before the scheduled pick-up time.',
      question20: 'Is it possible to modify my rental once the rental has begun?',
      response20:
        'No, it is not possible. Once the rental contract is opened, it is not possible to modify a reservation.',
      question21: 'Is it possible to include more than one additional driver to my rental?',
      response21:
        'Yes, it is possible. Each additional driver must meet the minimum age, picture ID and driver´s license requirements. Most of our rental plans include one additional driver for free. If you want to add more than one additional driver to your rental, it will have an extra cost.',
      question22:
        'Is there a charge if I modify my reservation?',
      response22:
        'AutoRenta does not charge for any modification made to a reservation. However, the rate was calculated based on the information provided. Any changes may result in a higher total cost. If you prepaid your reservation, please contact us and we will assist you with your changes and collect the additional cost if applicable.',
      question23: 'Are all the fees and taxes included in the total cost?',
      response23:
        'In most cases, fees and taxes are included in the total value of your rental, however, please consider than in some cases fees and taxes should be paid at the rental location. All optional equipment and services plus all associated fees and taxes are paid at the rental location.',
      question24: 'How can I pay for my reservation?',
      response24:
        'AutoRenta.com has 3 ways how you can pay for your reservation:',
      response24_1:
        '1.	Pay on Destination (POD) – at the end of your rental the location will charge the total value to your credit card. Cash payment is not accepted in any case or currency.',
      response24_2:
        '2.	Prepay your rental with credit/debit card through AutoRenta.com (applies for direct customers, travel agencies and companies).',
      response24_3:
        '3.	Prepay with a wire transfer through AutoRenta.com (applies only to travel agencies and companies).',
      response24_4:
        'Regardless of how the form of payment, at the time of rental, the customer must present a valid and accepted credit card with the renter´s name on it. The name on all rental credentials (ID, credit card and driver´s license) must match the name on the reservation. Debit cards are not accepted.',
      question25:
        'If I prepay my rental at AutoRenta.com will they send me a receipt?',
      response25:
        'AutoRenta.com will send you a voucher with your rental details. If created an account at AutoRenta.com, you can download your prepaid voucher with your rental details from your account. At the time of rental, the customer must present/show a printed/electronic version of the prepaid voucher.',
      question26:
        'How far in advance can I prepay my car rental reservation?',
      response26:
        'You should pay at least 48 hours before the scheduled time of rental.',
      question27: 'What happens if I cancel a prepaid reservation?',
      response27:
        'If you cancel a reservation prepaid with a credit card, more than 48 hours prior to the scheduled time of rental your will be fully refunded for the amount paid. If the cancellation takes place 48 to 36 hours prior to the scheduled time of rental, Autorenta.com will refund you for the 80% of the prepaid amount. If you cancel with less than 36 hours prior to the scheduled time of rental no refund will be issued. If your reservation was paid with a wire transfer (applies to Travel agencies and corporations only) you will receive a credit voucher for the full amount paid. The credit voucher will be valid for 6 months from the date of issuance and can be used to prepay any other reservation made through AutoRenta.com. All refund requests must be submitted within six months of the scheduled rental pick up date. No refunds will be granted after this six-month window.',
      question28:
        'I am a travel agency/company and I have a credit voucher, Do I have to use the credit voucher to prepay another reservation for the same person, rental location and total value?',
      response28:
        ' The credit voucher will be valid for 6 months from the date of issuance and can be used to prepay any other reservation made through AutoRenta.com regardless of the rental location, total value or if it is for the same person.',
      question29:
        'Why is the total value of my rental higher than the one showed on the availability step (first step)?',
      response29:
        'The first step (availability) only shows the base rate, fees and taxes. The total value rises upon confirmation as it might include optional equipment and services, the one-way fee (if applicable) and its associated fees and taxes.',
      question30:
        'How can I waive the underage (young renter) fee?',
      response30:
        'The underage (young renter) fee cannot be waived if the renter is between 21 and 24 years old. The underage (young renter) fee also applies to all additional drivers.',
      question31:
        'How can I include the cashless toll service to my rental what is the cost?',
      response31:
        'The cashless toll service is not included in any of the rental plans offered by AutoRenta.com. You can add this optional service, be informed of its cost, and how this service works.',
      question32:
        'What should I do if I get additional toll charges?',
      response32:
        'As the cashless toll service is not a service provided by AutoRenta.com, you must contact the car rental company.',
      question33:
        'Can I return the rented vehicle at a rental location different from where I picked up the vehicle?',
      response33:
        'You can pick-up a car at one location and return it to another, only if AutoRenta.com shows this option during the booking process. This service has an additional cost (one-way fee) and cannot be included in the prepaid amount.  The one-way fee and its associated taxes must be paid at the rental location. If you added optional equipment to your rental will also have and extra cost for returning in a different location.',
      question34:
        'How can I avoid incurring in additional costs in my rental?',
      response34:
        'At the time of rental make sure to review your contract agreement and make sure you did not accept any optional equipment, services and/or coverages not included in your rental plan.',
      question35:
        'What happens if I return the vehicle after the scheduled time?',
      response35:
        'Late returns will result in additional costs. If you need to keep the vehicle for more time you must call the rental location and inform of the new approximate date and time you will return the vehicle.',
      question36:
        'What is the fuel policy?',
      response36:
        'If your rental plan you chose includes a gas tank you can return the vehicle without or less fuel. If the gas tank is not included, car must be returned with a full tank of gas or there will be a charge for refueling. If you have refueled, please keep your receipt for verification purposes.',
      question37:
        'Can I rent a car for more than 30 days?',
      response37:
        'The maximum days for a rental are 30 days. If you need a vehicle for more than 30 days a new reservation must be made for the additional days and go the rental location to get a new rental agreement for the additional days, and if needed, get a new vehicle of the same category.',
      question38:
        'Are there any border crossing restrictions?',
      response38:
        'Each car rental company has their own border crossing restrictions. For more information, please call us (954.237.4737) or send us an email to info@autorenta.com.',
      question39:
        'Are there any restrictions of use of the rented vehicle?',
      response39:
        'All vehicles must be returned in the same conditions as it was received, ordinary wear and tear excepted. If the rented fails to do so, the renter is responsible for the damages.',
      question40:
        'Do all car rental companies offer transfer service?',
      response40:
        'Most car rental companies offer complimentary transfer service to/from the airport terminal to the airport rental location. This may also apply to/from a cruise ship port in selected locations and selected car rental companies.',
      },
    cookies: {
      title: 'Cookie Policy.',
      subtitle:
        'These policies define the type of information AutoRenta.com collects, how do we collect them and how the information is used to improve and optimize our content according to your preferences and provide you with useful functionalities.',
      condition:
        'By declining cookies, you will still have access to AutoRenta.com, but may prevent you from taking full advantage of the website.',
      question1: 'What are cookies?',
      response1_1:
        'Cookies are text files with small pieces of data placed on your computer or mobile device hard drive which are commonly used to collect personal data. This information allows the website to recognize the user as an existing customer when they return to the website.',
      response1_2:
        'This technology is used to improve the experience of users with relevant content.',
      question2: 'What cookies does AutoRenta.com use and how do they work?',
      response2_1: 'Session Cookies',
      response2_2:
        'Session cookie, also known as temporary cookies, help us recognize users and the information provided when they navigate through our website. Session cookies retain information about the user for as long as they are in our website. Once the browser is closed the cookies are deleted.',
      question3: 'Third party Cookies',
      response3_1:
        'Our website uses Google Analytics to collect information from users as a tool to research how users interact with our website content, to show relevant content and to improve the performance of our website.',
      response3_2:
        'We will sometimes launch a new functionality or a new design in our website.  We use cookies to make effective changes to our website navigation and product/services offer.',
      question4: 'Type of information we collect for your device',
      response4:
      'By using our website, products, and services you understand and acknowledge that we collect and use your information. This information is collected from your browser and includes IP address, operating system, browser, language settings, website referrals, etc.',
      question5: 'How can I reject or delete my cookies',
      response5_1:
        'You can always opt-out from the use of cookies on your device by changing your browser settings or you can delete all cookies from your browser if you think they are a threat to your privacy.',
      response5_2:
        'Each browser offers built in controls to limit the cookies you receive. Please check out your browser to find out how to delete/control the cookies.',
      question6: 'More information',
      response6_1:
        'If you have questions, comments or suggestions in how we collect and use your information you can always contact us.',
      response6_2: 'Contact information:',
      response6_3: 'Email: info@autorenta.com',
      response6_4: 'Website: www.autorenta.com',
      response6_5: 'Address: 4000 Ponce de Leon Blvd. Suite 470, Coral Gables, Florida 33146, USA.',
      response6_6: 'Copyright © 2021 AutoRenta.com is a registered trademark of Mobility, LLC. All Rights Reserved.',
    },
    privacy: {
      title: 'Privacy Notice.',
      subtitle1:
        'This private notice statement recognizes the importance of privacy and we want you feel confident using our website and associated tools and services as we are committed in taking the appropriate steps to protect the information we collect.',
      subtitle2:
        'This privacy notice statement explains how we collect, use and disclose the data when you use AutoRenta.com platform, mobile app, product and services, the information in our database or the information collected through other methods such as calls, emails or subscription forms.',
      subtitle3:
        'This privacy notice does not apply to the processing of your information by companies not owned or under control of AutoRenta.com, as well as individuals or employees not hired by AutoRenta.com.',
      subtitle4:
        'Our website and apps may include links to and from websites of affiliate and business partners. We do not control how personal information is collected and used on those websites, so please review the privacy policy of any website you visit as a result of following any links to or from the websites of our affiliates or partners.',
      subtitle5:
        'Our privacy policies are subject to changes as per regulation changes. Therefore, we encourage you to review these policies from time to time for the latest information on our privacy practices.',
      subtitle6:
        'If AutoRenta.com changes to this privacy notice we will post the changes here. If we make a change that significantly affects your rights, we will notify you by way of a prominent positing on our website and App. If you have an account with us or subscribed to our data base, we may also notify you about material changes to this privacy notice by email (the email address provided in your account or to our data base).',
      subtitle7: 'Types of information we collect:',
      point1_1:
        'AutoRenta.com collects the user personal information by using the website, products and services, when subscribing to our newsletter, promotions, creating an account and when using the customer service functionality to contact us.',
      point1_2:
        'The data we collect and how we use them is described in the point number 4 of this privacy notice.\n' +
        ' If you have questions, comments, or suggestions you can always contact us at info@autorenta.com',
      point1_3:
        'Every user of our webpage can request a copy of their personal information. Please this request to info@autorenta.com',
      point2_1:
        'Your personal data will be collected for a specific purpose. It is your right not to provide the requested information, but we may not be able to provide you our products or services.',
      point2_2:
        'The purpose of the data collection and the data retention time will be specified in the registration form whenever possible.',
      point3_1:
        'By using our website, products, and services you understand and acknowledge that we collect and use your information. This information is collected from your browser and includes IP address, operating system, browser, language settings, website referrals, etc. through cookies.',
      point3_2:
        'Cookies are text files with small pieces of data placed on your computer or mobile device hard drive which are commonly used to collect personal data. This information allows the website to recognize the user as an existing customer when they return to the website.',
      point4_1:
        'Giving personal information or accepting cookies will not exclude you from browsing our website. El usuario que decida hacerlo automáticamente reconoce y acepta los términos y condiciones aquí mencionados.',
      point5_1:
        'All the information collected by AutoRenta.com is transmitted using encryption.',
      point6_1:
        'AutoRenta.com recognizes the importance of privacy and we want you feel confident using our website and associated tools and services as we are committed in taking the appropriate steps to protect the information we collect.',
      point7_1: 'All the collected information by AutoRenta.com is stored in our data base located at: 4000 Ponce de Leon BLVD, Suite 470, Coral Gables, FL 33146.',
      point8_1:
        'AutoRenta.com collects personal information to: (I) inform the user of new products; (II) update the user´s contact information; (III) improve the experience of users; (IV) for research purposes; (V) help uses with questions and enquires; (VI) to provide user with relevant marketing promotions and offers and to inform of our advertising and marketing campaigns. We main retain your information as long as you have an account at AutoRenta.com, as needed to provide our service, the user revokes consent, or until the user deletes the information.',
      point9_1:
        'Your personal information is accessed only by AutoRenta.com authorized personnel. The incorrect use or unauthorized disclosure of personal information are subject to criminal penalties established by the law.',
      point10_1:
        'The user personal information will only be shared with third-party partners or service providers authorized by AutoRenta.com and solely for the purpose of the project. We may share your personal information with law enforcement and regulatory authorities or other third parties as required by law.',
      point11_1:
        'The user is solely responsible for the accuracy and veracity of the personal information provided to AutoRenta.com.',
      point12_1:
        'At any time, the user can unsubscribe from our newsletters, promotions and email marketing services.',
      point13_1:
        'We may share your personal information with our third-party service providers. The email marketing services are run by a service provider hired by Autorenta.com. This company may use your personal information according to their own privacy policy terms.',
      point14_1:
        'This third-party service provider will use the personal information only for the purpose of sending newsletters, promotions and advertising and marketing campaigns, according to the preferences established by each user. This information is protected by a confidentiality agreement.',
      point15_1:
        'The user is solely responsible for storing and maintaining the confidentiality of the password and account information.',
      point16_1:
        'AutoRenta.com does not monitor or control the linked sites or for information obtained by third parties, and makes no representations regarding, and is not liable or responsible for the accuracy, completeness, timeliness, reliability, or availability of any of the content upload, displayed, or distributed, or products or services available at these sites. If you choose to access any third-party site, you do so at your own risk. The presence of a link to a third-party site does not constitute or imply AutoRenta.com endorsement, sponsorship, or recommendation of the third-party, or of the content, products or services contained on, or available through, any such third-party site.',
      point17_1:
        'The personal information collected by AutoRenta.com can be used for the purposes stated in this Privacy Notice.',
      point18_1: '2020 © AutoRenta.com. All Rights Reserved.',
    },
    cancellation: {
      title: 'Cancellation Policy',
      subtitle: 'Our cancellation policy applies depending in the form of payment used to prepay the reservation.',
      question1: 'DIRECT CUSTOMER: Credit card:',
      response1_1: '- Free Cancellation if cancelled up to 48 hours prior to the scheduled pick-up time.',
      response1_2: '- If the cancellation takes place 48 to 36 hours prior to the scheduled time of rental, Autorenta.com will refund you for the 80% of the prepaid amount.',
      response1_3: '- If you cancel with less than 36 hours prior to the scheduled time of rental no refund will be issued.',
      response1_4: '- If the customer was not able to comply with the rental requirements, no refund will be issued.',
      response1_5: '- If the customer does not pick up the vehicle at the scheduled rental location, date and time (No Show), no refund will be issued.',
      question2: 'TRAVEL AGENCY: Travel agency credit card:',
      response2_1: '- Free Cancellation if cancelled up to 48 hours prior to the scheduled pick-up time.',
      response2_2: '- If the cancellation takes place 48 to 36 hours prior to the scheduled time of rental, Autorenta.com will refund you for the 80% of the prepaid amount.',
      response2_3: '- If you cancel with less than 36 hours prior to the scheduled time of rental no refund will be issued.',
      response2_4: '- If the customer was not able to comply with the rental requirements, no refund will be issued.',
      response2_5: '- If the customer does not pick up the vehicle at the scheduled rental location, date and time (No Show), no refund will be issued.',
      question3: 'TRAVEL AGENCY: Wire Transfer:',
      response3_1: '- If a reservation is cancelled at any time, AutoRenta.com will issue a Credit Voucher* for the prepaid amount wired. AutoRenta.com does not issue a refund in cash/direct deposit under any circumstances.',
      response3_2: '- If a customer does not comply with the rental requirements, and the rental is cancelled, AutoRenta.com will issue a Credit Voucher* for the prepaid amount wired. AutoRenta.com does not issue a refund in cash/direct deposit under any circumstances.',
      response3_3: '- If the customer is a No Show (does not pick up the vehicle at the scheduled rental location, date and time) and the rental is cancelled, AutoRenta.com will issue a Credit Voucher* for the prepaid amount. AutoRenta.com does not issue a refund in cash/direct deposit under any circumstances.',
      response3_4: '(*) The credit voucher will be valid for 6 months from the date of issuance and can be used to prepay any other reservation made through AutoRenta.com.',
      question4: 'COMPANY: Corporate credit card:',
      response4_1: '- Free Cancellation if cancelled up to 48 hours prior to the scheduled pick-up time.',
      response4_2: '- If the cancellation takes place 48 to 36 hours prior to the scheduled time of rental, Autorenta.com will refund you for the 80% of the prepaid amount.',
      response4_3: '- If you cancel with less than 36 hours prior to the scheduled time of rental no refund will be issued.',
      response4_4: '- If the customer was not able to comply with the rental requirements, no refund will be issued.',
      response4_5: '- If the customer does not pick up the vehicle at the scheduled rental location, date and time (No Show), no refund will be issued.',
      question5: 'COMPANY: Wire Transfer:',
      response5_1: '- If a reservation is cancelled at any time, AutoRenta.com will issue a Credit Voucher* for the prepaid amount. AutoRenta.com does not issue a refund in cash/direct deposit under any circumstances.',
      response5_2: '- If a customer does not comply with the rental requirements, and the rental is cancelled, AutoRenta.com will issue a Credit Voucher* for the prepaid amount. AutoRenta.com does not issue a refund in cash/direct deposit under any circumstances.',
      response5_3: '- If the customer is a No Show (does not pick up the vehicle at the scheduled rental location, date and time) and the rental is cancelled, AutoRenta.com will issue a Credit Voucher* for the prepaid amount. AutoRenta.com does not issue a refund in cash/direct deposit under any circumstances.',
      response5_4: '(*) The credit voucher will be valid for 6 months from the date of issuance and can be used to prepay any other reservation made through AutoRenta.com.',
    },
    error: {
      message: 'An error has occurred. Please try again.',
      access1_1: 'You don´t have access to your rental details. ',
      access1_2: 'Please contact your Travel agency or company to get your rental details.',
      canceled: 'Your reservation has been cancelled and cannot be reinstated.',
      goHome: 'Back to Home',
    },
  },
};
