import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'runtime'
})
export class RuntimePipe implements PipeTransform {

  transform(value: number): string {
    let resultDivisao;
    let minutos;
    resultDivisao = value / 60;
    let horaseMinutos = resultDivisao.toString().split('.');
    if(horaseMinutos.length > 1) {
    minutos = parseInt(horaseMinutos[1])
    minutos = (minutos / 100) * 60;
    }
    let horas = horaseMinutos[0]
    let duration =  `${horas}h ${minutos?.toString()}m`;
    console.log(duration)
    return duration;
  }

}
