import dayjs from "dayjs";

const getDatesHabilitis = (hora_inicial, hora_fin, fechas_cita) => {
    console.log(hora_inicial,hora_fin);
    const hora_almuerzo = [];
    const dateInit = dayjs(hora_inicial);
    const dateEnd = dayjs(hora_fin);
    const dates = [];

    while(dateInit.millisecond() === dateEnd.millisecond()){
        dates.push(dateInit.minute(30).format('HH:mm'));
    }

    console.log(dates);
}

export {getDatesHabilitis};