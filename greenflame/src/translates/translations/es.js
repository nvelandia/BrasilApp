import React from 'react';

export const es = {
  locale: 'es',
  messages: {
    common: {
      error: {
        attention: '¡Atención!',
        idInvalid: 'El número de ID ingresado no es válido.',
        couponORCodeInvalid: 'El número de cupón o código promocional no es valido.',
        clientType: 'No se ha seleccionado el tipo de cliente.',
        formStep2: 'Los campos marcados en rojo son obligatorios.',
        reservationNotFound: 'No se ha encontrado ninguna reserva con esos datos.',
        reservationCancelled: 'Su reserva ha sido cancelada',
        airlineIata: 'Debes seleccionar una compañía aérea.',
        airlineFlight: 'Debes completar el número de vuelo.',
        completeAllFields: 'Todos los campos son requeridos.',
        invalidEmail: 'La direccion de E-mail no es válida.',
        canNotPay:
          'Ocurrió un error en la transacción o algún dato proporcionado es incorrecto. Por favor verifica la información de tu tarjeta de crédito / débito e inténtalo nuevamente.',
      },
      validationMessages: {
        codePromotionalSuccess: 'El código promocional ingresado se aplicó correctamente a su reserva.',
        couponNumberSuccess: 'El número de cupón ingresado se aplicó correctamente a su reserva.',
        reservationCancelled: 'Su reserva ha sido cancelada',
        subscriptionSuccess: 'Te suscribiste correctamente a nuestra base de datos.',
      },
      navbar: {
        button: {
          reserve: 'Reservar',
        },
        links: {
          promotions: 'Promociones',
          searchReservation: 'Buscar Reserva',
          travelAgency: 'Agentes de Viaje',
          AutoRentaBusiness: 'AutoRenta Business',
          AutoRentaOnTheGo: 'AutoRenta ON THE GO',
        },
        tooltip: 'Próximamente',
      },
      banner: {
        text: '¿Ya conoces nuestra nueva App? Descárgala para iPhone y Android',
      },
      footer: {
        subscribe: 'Suscríbete y recibe todas nuestras ofertas',
        fullName: 'Nombre y apellido',
        email: 'Dirección de E-mail',
        register: 'Regístrate ',
        contactUs: 'Contáctenos',
        sawgrass: '4000 Ponce de Leon Blvd.',
        suite: 'Suite 470, Coral Gables, FL 33146.',
        info: 'info@autorenta.com',
        clientAttention: 'Atención al Cliente',
        adviser: 'Contacta a un Asesor Online',
        faq: 'Preguntas Frecuentes',
        searchReservation: 'Buscar una Reserva',
        affiliates: 'Afiliados',
        access: 'Acceder a tu Cuenta',
        registerAccount: 'Registrar una Cuenta',
        promotions: 'Promociones Vigentes',
        aboutUs: 'Sobre AutoRenta',
        politics: 'Políticas de Cancelación',
        cookies: 'Políticas de Cookies',
        privacy: 'Políticas de Privacidad',
        copyRight: 'Copyright © 2021 AutoRenta.com es una marca registrada de Mobiility, LLC. Todos los derechos reservados.',
      },
      loader: {
        searching: 'Estamos buscando las mejores opciones de vehículos para las fechas seleccionadas. ',
        cancel: 'Estamos cancelando tu reserva, por favor no cierres esta ventana.',
        creating: 'Estamos creando la reserva, aguarda un instante.',
        booking: 'Estamos buscando la reserva.',
        paying: 'Estamos procesando el pago de la reserva, por favor no cierres esta ventana.',
      },
      progressBar: {
        startYourSearch: 'Inicia la búsqueda',
        chooseYourPlan: 'Selecciona tu plan',
        confirmYourSearch: 'Confirma tu reserva',
      },
      searchReservationModal: {
        title: 'Buscar una reserva',
        id: 'ID de Agencia o Corporativo',
        checkbox: 'Soy una Agencia de Viajes o Corporativo / Empresa',
      },
    },
    home: {
      googleModal: {
        title: 'Encontrar una oficina o ubicación',
        button: 'BUSCAR EN EL ÁREA',
        notFoundTitle: '¡Atención!',
        notFound1: 'No se han encontrado arrendadoras en la ubicación seleccionada.',
        notFound2: 'Por favor inténtalo nuevamente modificando los parámetros de la búsqueda.',
        distance: 'Distancia: ',
        officeCode: 'Código de oficina: ',
        extendedOfficeCode: 'Código extendido: ',
      },
      makeYourReservation: {
        doYourReservationIn: 'Haz tu reserva en',
        only3Steps: 'sólo 3 pasos',
        placeToPickUp: '¿Dónde quieres retirar el vehículo?',
        placeToDropOff: '¿Dónde quieres entregar el vehículo?',
        country: 'País de residencia',
        age: 'Edad',
        carType: 'Tipo de vehículo',
        search: 'Buscar',
        dateToPickUp: 'Fecha y hora de retiro',
        dateToDropOff: 'Fecha y hora de entrega',
        findOnMap: 'Encontrar una oficina o ubicación en el mapa',
        years: 'años',
        types: {
          0: 'Todos los vehículos',
          1: 'Pequeño / Mini',
          2: 'Económico',
          3: 'Compacto',
          4: 'Intermedio',
          5: 'Standard',
          6: 'Grande',
          7: 'Premium / De lujo',
          8: 'Deportivo / Convertible',
          9: 'Minivan / Maxivan',
          10: 'SUV Económico a Intermedio',
          11: 'SUV Standard a Grande',
          12: 'SUV Premium, Elite y De lujo',
          13: 'Crossover',
          14: 'Station Wagon Economico a Intermedio',
          15: 'Station Wagon Full Size, Premium, Lujo, Elite,',
        },
      },
      offers: {
        mainTitle: 'Descubre todas las ofertas y promociones',
        mainTitleMobile: 'Ofertas y promociones',
        button: 'Más información',
      },
    },
    step1: {
      resultMessage:
        'Lo sentimos, no encontramos resultados para la búsqueda solicitada. Por favor inténtalo nuevamente.',
      activeSearch: {
        title: 'Búsqueda activa',
        age: 'Edad: ',
        years: ' años',
        modify: 'Modificar',
        modifyModal: {
          title: 'Modificar la búsqueda',
        },
      },
      result: {
        showFirst: 'Mostrar vehículos destacados primero',
        orderBy: 'Ordenar por',
        minToMax: 'De menor a mayor precio',
        maxToMin: 'De mayor a menor precio',
        dropoff:
          'Pueden aplicar Cargos por One Way e impuestos ya que, seleccionaste una oficina de devolución diferente a la de inicio de la renta.',
        carsResult: {
          orSimilar: 'o similar',
          seats: 'asientos',
          doors: 'puertas',
          bigBags: 'maletas grandes',
          smallBags: 'maletas pequeñas',
          gear: 'Transmisión',
          air: 'Aire acondicionado',
          featured: '¡Destacado!',
          cancel: 'Cancela gratis esta reserva con 48 horas de anticipación.',
          adviseThin: 'Algunas arrendadoras aplican un ', 
          adviseStrong: 'cargo adicional a conductores menores de 25 años.',
          additionalInformation: 'Información importante',
          seeDetails: 'Ver detalle del plan',
          reserveNow: 'Reservar ahora',
        },
        filterList: {
          mainTitle: 'Filtrar resultados',
          companies: 'COMPAÑÍA ARRENDADORA',
          types: 'TIPOS DE VEHÍCULO',
          seats: 'CANTIDAD DE PASAJEROS',
          bags: 'CAPACIDAD DE MALETAS',
          gears: 'TIPO DE TRANSMISIÓN',
          price: 'RANGO DE PRECIO',
          moreBags: '  ó  más  maletas',
        },
        modalDetailInformation: {
          title: 'Ver detalle de esta tarifa',
          subtitle: 'Código de la tarifa:',
        },
        modalAdditionalInformation: {
          title: 'Información importante',
          secureTitle: 'Seguros y coberturas',
          secureText:
            'En la mayoría de los planes de renta se incluyen los seguros y coberturas considerados como indispensables\n' +
            'para proteger el vehículo y a terceros durante el arrendamiento. Existen otras protecciones que son opcionales\n' +
            'y su aceptación no deberá condicionar la renta.',
          franTitle: 'Deducible / Franquicia',
          franText:
            'El deducible / franquicia que aplica en algunos seguros y coberturas es una cantidad o porcentaje que el\n' +
            'cliente deberá cubrir en caso de daño, pérdida o robo del vehículo rentado, el cual variará en relación\n' +
            'con el tipo de vehículo alquilado.',
          depoTitle: 'Depósito en garantía',
          depoText:
            'El depósito en garantía es una preautorizacion que se realiza a la tarjeta de crédito del cliente por \n' +
            'los cargos estimados de la renta. No es un cargo es únicamente un bloqueo y el monto o porcentaje\n' +
            'dependerá de la arrendadora. Al finalizar el alquiler será liberado y el tiempo que tarde su restitución\n' +
            'dependerá del banco.',
          poliTitle: 'Políticas de combustible',
          poliText:
            'Al inicio de la renta se entregará el vehículo con el tanque de combustible lleno y se deberá devolver\n' +
            'de igual manera, a excepción del plan de renta que lo incluye, en el caso de no hacerlo así se\n' +
            'cobrará la cantidad de combustible faltante más un cargo por servicio.',
          kiloTitle: 'Kilometraje / Millaje',
          kiloText:
            'En la mayoría de los planes de renta se incluye kilometraje / millaje libre; sin embargo, para\n' +
            'algunos vehículos o ciudades en particular se tendrá un número específico de kilómetros / millas por\n' +
            'día, al superar el límite establecido habrá un cargo adicional por cada kilómetro / milla excedido.',
          cardTitle: 'Tarjeta de crédito y débito',
          cardText:
            'Al inicio del alquiler se deberá presentar físicamente una tarjeta de crédito internacional\n' +
            'valida y vigente del titular de la renta con su nombre impreso o grabado. No se aceptan tarjetas\n' +
            'de débito debido a que no permiten preautorizaciones y el depósito en garantía no podrá ser reembolsado.',
        },
      },
    },
    step2: {
      details: {
        optionalEquipment: 'Total de equipamiento opcional',
        baseFee: 'Tarifa base',
        totalFee: 'Total de cargos e impuestos',
        title: 'Detalles de la reserva',
        selectedPlan: 'PLAN SELECCIONADO',
        changePlan: 'Cambiar plan',
        feeCode: 'Código de la tarifa: ',
        additionalEquipment: 'EQUIPAMIENTO OPCIONAL SOLICITADO',
        chargesDetail: 'TARIFA, CARGOS E IMPUESTOS',
        estimatedTotal: 'TOTAL ESTIMADO',
        text1:
          'Recuerda que deberás presentar físicamente una tarjeta de crédito internacional válida y vigente ' +
          'con una antigüedad mínima de un año a nombre del titular de la renta teniendo su nombre impreso o ' +
          'grabado al momento del inicio de la misma.',
        text2:
          'Las arrendadoras podrían aplicar un cargo adicional y tener restricciones para conductores por debajo de ' +
          'la edad mínima.',
        text3:
          'Algunos cargos e impuestos indicados podrían no estar incluidos en la tarifa base, así como el equipamiento ' +
          'opcional, los cuales solamente podrán ser pagados en destino.',
        agree:
          'He leído y acepto los requisitos para rentar, así como los Términos y Condiciones vigentes en el país y ' +
          'ciudad de alquiler.',
        confirm: 'Confirmar reserva',
      },
      carSelected: {
        orSimilar: 'o similar',
        seats: 'asientos',
        doors: 'puertas',
        bigBags: 'maletas grandes',
        smallBags: 'maletas pequeñas',
        gear: 'Transmisión',
        air: 'Aire acondicionado',
        featured: '¡Destacado!',
        cancel: 'Cancela gratis esta reserva con 48 horas de anticipación.',
        adviseThin: 'Algunas arrendadoras ',
        adviseStrong: 'aplican un cargo adicional a conductores menores de 25 años.',
        additionalInformation: 'Información importante',
        seeDetails: 'Ver detalle del plan',
        reserveNow: 'Reservar ahora',
      },
      clientType: {
        title: 'Tipo de cliente',
        passenger: 'Cliente directo',
        agency: 'Agencia de Viajes',
        corporation: 'Corporativo / Empresa',
        choose: 'Selecciona una opción',
        validate: 'Validar',
        typeYourId: 'Ingresa tu número de ID',
      },
      passenger: {
        email: 'E-mail',
      },
      agencyOrCorporation: {
        title: 'Información del cliente',
        subtitle: 'Información personal del titular de la renta',
        name: 'Nombre',
        surname: 'Apellido',
        phone: 'Teléfono (opcional)',
        flyCompany: 'Compañía aérea (opcional)',
        flyNumber: 'Número de vuelo (opcional)',
        additionalInformation: 'Información importante',
        promotionalCode: 'Código promocional',
        coupon: 'Número de cupón',
      },
      optionalEquipment: {
        title: 'Agrega equipamiento opcional a tu renta',
        titleMobile: 'Agrega equipamiento opcional',
        text:
          'El equipamiento opcional solamente puede ser reservado, quedando a disponibilidad, siendo confirmado al inicio ' +
          'de la renta y cobrado al finalizar la misma. Su costo no está incluido en la tarifa y se mostrará un precio ' +
          'estimado de manera informativa, sujeto a cambios sin previo aviso.',
        perDay: '(por día)',
        GPS: 'Navegador satelital',
        babySeat: 'Asiento para bebés',
        childrenSeat: 'Asiento para niños',
        elevatorSeat: 'Asiento elevador para niños',
        elevatorSeatMobile: 'Asiento elevador',
      },
      changePlan: {
        title: 'Cambiar plan de tarifa',
        quoteFee: 'Cotizar esta tarifa',
        selectedFee: 'Tarifa seleccionada',
      },
      requirements: {
        title: 'REQUISITOS PARA RENTAR UN VEHÍCULO',
        question1: 'Edad Mínima',
        response1:
          'La edad mínima para alquilar un vehículo es de 25 años. Entre 21 y 24 años (Conductor Joven) podrán estar sujetos a un cargo adicional que variará según la oficina de renta y es posible que no puedan alquilar vehículos de categoría Premium, De Lujo, SUVs, Minivan Maxivan, Especial, SUV, Minivan, Convertible, Crossover. Para los conductores adicionales aplica el mismo requisito de edad mínima.',
        question2: 'Identificación',
        response2:
          'El titular de la renta y cada conductor adicional deberán presentar una identificación oficial vigente con fotografía expedida en el país de residencia y una antigüedad mínima de un año. Para rentas internacionales será el pasaporte.',
        question3: 'Licencia de conducir',
        response3:
          'Presentar físicamente una licencia de conducir vigente expedida en el país de residencia del titular de la renta y conductores adicionales con una antigüedad mínima de un año (en determinados destinos y grupos de autos deberá tener de 2 a 3 años). En algunas ciudades de Estados Unidos y países se requiere presentar la Licencia Internacional de Conducir junto con la licencia de conducir del país de origen, aplicándose también a cada conductor adicional.',
        question4: 'Tarjeta de crédito',
        response4:
          'Se deberá presentar físicamente una tarjeta de crédito internacional valida y vigente con una antigüedad mínima de un año a nombre del titular de la renta teniendo su nombre impreso o grabado. No se aceptan tarjetas de débito debido a que no permiten preautorizaciones y el depósito en garantía no podrá ser reembolsado.',
        question5: 'Cargos e Impuestos Extras',
        response5:
          'Podrán aplicarse cargos e impuestos extras por conductor joven, equipamiento opcional o por devolución en una oficina diferente a la del inicio del alquiler (One-Way Fee).',
        question6: 'Comprobante de reserva prepagada (Voucher)',
        response6:
          'Al inicio de la renta se podrá presentar una copia impresa o electrónica del comprobante de confirmación de la reserva prepagada (voucher). Este documento confirma el plan de renta contratado con los servicios que se encuentran incluidos, al igual que la disponibilidad del vehículo dentro de la categoría seleccionada. Si la reserva es válida para pago en destino (POD) el titular de la renta se presentará en la oficina de la arrendadora que corresponda proporcionando el número de reserva para iniciar el proceso de alquiler.',
        question7: 'Información importante',
        response7:
          'Las arrendadoras se reservan el derecho de no aceptar cualquier solicitud de alquiler si no cumplen con alguno de los requisitos para rentar un vehículo o a su criterio, la persona constituya un riesgo para la comunidad.',
      },
    },
    step3: {
      agencyOrOrganizationPayment: {
        reservationValue: 'Valor total de la renta:',
        discount: 'Descuento AutoRenta (sólo prepago):',
        commission: 'Comisión de la Agencia (sólo prepago):',
        neto: 'Neto a pagar (sólo prepago):',
        titleReservation1: 'Pagar reserva con tarjeta de crédito',
        titleReservation2: 'El voucher y la factura se enviarán por E-mail y se cargarán en su perfil de usuario.',
        choose: 'Seleccione el método de pago:',
        next: 'Siguiente',
        bankTitle: 'Para pagar con una transferencia bancaria',
        bankSubtitle: 'Realiza un depósito o transferencia a la siguiente cuenta bancaria.',
        bank: 'Banco: ',
        accountNumber: 'Número de cuenta: ',
        routeNumber: 'Giros Electrónicos: ',
        deposit: 'Depósitos directos: ',
        swift: 'SWIFT: ',
        message: 'Luego, envía el comprobante electrónico por E-mail a:',
      },
      payment: {
        titleReservation: 'Paga esta reserva con tarjeta de crédito',
        subtitleReservation1: '¡Paga ahora y obtén un ',
        subtitleReservation2: ' descuento de en la tarifa base de esta reserva!',
        choose: 'Por favor selecciona el método de pago para esta reserva:',
        creditCard: 'Pagar con Tarjeta de Crédito / Débito',
        next: 'Siguiente',
        creditCardPayment: {
          cardNumber: 'Número de la tarjeta',
          country: 'País de emisión',
          cvc: 'CVC (código de seguridad)',
          cvcMobile: 'Código de seguridad',
          expirationDate: 'Vigencia MM/AA',
          postalCode: 'Códigal postal',
          payNow: 'Pagar esta reserva ahora',
          payNow2: 'Pagar ahora',
          back: 'Volver',
        },
        account: 'Ingresa los datos de tu cuenta',
        email: 'Direccion de E-mail',
        password: 'Contraseña',
        login: 'Iniciar sesión',
        back: 'Volver',
        payOk: '¡Pago exitoso!',
        text1: 'Para pagar esta reserva en destino (POD)',
        text2: 'Dirígete a la oficina de la arrendadora seleccionada y menciona el número de reserva.',
        text3:
          'El titular de la renta deberá cumplir con los requisitos para rentar un vehículo: edad ' +
          'mínima, Identificación oficial, licencia de conducir y tarjeta de crédito internacional ' +
          'valida.',
        reservationNumber: 'Para pago en destino proporciona la clave de confirmación:',
      },
      reservationState: {
        cancelReservationModal: {
          title: 'Cancelar una reserva',
          subtitle:
            '¡Atención! Estás a punto de cancelar tu reserva. ¿Deseas continuar? \n' +
            'Una vez cancelada esta acción no podrá deshacerse.',
          lastname: 'Apellido del cliente',
          reservationNumber: 'Número de reserva AutoRenta',
          email: 'Direccion de E-mail',
          agency: 'ID de Agencia de Viajes',
          corporation: 'Id Corporativo',
          cancel: 'Cancelar esta reserva',
        },
        titleReservation: '¡Realizaste la reserva correctamente!',
        textReservation:
          'Consulta a continuación las opciones de pago que te ofrecemos para esta reserva comunícate al: 954.237.4737 o por correo electrónico: info@autorenta.com. Recuerda que algunos cargos e impuestos indicados podrían no estar incluidos en la tarifa base, así como el equipamiento opcional, los cuales solamente podrán ser pagados en destino. ',
        titlePayment: '¡Pagaste la reserva correctamente!',
        textPayment1: 'Cobramos ',
        textPayment2: ' a la tarjeta con terminación ',
        textPayment25:
          'Recuerda que los impuestos y cargos así como el equipamiento opcional requerido deberán ser abonados en destino en las oficinas de la compañía arrendadora al inicio de la renta.',
        textPayment3: '¡Obtuviste un ',
        textPayment4: 'En breve te enviaremos el Voucher e Invoice correspondiente. ',
        textPayment5: ' de descuento ',
        subtitle: 'Para administrar la reserva en AutoRenta utiliza el número: ',
        emailText: 'La reserva será enviada al E-mail:',
        agencyText: 'Número ID de Agencia de Viajes',
        organizationText: 'Número de ID Corporativo',
        cancel: 'Cancelar',
        print: 'Imprimir',
      },
      reservationDetails: {
        title: 'Detalle de la reserva',
        fullName: 'Nombre y apellido',
        email: 'E-mail',
        phone: 'Teléfono',
        estimatedTotal: 'Total estimado de la reserva',
        flyCompany: 'Compañía aérea',
        flyNumber: 'Número de vuelo',
        promotionalCode: 'Código promocional aplicado',
        coupon: 'Número de cupón aplicado',
        pickUpTitle: 'oficina de inicio',
        dropOffTitle: 'oficina de devolución',
        orSimilar: 'o similar',
        seats: 'asientos',
        doors: 'puertas',
        bigBags: 'maletas grandes',
        smallBags: 'maletas pequeñas',
        gear: 'Transmisión',
        air: 'Aire acondicionado',
        selectedPlan: 'Plan seleccionado',
        detailsTitle: 'Tarifa, cargos e impuestos',
        baseFee: 'Tarifa base',
        optionalEquipment: 'Total de equipamiento opcional',
        estimated: 'Total Estimado',
        additionalEquipmentTitle: 'Equipamiento opcional',
        optionalEquipmentTaxes: 'Podrán aplicarse cargos e impuestos extras por el equipamiento opcional seleccionado.',
        conditionsTitle: 'Condiciones generales de la renta',
        conditionText1:
          'AutoRenta confirma tipos o categorías y no marcas o modelos de vehículos de cada arrendadora. Los mismos son a modo orientativo y pueden variar sin previo aviso. La imagen que se muestra es solamente a modo ilustrativo.',
        conditionText2:
          'La edad mínima para alquilar un vehículo es de 25 años. Entre 21 y 24 años (Conductor Joven) podrán estar sujetos a un cargo adicional que variará según la oficina de renta y es posible que no puedan alquilar vehículos de categoría Premium, De Lujo, SUVs, Minivan Maxivan, Especial, SUV, Minivan, Convertible, Crossover. Para los conductores adicionales aplica el mismo requisito de edad mínima.',
        conditionText3:
          'El titular de la renta y conductores adicionales deberán presentar físicamente una licencia de conducir vigente expedida en su país de residencia con una antigüedad mínima de un año (en determinados destinos y grupos de autos deberá tener de 2 a 3 años).',
        conditionText4:
          'En algunas ciudades de Estados Unidos y países se requiere presentar la Licencia Internacional de Conducir junto a la licencia de conducir del país de origen, aplicándose también a cada conductor adicional.',
        conditionText5:
          'El titular de la renta deberá presentar físicamente una tarjeta de crédito internacional valida y vigente con una antigüedad mínima de un año teniendo su nombre impreso o grabado.',
        conditionText6:
          'Se realizará un depósito en garantía (preautorizacion) en la tarjeta de crédito por los cargos estimados de la renta. No es un cargo es únicamente un bloqueo y el monto o porcentaje dependerá de la arrendadora. Al finalizar el alquiler será liberado y el tiempo que tarde su restitución dependerá del banco.',
        conditionText7:
          'No se aceptan tarjetas de débito debido a que no permiten preautorizaciones y el depósito en garantía no podrá ser reembolsado.',
        conditionText8:
          'El equipamiento opcional solamente puede ser reservado, quedando a disponibilidad, siendo confirmado al inicio de la renta y cobrado al finalizar la misma. Su costo no está incluido en la tarifa y se mostrará un precio estimado de manera informativa, sujeto a cambios sin previo aviso.',
        conditionText9:
          'Podrán aplicarse cargos e impuestos extras por conductor joven, equipamiento opcional o por devolución en una oficina diferente a la del inicio del alquiler (One-Way Fee).',
        conditionText10:
          'La mayoría de las arrendadoras pueden esperar al cliente hasta dos horas para el inicio de la renta en base a la hora indicada en la reserva, si crees que llegaras más tarde, recomendamos te pongas en contacto directamente con la oficina de renta de la arrendadora seleccionada para notificar la hora estimada en que te podrás presentar para hacer efectiva tu reserva.',
        conditionText11:
          'En cuanto a la devolución del vehículo, las arrendadoras pueden ofrecer un período de gracia de hasta 29 minutos en base a la hora indicada en la reserva. Una vez pasado este período de tiempo, es posible que se realice un cargo adicional por hora o día adicional de acuerdo con el tiempo transcurrido.',
        conditionText12:
          'Si la renta será extendida por más tiempo (horas o días) a lo indicado en la reserva, se deberá contactar directamente con la oficina de renta de la arrendadora seleccionada para notificar la hora y/o día estimado para la devolución del vehículo y terminación de la renta.',
        conditionText13:
          'Para cualquier cambio en la reserva comunícate al: 954.237.4737 o por correo electrónico: info@autorenta.com.',
      },
    },
    promotion: {
      home: 'Inicio',
      title: 'Promociones',
    },
    faq: {
      title: 'Preguntas Frecuentes',
      subtitle:
        'Resolvemos tus dudas a las preguntas más frecuentes que tienen nuestros clientes al alquilar un vehículo.',
      question1: '¿Cuáles son los requisitos para rentar un coche?',
      response1_1:
        '- Edad Mínima: La edad mínima es de 25 años. Entre 21 y 24 años (Conductor Joven) podrán estar sujetos a un cargo extra que variará según la oficina de renta ',
      response1_2:
        '- Identificación: Se deberá presentar una identificación oficial vigente con fotografía expedida en el país de residencia y una antigüedad mínima de un año. Para rentas internacionales será el pasaporte.',
      response1_3:
        '- Licencia de conducir: Presentar físicamente una licencia de conducir vigente expedida en el país de residencia del titular de la renta y conductores adicionales con una antigüedad mínima de un año (en determinados destinos y grupos de vehículos deberá tener de 2 a 3 años).',
      response1_4: 
        '- Tarjeta de crédito: Se deberá presentar físicamente una tarjeta de crédito internacional valida y vigente con una antigüedad mínima de un año a nombre del titular de la renta teniendo su nombre impreso o grabado. No se aceptan tarjetas de débito debido a que no permiten preautorizaciones y el depósito en garantía no podrá ser reembolsado.',
      response1_5: 'Los conductores adicionales deberán cumplir con la Edad mínima, presentando identificación y licencia de conducir con las mismas características antes mencionadas.',
      question2: '¿Es necesario contar con una Licencia Internacional de Conducir?',
      response2:
        'En algunas ciudades de Estados Unidos y países se requiere presentar la Licencia Internacional de Conducir junto con la licencia de conducir del país de origen, aplicándose también a cada conductor adicional. Para conocer en donde se requiere presentar la Licencia Internacional de Conducir comunícate al: 954.237.4737 o por correo electrónico: info@autorenta.com',
      question3: '¿Me van a solicitar un depósito en garantía, incluso si ya pagué la reserva en la página de AutoRenta?',
      response3:
        'En todas las rentas, incluso en las prepagadas se solicitará un depósito en garantía o preautorización por los cargos estimados de la renta o no incluidos en el plan seleccionado. No es un cargo es únicamente un bloqueo y el monto o porcentaje dependerá de la arrendadora. Al finalizar el alquiler será liberado y el tiempo que tarde su restitución en tu cuenta dependerá del banco.',
      question4: '¿De cuánto es el depósito en garantía que me van a solicitar y retener?',
      response4:
        'El monto o porcentaje del depósito en garantía o preautorización puede variar de acuerdo con la temporada, oficina de renta y tipo de vehículo. Este monto o porcentaje será confirmado por la arrendadora al inicio de la renta. Al finalizar el alquiler será liberado y el tiempo que tarde su restitución en tu cuenta dependerá del banco.',
      question5: '¿Es posible utilizar una tarjeta de crédito de un familiar o amigo para el depósito de garantía?',
      response5:
        'Todos los documentos que se presenten incluyendo la tarjeta de crédito deberán estar a nombre del titular de la renta; por lo tanto, no será posible hacer uso de una tarjeta, ni ningún documento a nombre de otra persona, incluyendo el conductor adicional.',
      question6: '¿Qué seguros y/o servicios puedo adquirir en mi reserva?',
      response6_1:
        'A través de nuestros planes tarifarios, tendrás la posibilidad de elegir el que mejor se adapte a tus necesidades de rente, los cuales incluyen seguros, servicios adicionales como gasolina, navegador satelital, conductor adicional, entre otros. Siempre se especificarán en las inclusiones de cada plan tarifario.',
      question7: '¿Qué seguros son obligatorios?',
      response7:
        'Los seguros con los que cuentan cada arrendadora son opcionales y ninguno es obligatorio. En los planes tarifarios se incluyen los que se consideran como recomendables para que manejes con toda seguridad.',
      question8: '¿Cuál es el seguro básico que se incluye en la renta?',
      response8:
        'En la mayoría de las arrendadoras se incluye un seguro básico de responsabilidad civil, teniendo planes tarifarios en los que se tiene considerado la ampliación a este seguro.',
      question9: '¿Es más económico agregar los seguros al momento de hacer la reserva o al inicio de la renta?',
      response9:
        'Te recomendamos seleccionar uno de los planes tarifarios que ya tienen los seguros incluirlos al momento de hacer la reserva ya qué los precios de los seguros pueden ser mayor son adquiridos al momento del inicio de la renta.',
      question10: '¿Cómo funcionan las coberturas de los seguros adquiridos por medio de AutoRenta?',
      response10:
        'En caso de cualquier situación o accidente durante tu periodo de renta, te debes de poner en contacto inmediatamente con la arrendadora o a su servicio de emergencias para explicarles lo sucedido y te indiquen el procedimiento a seguir.',
      question11: 'En algunas tarifas se dice que tienen protección parcial por daños al vehículo ¿Qué significa?',
      response11:
        'Si en el plan tarifario se indica que incluye LDW - Protección parcial por daños al vehículo o CDW - Protección parcial por daños al vehículo es que en caso de daño, pérdida o robo del vehículo rentado se tendrá que pagar un deducible / franquicia. La cantidad o porcentaje de deducible / franquicia que se deberá cubrir variará dependiendo del país, oficina de renta y tipo de vehículo.',
      question12: 'En caso de resultar involucrado en un accidente de tránsito ¿Qué debo hacer?',
      response12:
        'Si resultas involucrado en un accidente de tránsito, te debes de poner en contacto inmediatamente con la arrendadora o a su servicio de emergencias para explicarles lo sucedido y te indiquen el procedimiento a seguir.',
      question13: '¿Como funciona la asistencia en carretera que se encuentra incluida en las tarifas de AutoRenta?',
      response13:
        'En caso de presentar alguna falla mecánica o electrónica con el vehículo rentado, deberás comunicarte directamente con oficina de renta para solicitar la asistencia correspondiente de manera oportuna.',
      question14: '¿Para mi bebé debo solicitar una silla?',
      response14:
        'Bebes, niñas y niños son considerados como pasajeros y deben tener su propia silla o adaptador, teniendo las siguientes opciones:',
      response14_1:
        '- Asiento de seguridad para bebé: Bebés de 2-20 lbs o 2.27-9.07 kilos aproximadamente.',
      response14_2:
        '- Asiento de seguridad para niños: Bebes / Niñas / Niños Pequeños de 20-40 lbs o 9.07-18.16 kilos.',
      response14_3:
        '- Asiento elevador para niños: Niñas / Niños de 40-80 lbs o 18.16-36.32 kilos',
      question15: '¿Cómo puedo adicionar la silla para bebé en mi reserva?',
      response15:
        'Nuestros planes tarifarios no incluyen este servicio. Desde el sitio web de AutoRenta podrás solicitar la silla para bebe/niñas/niños quedando a disponibilidad o bien, en la oficina de renta. En ambos casos, se tendrá un cargo extra.',
      question16: '¿Es posible incluir más de un conductor adicional en mi reserva?',
      response16:
        'Si es posible incluir más de un conductor adicional en tu reserva. Todo conductor adicional deberá estar presente físicamente al inicio de la renta para su registro y cumplir con los mismos requisitos para rentar un vehículo que el titular de la reserva. En la mayoría de los planes tarifarios de AutoRenta incluyen un conductor adicional, si se registra otra más tendrá un cargo extra.',
      question17: 'Si soy el único conductor registrado en el contrato de alquiler, ¿puede alguien más conducir el vehículo rentado?',
      response17:
        'Solo el titular de la reserva y conductores adicionales registrados al inicio de la renta podrán conducir el vehículo rentado. Todo conductor adicional deberá estar presente físicamente al inicio de la renta para su registro y cumplir con los mismos requisitos para rentar un vehículo que el titular de la reserva. En la mayoría de los planes tarifarios de AutoRenta incluyen un conductor adicional, si se registra otra más tendrá un cargo extra.',
      question18: '¿Con cuánto tiempo de anticipación debo hacer una reserva?',
      response18:
        'Es importante que se realice con una anticipación adecuada para garantizar que se tenga el tipo de vehículo requerido disponible. Aunque se puede hacer la reserva horas antes del inicio de la renta se tendrá que realizar con los únicos tipos de vehículos disponibles; o bien, ya no se tendría ninguno disponible.',
      question19: '¿Cómo puedo cancelar o modificar mi reserva?',
      response19_1:
        'Podrás cancelar tu reserva desde la sección "Buscar reserva" y luego desde la opción "Cancelar"; o bien, en el correo electrónico que se te envío con la confirmación de la reserva puedes elegir QUIERO CANCELAR ESTA RESERVA y luego desde la opción "Cancelar".',
      response19_2:
        'Si pagaste la reserva revisa las Políticas de Cancelación.',
      response19_3:
        'Para modificar tu reserva sin costo alguno, se tiene que realizar directamente por AutoRenta por lo que es necesario comunicarse al: 954.237.4737 o por correo electrónico: info@autorenta.com. Cualquier cambio que necesites hacer hay que realizarlos con 36 horas antes de la hora local de inicio de la renta.',
      question20: '¿Es posible realizar la modificación de mi reserva cuando esta se encuentra en uso?',
      response20:
        'Una vez se haya firmado y abierto el contrato de alquiler no será posible realizar ninguna modificación en la reserva. ',
      question21: '¿Es posible incluir más de un conductor adicional en mi reserva?',
      response21:
        'Si, es posible incluir más de un conductor adicional en tu reserva. Algunas compañías arrendadoras te brindan esta opción. Todo conductor adicional deberá estar presente al momento de retirar el vehículo y cumplir con los mismos requisitos que el conductor principal.',
      question22:
        '¿Existe algún tipo de cargo extra por realizar modificaciones en mi reserva?',
      response22:
        'AutoRenta no genera ningún cargo extra por los cambios que necesites hacer en tu reserva. Sin embargo, ten en cuenta que la tarifa puede variar según las modificaciones solicitadas y el cargo extra será cobrado por el asesor al momento de realizar dicho proceso cuando la reserva haya sido pagada previamente.',
      question23: '¿Todos los impuestos y costos están incluidos en el valor de mi reserva?',
      response23:
        'El valor de tu reserva incluye todos los impuestos y cargos obligatorios. Ten en cuenta que algunos cargos e impuestos extras se deberán pagar en destino, así como el equipamiento opcional requerido en tu reserva.',
      question24: '¿Cómo puedo pagar una reserva?',
      response24:
        'Se tienen tres formas para el pago de una reserva realizada por el sitio web de AutoRenta:',
      response24_1:
        '1.	Pago en destino (POD) el cual al finalizar la renta se realizará el cargo del alquiler en la tarjeta de crédito que se presentó al inicio de la renta. No se aceptan dinero en efectivo en ningún tipo de moneda.',
      response24_2:
        '2.	Pagar con tarjeta de crédito o débito antes de la renta a través del sitio web de AutoRenta (Aplica para Clientes Directos, Agencias de Viajes y Corporativos / Empresas).',
      response24_3:
        '3.	Pagar con transferencia electrónica antes de la renta a través del sitio web de AutoRenta (Aplica únicamente para Agencias de Viajes y Corporativos / Empresas).',
      response24_4:
        'En todos los casos el titular de la reserva deberá presentar físicamente una tarjeta de crédito internacional valida y vigente con una antigüedad mínima de un año a nombre del titular de la renta teniendo su nombre impreso o grabado.',
      question25:
        '¿Al realizar el pago de la reserva a través del sitio web de AutoRenta me entregaran algún comprobante?',
      response25:
        'Se te hará llegar por correo electrónico el comprobante de confirmación de la reserva prepagada (voucher) o si estas registrado en el sitio web de AutoRenta podrás descargarlo a través de tu cuenta. En el voucher se especifican los datos de la reservar, confirmando el plan de renta contratado con los servicios que se encuentran incluidos, al igual que la disponibilidad del vehículo dentro de la categoría seleccionada y el valor de la renta. Al inicio de la renta podrás presentar una copia impresa o electrónica del voucher.',
      question26:
        '¿Con cuánto tiempo de anticipación puedo pagar una reserva a través del sitio web de AutoRenta?',
      response26:
        'Debes realizar el pago de la reserva 48 antes de la hora local de inicio de la renta.',
      question27: '¿Hay alguna penalización si cancelo la reserva?',
      response27:
        'Si pagaste la reserva con tarjeta de crédito y cancelas la reserva hasta 48 horas antes de la hora local de inicio de la renta no habrá ningún cargo. Entre 48 y 36 horas antes de la hora local de inicio de la renta se realizará un cargo del 20% sobre el total del prepago realizado y recibirás un crédito en la tarjeta utilizada del 80% sobre el total del prepago realizado y después de 36 horas a la hora local de inicio de la renta no se realizará ningún crédito o reembolso. Si pagaste la reserva con transferencia electrónica (Agencias de Viajes y Corporativo/Empresa) no habrá ninguna penalización o cargo, realizándose un credit voucher por el total del prepago realizado.',
      question28:
        'Soy de una agencia de viajes y tengo un credit voucher ¿Lo tengo que ocupar para el mismo cliente, destino y valor?',
      response28:
        'El credit voucher emitido tendrá una vigencia de 6 (seis) meses a partir del día de su generación y se podrá utilizar para prepagar reservas a futuro de cualquiera de sus clientes, sin considerar el nombre, destino o valor.',
      question29:
        '¿Por qué el valor de la tarifa en mi cotización final es más alto en comparación a la tarifa brindada en los resultados de la disponibilidad (primer paso)?',
      response29:
        'Deberás tener en cuenta que el valor que se muestra en la página de disponibilidad de tu cotización (primer paso), es un valor básico correspondiente a la renta del auto. Una vez confirmada la reserva, el valor podrá aumentar teniendo en cuenta que será el valor total para pagar incluyendo cargos e impuestos correspondientes, además de cualquier equipamiento opcional requerido o cargos por devolución en otra oficina, según corresponda.',
      question30:
        '¿Cómo puedo evitar el recargo a conductores menores de 25 años?',
      response30:
        'Si es conductor joven (de 24 a 21 años) el cargo no se puede excluir. Aplicándose también a los conductores adicionales.',
      question31:
        '¿Cómo adquirir el sistema electrónico para el pago de casetas y cuánto cuesta?',
      response31:
        'El sistema electrónico de casetas/peajes no se encuentra incluido en ninguna de nuestras tarifas. Este servicio podrá ser adquirido directamente en la oficina de renta. El costo del servicio se te informará al inicio de la renta, así como la acreditación del costo de cada caseta / peaje por las que llegues a pasar y su forma de pago.',
      question32:
        '¿Cómo debo proceder en caso de cobros adicionales por servicio de casetas?',
      response32:
        'Al no ser un servicio incluido por parte de AutoRenta, te deberás poner en contacto directamente con la arrendadora.',
      question33:
        '¿Puedo rentar el vehículo en una oficina y entregarlo en otra?',
      response33:
        'Se podrá realizar la devolución del vehículo en una oficina y/o ciudad diferente, siempre y cuando el sitio web de AutoRenta proporcione la opción. Este servicio puede tener un cargo extra el cual se mostrará al momento de hacer la reserva online y se deberá pagar al finalizar la renta más los impuestos correspondientes. El equipamiento opcional requerido también tendrá un cargo extra más los impuestos correspondientes.',
      question34:
        '¿Cómo puedo evitar cargos adicionales en mi reserva?',
      response34:
        'Al inicio de la renta revisa detalladamente tu contrato de alquiler y asegúrate de que no hayas aceptado ningún seguro, equipamiento o servicios adicionales a lo incluido en el plan tarifario seleccionado al realizar la reserva. Todo aquello que no está indicado lo tendrás que pagar al finalizar la renta.',
      question35:
        '¿Qué sucede si entrego el auto más tarde de lo acordado?',
      response35:
        'Entregar el vehículo después de la hora reservada generara un cargo extra. Si necesitas entregarlo más tarde hay que comunicarse directamente a la oficina de renta para informar cuando lo devolverás y lo tengan considerado en tu contrato de renta.',
      question36:
        '¿Cuál es la política de combustible en el alquiler?',
      response36:
        'Si en tu reserva seleccionaste el plan tarifario que incluye el tanque de gasolina, podrás devolver el vehículo rentado con el tanque vacío o el nivel que desees. Si el plan tarifario seleccionado no incluye el tanque de gasolina, deberás devolver el vehículo con el mismo nivel de combustible con el que te fue entregado al inicio de la renta, en el caso de no hacerlo así se te cobrará la cantidad de combustible faltante más un cargo por servicio.',
      question37:
        '¿Puedo alquilar un auto por más de 30 días?',
      response37:
        'Si es posible rentar un vehículo por más de 30 días; sin embargo, se tiene que realizar una nueva reserva por los días adicionales y realizar el pago de esta, si es el caso. Tendrás que presentarte físicamente en la oficina de renta para el cierre del primer contrato y apertura del segundo y dependiendo del estado del vehículo se asignará otro para el mantenimiento preventivo del primer vehículo asignado.',
      question38:
        '¿Existe alguna restricción para conducir el auto rentado hacia otro país y/o estado?',
      response38:
        'Cada arrendadora tiene sus propias políticas para al cruce de fronteras de un país a otro, incluso de una ciudad a otra. Para conocer las restricciones sobre el cruce de fronteras comunícate al: 954.237.4737 o por correo electrónico: info@autorenta.com.',
      question39:
        '¿Tengo alguna restricción de uso del auto rentado?',
      response39:
        'Todos los vehículos son para uso particular y privado, no están acondicionados para carga. Los vehículos deben ser conducidos en caminos y carreteras pavimentadas, no por veredas, brechas o lugares de difícil acceso. Toda restricción referente al uso del vehículo será aclarada al momento de firmar el contrato de alquiler.',
      question40:
        '¿Todas las compañías de alquiler ofrecen servicio de traslado?',
      response40:
        'Generalmente las arrendadoras tienen el servicio de transporte de cortesía para el traslado de la oficina del aeropuerto al estacionamiento en donde estará tu vehículo reservado esperándote.',
      },
    cookies: {
      title: 'Políticas de cookies.',
      subtitle:
        'Estas políticas definen como AutoRenta.com recopila y usa información a través de cookies. A continuación será descrita la manera como la página web AutoRenta.com utiliza esta tecnología para aportar funcionalidad adicional para el cliente.',
      condition:
        'La no aceptación de estas políticas no implicará un acceso limitado del cliente al sitio web. Solamente reducirá el nivel de interacción con las utilidades de la página.',
      question1: '¿Qué son las cookies?',
      response1_1:
        'Las cookies son pequeños archivos de texto que el navegador almacena en tu dispositivo (PC o dispositivo móvil). Estos pequeños archivos permiten que la página web almacene información tal como tus preferencias, así como dirección IP o incluso información sobre tu sistema operativo y/o dispositivo (PC o Móvil).',
      response1_2:
        'Esta tecnología de cookies se puede representar como la memoria de una página web utilizada para identificar al cliente y sus preferencias para presentar información más relevante.',
      question2: '¿Qué cookies usa AutoRenta.com y cómo funcionan?',
      response2_1: 'Cookies de Inicio de Sesión',
      response2_2:
        'Usamos cookies para identificar cuando has iniciado sesión en nuestra plataforma, y así poder recordarte cuando vuelvas a él. Estas cookies son eliminadas cada vez que finalices tu sesión. Esto garantiza también que el usuario pueda acceder a ciertas áreas e informaciones cuando haya iniciado sesión. ',
      question3: 'Cookies externos en nuestra página',
      response3_1:
        'Nuestro sitio utiliza Google Analytics como herramienta de análisis de tráfico. Lo usamos para entender mejor el comportamiento de nuestros clientes dentro del sitio web. Estas cookies pueden registrar el tiempo en el que el cliente permaneció en la página web así como las páginas especificas a las que accedió, con la finalidad de mostrar contenido adecuado.',
      response3_2:
        'De vez en cuando probamos nuevas funcionalidades y diseño en nuestro sitio para mejorar la experiencia del usuario. Utilizamos cookies para medir los resultados.',
      question4: 'Información reunida de tu dispositivo (PC / móvil)',
      response4:
        'Recopilamos información al momento que el cliente accede a nuestro sitio web. Esta información es recopilada de tu navegador e incluye dirección IP, sistema operativo, tipo de navegador, resolución de la pantalla y el sitio de referencia usada para encontrar AutoRenta.com',
      question5: 'Cómo deshabilitar el almacenamiento de información de las cookies',
      response5_1:
        'En el caso en el que el cliente no se sienta cómodo con el uso de la tecnología de cookies y con la información que AutoRenta.com pueda recopilar, siempre puede acceder a la configuración de su navegador y borrar o incluso retirar los permisos de acceso de las cookies.',
      response5_2:
        'Cada navegador tiene diferentes conjuntos de opciones que pueden limitar las funciones de las cookies de una página web. Te recomendamos que busques en la sección ayuda de tu navegador la información necesaria para deshabilitar estas funcionalidades en la sección ayuda de tu navegador.',
      response5_3:
        'También puedes gestionar las cookies en preferencias de cookies en este enlace puedes habilitar y deshabilitar las cookies que quieras',
      question6: 'Más información',
      response6_1:
        'Esperamos haber podido disipar cualquier duda que el cliente pueda tener referente al uso de cookies así como sobre el uso de los datos recopilados en nuestro sistema por esta tecnología. Sin embargo, si todavía hubiese dudas o preguntas referentes a la materia, estamos a la entera disposición del cliente.',
      response6_2: 'Nuestra información de contacto:',
      response6_3: 'Email: info@autorenta.com',
      response6_4: 'Website: www.autorenta.com',
      response6_5: 'Dirección: 4000 Ponce de Leon Blvd. Suite 470, Coral Gables, Florida 33146, Estados Unidos.',
      response6_6: 'Copyright © 2021 AutoRenta.com es una marca registrada de Mobiility, LLC. Todos los derechos reservados.',
    },
    privacy: {
      title: 'Políticas de privacidad - Aviso de Privacidad.',
      subtitle1:
        'Estas Política de Privacidad han sido elaboradas para reforzar nuestro compromiso de preservar la información personal de nuestros clientes.',
      subtitle2:
        'El siguiente documento aborda como AutoRenta.com maneja la información confidencial del usuario, sea recopilada directamente a través de la página web / móvil o almacenada en su base de datos a través de otros métodos de recolección, como llamadas telefónicas o formularios de suscripción.',
      subtitle3:
        'Estas políticas no son aplicables a compañías que no sean propiedad o estén bajo control de AutoRenta.com, así como individuos que no actúen como empleados o contratados de AutoRenta.com.',
      subtitle4:
        'Nuestro sitio web puede tener enlaces a sitios web externos. AutoRenta.com no se responsabiliza de las políticas de privacidad ni del contenido de las mismas. Te recomendamos siempre que leas las política de privacidad de cualquier sitio web antes de proporcionar cualquier información confidencial.',
      subtitle5:
        'Estas políticas de privacidad dependen de la norma vigente y por lo tanto está sujeta a cambios. Te recomendamos revisarlas periódicamente.',
      subtitle6:
        'Si AutoRenta.com realizase cambios sustanciales en sus procesos de tratamiento de información confidencial, y esto afectase las condiciones de seguridad o confidencialidad, el cliente sería diligentemente notificado a través de una notificación pública en nuestra página de inicio o uba notificación via e-mail para usuarios registrados en nuestras base de suscriptores.',
      subtitle7: 'Las siguientes disposiciones se deben considerar a propósito de estas políticas:',
      point1_1:
        'AutoRenta.com recopila información personal (capaz de identificar un usuario) cuando: el usuario se registre y crea una nueva cuenta; cuando el usuario se suscriba para participar en nuestras promociones; o cuando el usuario se ponga en contacto con nosotros a través de los canales de atención al cliente.',
      point1_2:
        'Los datos recopilados y su uso están tipificados en el punto 4 de esta política.\n' +
        'Si el usuario necesitase más información o ponerse en contacto directo, podría hacerlo a través de E-mail: info@autorenta.com',
      point1_3:
        'Esta tipificado como derecho del usuario el solicitar una copia de todas las informaciones referentes a su persona. Esta solicitud puede realizarse a través del email info@autorenta.com',
      point2_1:
        'Para cada modelo de recolección de datos, puede solicitarse diferente información dependiendo de el propósito de dicha recopilación. El usuario siempre será informado de la recolección de datos y podrá optar por no proveerlos. Las consecuencias de la decisión, independientemente de cual sea, también sera informada.',
      point2_2:
        'El propósito de los datos recopilados, así como el tiempo de retención de estos datos figurará en el formulario de registro siempre que sea posible.',
      point3_1:
        'AutoRenta.com recibe y almacena información de navegador (dirección I.P y páginas visitadas) automáticamente a través de cookies.',
      point3_2:
        'Los cookies son secciones cortas de información que generalmente incluyen un identificador anónimo único enviado a tu navegador por algunas páginas web que se mantiene almacenada en el disco duro de tu ordenador. Se utilizan para identificarte durante tu próxima visita a dichas páginas web.',
      point4_1:
        'Ingresar datos personales de usuario en el sitio web de AutoRenta.com, así como aceptar los cookies del navegador, no son necesarios para navegar el sitio web. El usuario que decida hacerlo automáticamente reconoce y acepta los términos y condiciones aquí mencionados.',
      point5_1:
        'Todos los datos recopilados por AutoRenta.com son gestionados a través de protocolos de internet seguros y encriptados.',
      point6_1:
        'AutoRenta.com hace el máximo esfuerzo para el correcto y confidencial almacenamiento de la información personal de cada cliente.',
      point7_1: 'Toda la información recopilada es almacenada en la base de datos de AutoRenta.com, ubicada en: 4000 Ponce de Leon BLVD, Suite 470, Coral Gables, FL 33146.',
      point8_1:
        'AutoRenta.com utiliza la información personal del usuario para los siguientes propósitos generales: (I) informar al usuario sobre nuevos productos; (II) actualizar información de usuario para fines de contacto por E-mail o contacto telefónico, entre otros medios de comunicación; (III) agilizar la experiencia del usuario; (IV) elaborar datos estadísticos generales, sin identificar al usuario; (V) responder dudas y solicitudes del usuario; (VI) desarrollar campañas de marketing y comunicación, así como anunciar ofertas ó promociones; y (VII) notificar al usuario sobre novedades corporativas. Los datos proporcionados en el sitio web se mantendrán en nuestra base mientras sea necesario para nuestras operaciones, hasta que el usuario solicite su eliminación o hasta que retire la autorización para su uso.',
      point9_1:
        'El acceso a la información personal recolectada está restringido a empleados y personal autorizado de AutoRenta.com. Cualquier individuo que haga mal uso de estos datos y viole nuestras Políticas de Privacidad estarán sujeto a las sanciones aquí detalladas, además de las acciones legales pertinentes.',
      point10_1:
        'La información del usuario nunca será revelada a terceras personas, con la excepción de socios autorizados de AutoRenta.com. Adicionalmente, la información de usuario nunca será usada por AutoRenta.com para otros propósitos que los detallados aquí excepto si fuera por necesidad de orden judicial.',
      point11_1:
        'Por la presente, el usuario garantiza la veracidad y exactitud de la información personal proporcionada. AutoRenta.com no podría ser considerada responsable en el caso en el que la información fuese proporcionada errónea o falsamente por el usuario.',
      point12_1:
        'Los newsletters y promociones de marketing enviadas a través de E-mail permitirán al usuario la opción de darse de baja de recibir tales mensajes. Todas las solicitudes serán atendidas de forma automática.',
      point13_1:
        'Los servicios de E-mail marketing corren a cargo de una empresa tercerizada y contratada por AutoRenta.com, que usa sus propios servidores para enviar mensajes de E-mail marketing de nuestra parte.',
      point14_1:
        'Dicha compañía no almacena o usa la información de E-mail de los usuarios AutoRenta.com para otro propósito que no sea el envío de mensajes de acuerdo con las preferencias definidas por cada usuario en la página de AutoRenta.com.',
      point15_1:
        'El usuario será responsable de almacenar y salvaguardar su información de inicio de sesión. No recomendamos el uso de contraseñas fáciles, como fechas especiales, nombres o secuencias de números. Si el usuario sospechase que alguien pudiese haber obtenido conocimiento de su contraseña, ID de Agencia de Viajes o ID de Empresa / Compañía se recomienda cambiarla inmediatamente.',
      point16_1:
        'Si el usuario es informado por agentes externos sobre cualquier venta u oferta ofrecida por AutoRenta.com, el mismo deberá comprobar en nuestro sitio web la veracidad de la información. Cualquier información sobre ventas o servicios que no puedan ser confirmadas deberán ser desconsideradas.',
      point17_1:
        'Los datos recopilados solamente podrán ser utilizados para los propósitos descritos en esta Política de Privacidad.',
      point18_1: '2020 © AutoRenta.com. Todos los derechos reservados.',
    },
    cancellation: {
      title: 'Políticas de cancelación',
      subtitle: 'Nuestras políticas de cancelación varían según el tipo de cliente y la forma de pago que se haya utilizado:',
      question1: 'CLIENTE DIRECTO: Prepago con Tarjeta de Crédito a nombre del Cliente:',
      response1_1: '- Cancelación de la reserva hasta 48 horas antes de la hora local de inicio de la renta sin cargo.',
      response1_2: '- Cancelación de la reserva entre 48 y 36 horas antes de la hora local de inicio de la renta se realizará un crédito en la tarjeta utilizada del 80% sobre el total del prepago realizado.',
      response1_3: '- Cancelación de la reserva después de 36 horas a la hora local de inicio de la renta no se realizará ningún crédito o reembolso.',
      response1_4: '- Cancelación de la reserva cuando el cliente no cumpla con los Requisitos para rentar un vehículo no se realizará ningún crédito o reembolso.',
      response1_5: '- No presentarse a retirar el vehículo en la fecha y hora indicados en la reservada (No Show) no se realizará ningún crédito o reembolso.',
      question2: 'AGENCIA DE VIAJES: Prepago con Tarjeta de Crédito a nombre de la Agencia de Viajes:',
      response2_1: '- Cancelación de la reserva hasta 48 horas antes de la hora local de inicio de la renta sin cargo.',
      response2_2: '- Cancelación de la reserva entre 48 y 36 horas antes de la hora local de inicio de la renta se realizará un crédito en la tarjeta utilizada del 80% sobre el total del prepago realizado.',
      response2_3: '- Cancelación de la reserva después de 36 horas a la hora local de inicio de la renta no se realizará ningún crédito o reembolso.',
      response2_4: '- Cancelación de la reserva cuando el cliente no cumpla con los Requisitos para rentar un vehículo no se realizará ningún crédito o reembolso.',
      response2_5: '- No presentarse a retirar el vehículo en la fecha y hora indicados en la reservada (No Show) no se realizará ningún crédito o reembolso.',
      question3: 'AGENCIA DE VIAJES: Prepago con Transferencia Electrónica:',
      response3_1: '- Cancelación de la reserva antes y después de 48 horas a la hora local de inicio de la renta se emitirá un Credit Voucher* sobre el total del prepago realizado. No se realizará reembolso en efectivo, deposito o transferencia a ninguna cuenta bancaria.',
      response3_2: '- Cancelación de la reserva cuando el cliente no cumpla con los Requisitos para rentar un vehículo se emitirá un Credit Voucher* sobre el total del prepago realizado. No se realizará reembolso en efectivo, deposito o transferencia a ninguna cuenta bancaria.',
      response3_3: '- No presentarse a retirar el vehículo en la fecha y hora indicados en la reservada (No Show) se emitirá un Credit Voucher* sobre el total del prepago realizado. No se realizará reembolso en efectivo, deposito o transferencia a ninguna cuenta bancaria.',
      response3_4: '(*) El Credit Voucher emitido tendrá una vigencia de 6 (seis) meses a partir del día de su generación y se podrá utilizar para prepagar reservas a futuro de cualquiera de sus clientes.',
      question4: 'CORPORATIVO / EMPRESA: Prepago con Tarjeta de Crédito a nombre del Corporativo / Empresa:',
      response4_1: '- Cancelación de la reserva hasta 48 horas antes de la hora local de inicio de la renta sin cargo.',
      response4_2: '- Cancelación de la reserva entre 48 y 36 horas antes de la hora local de inicio de la renta se realizará un crédito en la tarjeta utilizada del 80% sobre el total del prepago realizado.',
      response4_3: '- Cancelación de la reserva después de 36 horas a la hora local de inicio de la renta no se realizará ningún crédito o reembolso.',
      response4_4: '- Cancelación de la reserva cuando el cliente no cumpla con los Requisitos para rentar un vehículo no se realizará ningún crédito o reembolso.',
      response4_5: '- No presentarse a retirar el vehículo en la fecha y hora indicados en la reservada (No Show) no se realizará ningún crédito o reembolso.',
      question5: 'CORPORATIVO / EMPRESA: Prepago con Transferencia Electrónica:',
      response5_1: '- Cancelación de la reserva antes y después de 48 horas a la hora local de inicio de la renta se emitirá un Credit Voucher* sobre el total del prepago realizado. No se realizará reembolso en efectivo, deposito o transferencia a ninguna cuenta bancaria.',
      response5_2: '- Cancelación de la reserva cuando el cliente no cumpla con los Requisitos para rentar un vehículo se emitirá un Credit Voucher* sobre el total del prepago realizado. No se realizará reembolso en efectivo, deposito o transferencia a ninguna cuenta bancaria.',
      response5_3: '- No presentarse a retirar el vehículo en la fecha y hora indicados en la reservada (No Show) se emitirá un Credit Voucher* sobre el total del prepago realizado. No se realizará reembolso en efectivo, deposito o transferencia a ninguna cuenta bancaria.',
      response5_4: '(*) El Credit Voucher emitido tendrá una vigencia de 6 (seis) meses a partir del día de su generación y se podrá utilizar para prepagar reservas a futuro de cualquiera de sus ejecutivos.',
    },
    error: {
      message: 'Lo sentimos, ocurrió un error inesperado. Por favor inténtalo nuevamente.',
      access1_1: 'Lo sentimos, no tienes acceso al detalle de la reserva.',
      access1_2: 'Por favor contacta con tu Agencia de Viajes o Empresa / Compañía para ver los detalles de la misma.',
      canceled: 'Lo sentimos, la reserva que estás buscando se encuentra cancelada y no puede recuperarse.',
      goHome: 'Volver al inicio',
    },
  },
};
