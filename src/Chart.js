import React from 'react'
var LineChart = require('react-chartjs').Line
var BarChart = require('react-chartjs').Bar

const chartData = [
  {
    'date': '2018-10-16',
    'max_temperature': '32.4',
    'min_temperature': '15.5',
    'rainfall': '0.00',
    'wind_speed': '1.8',
    'wind_direction_in_morning': 'C',
    'wind_direction_in_afternoon': 'C',
    'weather_condition_in_morning': '1',
    'weather_condition_in_afternoon': '1',
    'relative_humidity_in_morning': '77.0',
    'relative_humidity_in_afternoon': '48.0',
    'bss': '7.2',
    'evaporation': '3.4'
  },
  {
    'date': '2018-10-17',
    'max_temperature': '33.8',
    'min_temperature': '15.6',
    'rainfall': '0.00',
    'wind_speed': '1.5',
    'wind_direction_in_morning': 'C',
    'wind_direction_in_afternoon': 'W',
    'weather_condition_in_morning': '1',
    'weather_condition_in_afternoon': '0',
    'relative_humidity_in_morning': '80.0',
    'relative_humidity_in_afternoon': '32.0',
    'bss': '3.1',
    'evaporation': '4.0'
  },
  {
    'date': '2018-10-18',
    'max_temperature': '34.2',
    'min_temperature': '15.2',
    'rainfall': '0.00',
    'wind_speed': '1.7',
    'wind_direction_in_morning': 'C',
    'wind_direction_in_afternoon': 'S',
    'weather_condition_in_morning': '1',
    'weather_condition_in_afternoon': '1',
    'relative_humidity_in_morning': '82.0',
    'relative_humidity_in_afternoon': '51.0',
    'bss': '8.1',
    'evaporation': '3.4'
  },
  {
    'date': '2018-10-19',
    'max_temperature': '31.7',
    'min_temperature': '13.8',
    'rainfall': '0.00',
    'wind_speed': '1.8',
    'wind_direction_in_morning': 'C',
    'wind_direction_in_afternoon': 'SW',
    'weather_condition_in_morning': '1',
    'weather_condition_in_afternoon': '1',
    'relative_humidity_in_morning': '81.0',
    'relative_humidity_in_afternoon': '42.0',
    'bss': '6.1',
    'evaporation': '3.5'
  },
  {
    'date': '2018-10-20',
    'max_temperature': '33.4',
    'min_temperature': '13.2',
    'rainfall': '0.00',
    'wind_speed': '1.3',
    'wind_direction_in_morning': 'C',
    'wind_direction_in_afternoon': 'NNE',
    'weather_condition_in_morning': '1',
    'weather_condition_in_afternoon': '0',
    'relative_humidity_in_morning': '83.0',
    'relative_humidity_in_afternoon': '44.0',
    'bss': '5.1',
    'evaporation': '2.7'
  },
  {
    'date': '2018-10-21',
    'max_temperature': '33.8',
    'min_temperature': '13.2',
    'rainfall': '0.00',
    'wind_speed': '1.5',
    'wind_direction_in_morning': 'C',
    'wind_direction_in_afternoon': 'N',
    'weather_condition_in_morning': '0',
    'weather_condition_in_afternoon': '0',
    'relative_humidity_in_morning': '81.0',
    'relative_humidity_in_afternoon': '46.0',
    'bss': '6.2',
    'evaporation': '5.0'
  },
  {
    'date': '2018-10-22',
    'max_temperature': '31.0',
    'min_temperature': '10.5',
    'rainfall': '0.00',
    'wind_speed': '1.8',
    'wind_direction_in_morning': 'C',
    'wind_direction_in_afternoon': 'N',
    'weather_condition_in_morning': '0',
    'weather_condition_in_afternoon': '0',
    'relative_humidity_in_morning': '96.0',
    'relative_humidity_in_afternoon': '64.0',
    'bss': '4.5',
    'evaporation': '5.0'
  },
  {
    'date': '2018-10-23',
    'max_temperature': '30.6',
    'min_temperature': '11.0',
    'rainfall': '0.00',
    'wind_speed': '3.1',
    'wind_direction_in_morning': 'C',
    'wind_direction_in_afternoon': 'N',
    'weather_condition_in_morning': '0',
    'weather_condition_in_afternoon': '0',
    'relative_humidity_in_morning': '98.0',
    'relative_humidity_in_afternoon': '51.0',
    'bss': '8.0',
    'evaporation': '3.1'
  },
  {
    'date': '2018-10-24',
    'max_temperature': '32.4',
    'min_temperature': '11.8',
    'rainfall': '0.00',
    'wind_speed': '1.5',
    'wind_direction_in_morning': 'C',
    'wind_direction_in_afternoon': 'C',
    'weather_condition_in_morning': '0',
    'weather_condition_in_afternoon': '0',
    'relative_humidity_in_morning': '94.0',
    'relative_humidity_in_afternoon': '44.0',
    'bss': '8.6',
    'evaporation': '3.7'
  },
  {
    'date': '2018-10-25',
    'max_temperature': '32.5',
    'min_temperature': '10.6',
    'rainfall': '0.00',
    'wind_speed': '1.3',
    'wind_direction_in_morning': 'C',
    'wind_direction_in_afternoon': 'N',
    'weather_condition_in_morning': '0',
    'weather_condition_in_afternoon': '0',
    'relative_humidity_in_morning': '96.0',
    'relative_humidity_in_afternoon': '54.0',
    'bss': '5.9',
    'evaporation': '3.8'
  },
  {
    'date': '2018-10-26',
    'max_temperature': '31.0',
    'min_temperature': '11.0',
    'rainfall': '0.00',
    'wind_speed': '1.5',
    'wind_direction_in_morning': 'C',
    'wind_direction_in_afternoon': 'NE',
    'weather_condition_in_morning': '0',
    'weather_condition_in_afternoon': '1',
    'relative_humidity_in_morning': '91.0',
    'relative_humidity_in_afternoon': '45.0',
    'bss': '7.6',
    'evaporation': '3.8'
  },
  {
    'date': '2018-10-27',
    'max_temperature': '30.2',
    'min_temperature': '11.2',
    'rainfall': '0.00',
    'wind_speed': '1.0',
    'wind_direction_in_morning': 'C',
    'wind_direction_in_afternoon': 'N',
    'weather_condition_in_morning': '1',
    'weather_condition_in_afternoon': '1',
    'relative_humidity_in_morning': '96.0',
    'relative_humidity_in_afternoon': '47.0',
    'bss': '3.1',
    'evaporation': '3.2'
  },
  {
    'date': '2018-10-28',
    'max_temperature': '31.0',
    'min_temperature': '11.5',
    'rainfall': '0.00',
    'wind_speed': '1.0',
    'wind_direction_in_morning': 'C',
    'wind_direction_in_afternoon': 'NW',
    'weather_condition_in_morning': '1',
    'weather_condition_in_afternoon': '0',
    'relative_humidity_in_morning': '96.0',
    'relative_humidity_in_afternoon': '34.0',
    'bss': '3.5',
    'evaporation': '3.0'
  },
  {
    'date': '2018-10-29',
    'max_temperature': '31.5',
    'min_temperature': '11.4',
    'rainfall': '0.00',
    'wind_speed': '1.8',
    'wind_direction_in_morning': 'C',
    'wind_direction_in_afternoon': 'W',
    'weather_condition_in_morning': '1',
    'weather_condition_in_afternoon': '0',
    'relative_humidity_in_morning': '95.0',
    'relative_humidity_in_afternoon': '49.0',
    'bss': '7.2',
    'evaporation': '3.4'
  },
  {
    'date': '2018-10-30',
    'max_temperature': '31.0',
    'min_temperature': '12.2',
    'rainfall': '0.00',
    'wind_speed': '1.5',
    'wind_direction_in_morning': 'C',
    'wind_direction_in_afternoon': 'NW',
    'weather_condition_in_morning': '1',
    'weather_condition_in_afternoon': '0',
    'relative_humidity_in_morning': '91.0',
    'relative_humidity_in_afternoon': '49.0',
    'bss': '6.5',
    'evaporation': '3.4'
  },
  {
    'date': '2018-10-31',
    'max_temperature': '31.0',
    'min_temperature': '12.5',
    'rainfall': '0.00',
    'wind_speed': '0.9',
    'wind_direction_in_morning': 'C',
    'wind_direction_in_afternoon': 'SE',
    'weather_condition_in_morning': '1',
    'weather_condition_in_afternoon': '1',
    'relative_humidity_in_morning': '93.0',
    'relative_humidity_in_afternoon': '58.0',
    'bss': '4.0',
    'evaporation': '2.9'
  },
  {
    'date': '2018-11-01',
    'max_temperature': '30.2',
    'min_temperature': '12.6',
    'rainfall': '0.00',
    'wind_speed': '0.9',
    'wind_direction_in_morning': 'C',
    'wind_direction_in_afternoon': 'SE',
    'weather_condition_in_morning': '1',
    'weather_condition_in_afternoon': '1',
    'relative_humidity_in_morning': '89.0',
    'relative_humidity_in_afternoon': '58.0',
    'bss': '3.6',
    'evaporation': '2.6'
  },
  {
    'date': '2018-11-02',
    'max_temperature': '29.6',
    'min_temperature': '13.5',
    'rainfall': '0.00',
    'wind_speed': '0.9',
    'wind_direction_in_morning': 'C',
    'wind_direction_in_afternoon': 'S',
    'weather_condition_in_morning': '1',
    'weather_condition_in_afternoon': '1',
    'relative_humidity_in_morning': '93.0',
    'relative_humidity_in_afternoon': '57.0',
    'bss': '1.8',
    'evaporation': '2.4'
  },
  {
    'date': '2018-11-03',
    'max_temperature': '30.2',
    'min_temperature': '16.4',
    'rainfall': '0.00',
    'wind_speed': '2.8',
    'wind_direction_in_morning': 'SE',
    'wind_direction_in_afternoon': 'SE',
    'weather_condition_in_morning': '1',
    'weather_condition_in_afternoon': '0',
    'relative_humidity_in_morning': '77.0',
    'relative_humidity_in_afternoon': '59.0',
    'bss': '3.0',
    'evaporation': '2.7'
  },
  {
    'date': '2018-11-04',
    'max_temperature': '29.5',
    'min_temperature': '14.5',
    'rainfall': '0.00',
    'wind_speed': '6.7',
    'wind_direction_in_morning': 'C',
    'wind_direction_in_afternoon': 'NW',
    'weather_condition_in_morning': '1',
    'weather_condition_in_afternoon': '0',
    'relative_humidity_in_morning': '76.0',
    'relative_humidity_in_afternoon': '62.0',
    'bss': '2.7',
    'evaporation': '3.0'
  },
  {
    'date': '2018-11-05',
    'max_temperature': '28.6',
    'min_temperature': '13.0',
    'rainfall': '0.00',
    'wind_speed': '4.2',
    'wind_direction_in_morning': 'NW',
    'wind_direction_in_afternoon': 'N',
    'weather_condition_in_morning': '4',
    'weather_condition_in_afternoon': '4',
    'relative_humidity_in_morning': '87.0',
    'relative_humidity_in_afternoon': '67.0',
    'bss': '6.5',
    'evaporation': '4.0'
  },
  {
    'date': '2018-11-06',
    'max_temperature': '25.2',
    'min_temperature': '13.6',
    'rainfall': '0.00',
    'wind_speed': '4.4',
    'wind_direction_in_morning': 'NW',
    'wind_direction_in_afternoon': 'NW',
    'weather_condition_in_morning': '4',
    'weather_condition_in_afternoon': '0',
    'relative_humidity_in_morning': '75.0',
    'relative_humidity_in_afternoon': '45.0',
    'bss': '0.0',
    'evaporation': '3.2'
  },
  {
    'date': '2018-11-07',
    'max_temperature': '27.0',
    'min_temperature': '8.5',
    'rainfall': '0.00',
    'wind_speed': '4.7',
    'wind_direction_in_morning': 'C',
    'wind_direction_in_afternoon': 'NW',
    'weather_condition_in_morning': '1',
    'weather_condition_in_afternoon': '0',
    'relative_humidity_in_morning': '69.0',
    'relative_humidity_in_afternoon': '46.0',
    'bss': '8.5',
    'evaporation': '3.4'
  },
  {
    'date': '2018-11-08',
    'max_temperature': '27.0',
    'min_temperature': '8.5',
    'rainfall': '0.00',
    'wind_speed': '3.1',
    'wind_direction_in_morning': 'C',
    'wind_direction_in_afternoon': 'C',
    'weather_condition_in_morning': '4',
    'weather_condition_in_afternoon': '4',
    'relative_humidity_in_morning': '90.0',
    'relative_humidity_in_afternoon': '48.0',
    'bss': '8.0',
    'evaporation': '3.5'
  },
  {
    'date': '2018-11-09',
    'max_temperature': '25.6',
    'min_temperature': '8.6',
    'rainfall': '0.00',
    'wind_speed': '0.7',
    'wind_direction_in_morning': 'C',
    'wind_direction_in_afternoon': 'W',
    'weather_condition_in_morning': '4',
    'weather_condition_in_afternoon': '4',
    'relative_humidity_in_morning': '92.0',
    'relative_humidity_in_afternoon': '50.0',
    'bss': '0.0',
    'evaporation': '3.0'
  },
  {
    'date': '2018-11-10',
    'max_temperature': '27.9',
    'min_temperature': '15.7',
    'rainfall': '0.00',
    'wind_speed': '0.9',
    'wind_direction_in_morning': 'C',
    'wind_direction_in_afternoon': 'C',
    'weather_condition_in_morning': '4',
    'weather_condition_in_afternoon': '4',
    'relative_humidity_in_morning': '91.0',
    'relative_humidity_in_afternoon': '64.0',
    'bss': '3.7',
    'evaporation': '4.7'
  },
  {
    'date': '2018-11-11',
    'max_temperature': '27.4',
    'min_temperature': '16.0',
    'rainfall': '0.00',
    'wind_speed': '0.7',
    'wind_direction_in_morning': 'C',
    'wind_direction_in_afternoon': 'C',
    'weather_condition_in_morning': '4',
    'weather_condition_in_afternoon': '1',
    'relative_humidity_in_morning': '87.0',
    'relative_humidity_in_afternoon': '46.0',
    'bss': '0.0',
    'evaporation': '2.7'
  },
  {
    'date': '2018-11-12',
    'max_temperature': '30.0',
    'min_temperature': '9.2',
    'rainfall': '0.00',
    'wind_speed': '0.8',
    'wind_direction_in_morning': 'C',
    'wind_direction_in_afternoon': 'NE',
    'weather_condition_in_morning': '1',
    'weather_condition_in_afternoon': '1',
    'relative_humidity_in_morning': '98.0',
    'relative_humidity_in_afternoon': '54.0',
    'bss': '6.2',
    'evaporation': '2.9'
  },
  {
    'date': '2018-11-13',
    'max_temperature': '29.0',
    'min_temperature': '13.0',
    'rainfall': '0.00',
    'wind_speed': '1.1',
    'wind_direction_in_morning': 'C',
    'wind_direction_in_afternoon': 'NE',
    'weather_condition_in_morning': '1',
    'weather_condition_in_afternoon': '1',
    'relative_humidity_in_morning': '96.0',
    'relative_humidity_in_afternoon': '58.0',
    'bss': '2.9',
    'evaporation': '2.6'
  },
  {
    'date': '2018-11-14',
    'max_temperature': '28.2',
    'min_temperature': '17.2',
    'rainfall': '2.40',
    'wind_speed': '3.3',
    'wind_direction_in_morning': 'C',
    'wind_direction_in_afternoon': 'SE',
    'weather_condition_in_morning': '1',
    'weather_condition_in_afternoon': '0',
    'relative_humidity_in_morning': '88.0',
    'relative_humidity_in_afternoon': '0.0',
    'bss': '2.6',
    'evaporation': '2.7'
  },
  {
    'date': '2018-11-15',
    'max_temperature': '27.5',
    'min_temperature': '14.5',
    'rainfall': '1.60',
    'wind_speed': '2.4',
    'wind_direction_in_morning': 'C',
    'wind_direction_in_afternoon': 'NW',
    'weather_condition_in_morning': '1',
    'weather_condition_in_afternoon': '2',
    'relative_humidity_in_morning': '84.0',
    'relative_humidity_in_afternoon': '67.0',
    'bss': '4.2',
    'evaporation': '3.0'
  },
  {
    'date': '2018-11-16',
    'max_temperature': '26.0',
    'min_temperature': '13.5',
    'rainfall': '0.00',
    'wind_speed': '3.9',
    'wind_direction_in_morning': 'W',
    'wind_direction_in_afternoon': 'NW',
    'weather_condition_in_morning': '0',
    'weather_condition_in_afternoon': '0',
    'relative_humidity_in_morning': '83.0',
    'relative_humidity_in_afternoon': '51.0',
    'bss': '3.8',
    'evaporation': '3.6'
  },
  {
    'date': '2018-11-17',
    'max_temperature': '26.0',
    'min_temperature': '10.6',
    'rainfall': '0.00',
    'wind_speed': '5.7',
    'wind_direction_in_morning': 'C',
    'wind_direction_in_afternoon': 'NW',
    'weather_condition_in_morning': '1',
    'weather_condition_in_afternoon': '1',
    'relative_humidity_in_morning': '95.0',
    'relative_humidity_in_afternoon': '52.0',
    'bss': '8.3',
    'evaporation': '3.2'
  },
  {
    'date': '2018-11-18',
    'max_temperature': '25.8',
    'min_temperature': '9.4',
    'rainfall': '0.00',
    'wind_speed': '2.7',
    'wind_direction_in_morning': 'C',
    'wind_direction_in_afternoon': 'SE',
    'weather_condition_in_morning': '1',
    'weather_condition_in_afternoon': '0',
    'relative_humidity_in_morning': '95.0',
    'relative_humidity_in_afternoon': '69.0',
    'bss': '7.4',
    'evaporation': '3.4'
  },
  {
    'date': '2018-11-19',
    'max_temperature': '27.4',
    'min_temperature': '15.5',
    'rainfall': '0.00',
    'wind_speed': '2.2',
    'wind_direction_in_morning': 'S',
    'wind_direction_in_afternoon': 'SE',
    'weather_condition_in_morning': '1',
    'weather_condition_in_afternoon': '4',
    'relative_humidity_in_morning': '84.0',
    'relative_humidity_in_afternoon': '64.0',
    'bss': '6.8',
    'evaporation': '3.0'
  },
  {
    'date': '2018-11-20',
    'max_temperature': '25.8',
    'min_temperature': '11.8',
    'rainfall': '0.00',
    'wind_speed': '2.9',
    'wind_direction_in_morning': 'C',
    'wind_direction_in_afternoon': 'NW',
    'weather_condition_in_morning': '1',
    'weather_condition_in_afternoon': '0',
    'relative_humidity_in_morning': '95.0',
    'relative_humidity_in_afternoon': '62.0',
    'bss': '0.4',
    'evaporation': '2.9'
  },
  {
    'date': '2018-11-21',
    'max_temperature': '28.0',
    'min_temperature': '10.0',
    'rainfall': '0.00',
    'wind_speed': '1.8',
    'wind_direction_in_morning': 'C',
    'wind_direction_in_afternoon': 'W',
    'weather_condition_in_morning': '4',
    'weather_condition_in_afternoon': '0',
    'relative_humidity_in_morning': '90.0',
    'relative_humidity_in_afternoon': '62.0',
    'bss': '6.3',
    'evaporation': '2.9'
  },
  {
    'date': '2018-11-22',
    'max_temperature': '27.6',
    'min_temperature': '9.4',
    'rainfall': '0.00',
    'wind_speed': '1.0',
    'wind_direction_in_morning': 'C',
    'wind_direction_in_afternoon': 'C',
    'weather_condition_in_morning': '1',
    'weather_condition_in_afternoon': '1',
    'relative_humidity_in_morning': '87.0',
    'relative_humidity_in_afternoon': '46.0',
    'bss': '7.0',
    'evaporation': '3.0'
  },
  {
    'date': '2018-11-23',
    'max_temperature': '27.5',
    'min_temperature': '8.6',
    'rainfall': '0.00',
    'wind_speed': '0.9',
    'wind_direction_in_morning': 'C',
    'wind_direction_in_afternoon': 'NW',
    'weather_condition_in_morning': '1',
    'weather_condition_in_afternoon': '0',
    'relative_humidity_in_morning': '95.0',
    'relative_humidity_in_afternoon': '51.0',
    'bss': '4.8',
    'evaporation': '2.9'
  },
  {
    'date': '2018-11-24',
    'max_temperature': '27.2',
    'min_temperature': '13.0',
    'rainfall': '0.00',
    'wind_speed': '6.5',
    'wind_direction_in_morning': 'W',
    'wind_direction_in_afternoon': 'W',
    'weather_condition_in_morning': '0',
    'weather_condition_in_afternoon': '0',
    'relative_humidity_in_morning': '82.0',
    'relative_humidity_in_afternoon': '61.0',
    'bss': '7.2',
    'evaporation': '3.0'
  },
  {
    'date': '2018-11-25',
    'max_temperature': '26.5',
    'min_temperature': '8.0',
    'rainfall': '0.00',
    'wind_speed': '4.9',
    'wind_direction_in_morning': 'C',
    'wind_direction_in_afternoon': 'W',
    'weather_condition_in_morning': '0',
    'weather_condition_in_afternoon': '0',
    'relative_humidity_in_morning': '90.0',
    'relative_humidity_in_afternoon': '56.0',
    'bss': '8.2',
    'evaporation': '3.0'
  },
  {
    'date': '2018-11-26',
    'max_temperature': '26.0',
    'min_temperature': '8.1',
    'rainfall': '0.00',
    'wind_speed': '1.6',
    'wind_direction_in_morning': 'C',
    'wind_direction_in_afternoon': 'NW',
    'weather_condition_in_morning': '4',
    'weather_condition_in_afternoon': '0',
    'relative_humidity_in_morning': '95.0',
    'relative_humidity_in_afternoon': '58.0',
    'bss': '7.8',
    'evaporation': '3.0'
  },
  {
    'date': '2018-11-27',
    'max_temperature': '26.8',
    'min_temperature': '8.9',
    'rainfall': '0.00',
    'wind_speed': '2.8',
    'wind_direction_in_morning': 'C',
    'wind_direction_in_afternoon': 'S',
    'weather_condition_in_morning': '4',
    'weather_condition_in_afternoon': '4',
    'relative_humidity_in_morning': '97.0',
    'relative_humidity_in_afternoon': '65.0',
    'bss': '7.1',
    'evaporation': '2.5'
  },
  {
    'date': '2018-11-28',
    'max_temperature': '27.0',
    'min_temperature': '11.9',
    'rainfall': '0.00',
    'wind_speed': '1.7',
    'wind_direction_in_morning': 'C',
    'wind_direction_in_afternoon': 'W',
    'weather_condition_in_morning': '4',
    'weather_condition_in_afternoon': '4',
    'relative_humidity_in_morning': '98.0',
    'relative_humidity_in_afternoon': '63.0',
    'bss': '4.4',
    'evaporation': '2.2'
  },
  {
    'date': '2018-11-29',
    'max_temperature': '26.4',
    'min_temperature': '10.4',
    'rainfall': '0.00',
    'wind_speed': '1.0',
    'wind_direction_in_morning': 'C',
    'wind_direction_in_afternoon': 'C',
    'weather_condition_in_morning': '4',
    'weather_condition_in_afternoon': '0',
    'relative_humidity_in_morning': '98.0',
    'relative_humidity_in_afternoon': '65.0',
    'bss': '3.8',
    'evaporation': '2.0'
  },
  {
    'date': '2018-11-30',
    'max_temperature': '25.5',
    'min_temperature': '8.9',
    'rainfall': '0.00',
    'wind_speed': '3.6',
    'wind_direction_in_morning': 'C',
    'wind_direction_in_afternoon': 'NW',
    'weather_condition_in_morning': '4',
    'weather_condition_in_afternoon': '4',
    'relative_humidity_in_morning': '95.0',
    'relative_humidity_in_afternoon': '59.0',
    'bss': '2.2',
    'evaporation': '1.9'
  },
  {
    'date': '2018-12-01',
    'max_temperature': '26.4',
    'min_temperature': '8.1',
    'rainfall': '0.00',
    'wind_speed': '2.5',
    'wind_direction_in_morning': 'C',
    'wind_direction_in_afternoon': 'NW',
    'weather_condition_in_morning': '4',
    'weather_condition_in_afternoon': '0',
    'relative_humidity_in_morning': '95.0',
    'relative_humidity_in_afternoon': '61.0',
    'bss': '5.5',
    'evaporation': '2.0'
  },
  {
    'date': '2018-12-02',
    'max_temperature': '25.0',
    'min_temperature': '7.0',
    'rainfall': '0.00',
    'wind_speed': '2.5',
    'wind_direction_in_morning': 'C',
    'wind_direction_in_afternoon': 'C',
    'weather_condition_in_morning': '4',
    'weather_condition_in_afternoon': '0',
    'relative_humidity_in_morning': '95.0',
    'relative_humidity_in_afternoon': '54.0',
    'bss': '7.0',
    'evaporation': '1.9'
  },
  {
    'date': '2018-12-03',
    'max_temperature': '25.8',
    'min_temperature': '7.2',
    'rainfall': '0.00',
    'wind_speed': '1.0',
    'wind_direction_in_morning': 'C',
    'wind_direction_in_afternoon': 'W',
    'weather_condition_in_morning': '4',
    'weather_condition_in_afternoon': '0',
    'relative_humidity_in_morning': '97.0',
    'relative_humidity_in_afternoon': '59.0',
    'bss': '6.2',
    'evaporation': '2.2'
  },
  {
    'date': '2018-12-04',
    'max_temperature': '25.0',
    'min_temperature': '7.0',
    'rainfall': '0.00',
    'wind_speed': '1.1',
    'wind_direction_in_morning': 'C',
    'wind_direction_in_afternoon': 'SW',
    'weather_condition_in_morning': '4',
    'weather_condition_in_afternoon': '4',
    'relative_humidity_in_morning': '97.0',
    'relative_humidity_in_afternoon': '59.0',
    'bss': '5.2',
    'evaporation': '2.4'
  },
  {
    'date': '2018-12-05',
    'max_temperature': '25.0',
    'min_temperature': '7.4',
    'rainfall': '0.00',
    'wind_speed': '1.1',
    'wind_direction_in_morning': 'C ',
    'wind_direction_in_afternoon': 'NW',
    'weather_condition_in_morning': '4',
    'weather_condition_in_afternoon': '1',
    'relative_humidity_in_morning': '95.0',
    'relative_humidity_in_afternoon': '59.0',
    'bss': '5.9',
    'evaporation': '2.5'
  },
  {
    'date': '2018-12-06',
    'max_temperature': '23.7',
    'min_temperature': '7.2',
    'rainfall': '0.00',
    'wind_speed': '1.7',
    'wind_direction_in_morning': 'C',
    'wind_direction_in_afternoon': 'NW',
    'weather_condition_in_morning': '4',
    'weather_condition_in_afternoon': '4',
    'relative_humidity_in_morning': '94.0',
    'relative_humidity_in_afternoon': '64.0',
    'bss': '5.7',
    'evaporation': '2.4'
  },
  {
    'date': '2018-12-07',
    'max_temperature': '23.4',
    'min_temperature': '7.2',
    'rainfall': '0.00',
    'wind_speed': '1.5',
    'wind_direction_in_morning': 'C',
    'wind_direction_in_afternoon': 'N',
    'weather_condition_in_morning': '4',
    'weather_condition_in_afternoon': '4',
    'relative_humidity_in_morning': '97.0',
    'relative_humidity_in_afternoon': '56.0',
    'bss': '2.9',
    'evaporation': '2.8'
  },
  {
    'date': '2018-12-08',
    'max_temperature': '22.4',
    'min_temperature': '5.8',
    'rainfall': '0.00',
    'wind_speed': '2.3',
    'wind_direction_in_morning': 'C',
    'wind_direction_in_afternoon': 'W',
    'weather_condition_in_morning': '4',
    'weather_condition_in_afternoon': '0',
    'relative_humidity_in_morning': '85.0',
    'relative_humidity_in_afternoon': '59.0',
    'bss': '5.4',
    'evaporation': '2.0'
  },
  {
    'date': '2018-12-09',
    'max_temperature': '24.0',
    'min_temperature': '5.9',
    'rainfall': '0.00',
    'wind_speed': '0.9',
    'wind_direction_in_morning': 'C',
    'wind_direction_in_afternoon': 'SE',
    'weather_condition_in_morning': '4',
    'weather_condition_in_afternoon': '0',
    'relative_humidity_in_morning': '97.0',
    'relative_humidity_in_afternoon': '59.0',
    'bss': '5.4',
    'evaporation': '2.2'
  },
  {
    'date': '2018-12-10',
    'max_temperature': '23.7',
    'min_temperature': '6.7',
    'rainfall': '0.00',
    'wind_speed': '0.8',
    'wind_direction_in_morning': 'C',
    'wind_direction_in_afternoon': 'N',
    'weather_condition_in_morning': '4',
    'weather_condition_in_afternoon': '4',
    'relative_humidity_in_morning': '97.0',
    'relative_humidity_in_afternoon': '69.0',
    'bss': '4.0',
    'evaporation': '1.9'
  },
  {
    'date': '2018-12-11',
    'max_temperature': '22.0',
    'min_temperature': '7.4',
    'rainfall': '0.00',
    'wind_speed': '1.7',
    'wind_direction_in_morning': 'C',
    'wind_direction_in_afternoon': 'N',
    'weather_condition_in_morning': '4',
    'weather_condition_in_afternoon': '4',
    'relative_humidity_in_morning': '97.0',
    'relative_humidity_in_afternoon': '70.0',
    'bss': '0.0',
    'evaporation': '1.7'
  },
  {
    'date': '2018-12-12',
    'max_temperature': '21.4',
    'min_temperature': '11.8',
    'rainfall': '0.20',
    'wind_speed': '0.0',
    'wind_direction_in_morning': 'SSE',
    'wind_direction_in_afternoon': 'S',
    'weather_condition_in_morning': '4',
    'weather_condition_in_afternoon': '4',
    'relative_humidity_in_morning': '93.0',
    'relative_humidity_in_afternoon': '75.0',
    'bss': '0.0',
    'evaporation': '1.7'
  },
  {
    'date': '2018-12-13',
    'max_temperature': '21.0',
    'min_temperature': '10.0',
    'rainfall': '0.00',
    'wind_speed': '1.5',
    'wind_direction_in_morning': 'C',
    'wind_direction_in_afternoon': 'NW',
    'weather_condition_in_morning': '1',
    'weather_condition_in_afternoon': '1',
    'relative_humidity_in_morning': '95.0',
    'relative_humidity_in_afternoon': '72.0',
    'bss': '0.2',
    'evaporation': '1.7'
  },
  {
    'date': '2018-12-14',
    'max_temperature': '20.2',
    'min_temperature': '7.4',
    'rainfall': '0.00',
    'wind_speed': '2.7',
    'wind_direction_in_morning': 'C',
    'wind_direction_in_afternoon': 'W',
    'weather_condition_in_morning': '4',
    'weather_condition_in_afternoon': '0',
    'relative_humidity_in_morning': '97.0',
    'relative_humidity_in_afternoon': '71.0',
    'bss': '2.1',
    'evaporation': '1.8'
  },
  {
    'date': '2018-12-15',
    'max_temperature': '21.0',
    'min_temperature': '7.2',
    'rainfall': '0.00',
    'wind_speed': '3.6',
    'wind_direction_in_morning': 'W',
    'wind_direction_in_afternoon': '',
    'weather_condition_in_morning': '4',
    'weather_condition_in_afternoon': '0',
    'relative_humidity_in_morning': '92.0',
    'relative_humidity_in_afternoon': '0.0',
    'bss': '6.1',
    'evaporation': '2.0'
  }
]

function LineChartWithHeader (props) {
  if (!props.show) {
    return null
  }

  return (
    <div>
      <h3>{props.header}</h3>
      <LineChart data={props.data} width="1080" height="500" />
    </div>
  )
}

function BarChartWithHeader (props) {
  if (!props.show) {
    return null
  }

  return (
    <div>
      <h3>{props.header}</h3>
      <BarChart data={props.data} width="1080" height="500" />
    </div>
  )
}

class ChartBoard extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      temperature: {
        labels: this._getDates(),
        datasets: [
          {
            label: 'Maximum Temperature',
            fillColor: 'rgba(220,220,220,0.2)',
            strokeColor: 'rgba(220,220,220,1)',
            pointColor: 'rgba(220,220,220,1)',
            pointStrokeColor: '#fff',
            pointHighlightFill: '#fff',
            pointHighlightStroke: 'rgba(220,220,220,1)',
            data: this._getDataWithKey('max_temperature')
          },
          {
            label: 'Minimum Temperature',
            fillColor: 'rgba(151,187,205,0.2)',
            strokeColor: 'rgba(151,187,205,1)',
            pointColor: 'rgba(151,187,205,1)',
            pointStrokeColor: '#fff',
            pointHighlightFill: '#fff',
            pointHighlightStroke: 'rgba(151,187,205,1)',
            data: this._getDataWithKey('min_temperature')
          }
        ]
      },
      humidity: {
        labels: this._getDates(),
        datasets: [
          {
            label: 'Relative Humidity in the morning',
            fillColor: 'rgba(220,220,220,0.2)',
            strokeColor: 'rgba(220,220,220,1)',
            pointColor: 'rgba(220,220,220,1)',
            pointStrokeColor: '#fff',
            pointHighlightFill: '#fff',
            pointHighlightStroke: 'rgba(220,220,220,1)',
            data: this._getDataWithKey('relative_humidity_in_morning')
          },
          {
            label: 'Relative Humidity in the afternoon',
            fillColor: 'rgba(151,187,205,0.2)',
            strokeColor: 'rgba(151,187,205,1)',
            pointColor: 'rgba(151,187,205,1)',
            pointStrokeColor: '#fff',
            pointHighlightFill: '#fff',
            pointHighlightStroke: 'rgba(151,187,205,1)',
            data: this._getDataWithKey('relative_humidity_in_afternoon')
          }
        ]
      },

      evaporation: {
        labels: this._getDates(),
        datasets: [
          {
            label: 'Evaporation',
            fillColor: 'rgba(220,220,220,0.2)',
            strokeColor: 'rgba(220,220,220,1)',
            pointColor: 'rgba(220,220,220,1)',
            pointStrokeColor: '#fff',
            pointHighlightFill: '#fff',
            pointHighlightStroke: 'rgba(220,220,220,1)',
            data: this._getDataWithKey('evaporation')
          }
        ]
      }
    }
  }

  _getDates () {
    return chartData.map((data, i) => { return data['date'] })
  }

  _getDataWithKey (key) {
    return (
      chartData.map((data, i) => {
        return data[key]
      })
    )
  }

  render () {
    return (
      <div>
        <LineChartWithHeader show={this.props.showTemperature} header="Temperature" data={this.state.temperature} />
        <BarChartWithHeader show={this.props.showRelativeHumidity} header="Relative Humidity" data={this.state.humidity} />
        <BarChartWithHeader show={this.props.showEvaporation} header="Evaporation" data={this.state.evaporation} />
      </div>
    )
  }
}

export default ChartBoard
