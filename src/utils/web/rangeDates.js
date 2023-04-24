import dayjs from "dayjs";
// dias 
const diasObje = {
    Monday: 'LUNES',
    Tuesday: 'MARTES',
    Wednesday: 'MIERCOLES',
    Thursday: 'JUEVES',
    Friday: 'VIERNES',
    Saturday: 'SABADO'
}
const getDatesHabilitis = (hora_inicial, hora_fin,dias, fechas_cita) => {
    const hora_almuerzo = '12:00|12:30-12:30|13:00-13:00|13:30-13:30|14:00-';
    const dateInit = dayjs(hora_inicial);
    const dateEnd = dayjs(hora_fin);
    const day = dateInit.format('dddd');
    // verificar si tiene ese dia habilitado
    const diasHabiles = dias.split('-');
    const dayH = diasObje[day];
    if(!diasHabiles.includes(dayH)){
        return false;
    }

    let init = dateInit;
    let dates = [];
    while(init.unix() < dateEnd.unix()){
        init = init.minute(init.minute() + 30);
        dates.push(init.format('HH:mm') +'|'+ init.minute(init.minute() + 30).format('HH:mm'));
    }
    dates.pop();
    dates = dates.join('-').replace(hora_almuerzo,'').split('-');
    fechas_cita.forEach(fecha => {
        dates = dates.filter(element => element !== fecha.horas);
    })
    return dates;
}

export {getDatesHabilitis};