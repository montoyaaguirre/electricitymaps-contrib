/* eslint-disable unicorn/no-null */
import { Meta, StoryObj } from '@storybook/react';
import { ZoneDetail } from '../../../types';
import CarbonChartTooltip from './CarbonChartTooltip';

const meta: Meta<typeof CarbonChartTooltip> = {
  title: 'tooltips/CarbonChartTooltip',
  component: CarbonChartTooltip,
};

export default meta;

type Story = StoryObj<typeof CarbonChartTooltip>;

const zoneDetailMock = {
  co2intensity: 187.32,
  co2intensityProduction: 190.6,
  countryCode: 'PT',
  fossilFuelRatio: 0.4,
  fossilFuelRatioProduction: 0.3,
  renewableRatio: 0.7,
  renewableRatioProduction: 0.7,
  stateDatetime: '2022-11-28T07:00:00.000Z',
  // _isFinestGranularity: true,
  capacity: {
    'battery storage': null,
    biomass: 700,
    coal: 0,
    gas: 4520,
    geothermal: 0,
    hydro: 4578,
    'hydro storage': 3585,
    nuclear: 0,
    oil: 0,
    solar: 1616,
    unknown: null,
    wind: 5389,
  },
  dischargeCo2Intensities: {
    battery: 136.442_667_362_438_53,
    hydro: 136.442_667_362_438_53,
  },
  dischargeCo2IntensitySources: {
    battery: 'electricityMap, 2021 average',
    hydro: 'electricityMap, 2021 average',
  },
  exchange: { ES: -934 },
  exchangeCapacities: {},
  exchangeCo2Intensities: { ES: 187.32 },
  isValid: true,
  maxCapacity: 5389,
  maxDischarge: 395,
  maxExport: 934,
  maxImport: 0,
  maxProduction: 2365,
  maxStorage: 0,
  maxStorageCapacity: 3585,
  price: { currency: 'EUR', value: 120 },
  production: {
    biomass: 350,
    coal: 0,
    gas: 1930,
    geothermal: null,
    hydro: 1445,
    nuclear: null,
    oil: null,
    solar: 17,
    unknown: 29,
    wind: 2365,
  },
  productionCo2Intensities: {
    biomass: 439.145_806,
    coal: 1099.976_527,
    gas: 492.109_361,
    geothermal: 38,
    hydro: 10.7,
    nuclear: 5.13,
    oil: 1124.903_938,
    solar: 25.6,
    unknown: 700,
    wind: 12.62,
  },
  productionCo2IntensitySources: {
    biomass: 'EU-ETS, ENTSO-E 2021',
    coal: 'eGrid 2020; Oberschelp, Christopher, et al. "Global emission hotspots of coal power generation."',
    gas: 'IPCC 2014; EU-ETS, ENTSO-E 2021',
    geothermal: 'IPCC 2014',
    hydro: 'UNECE 2022',
    nuclear: 'UNECE 2022',
    oil: 'IPCC 2014; EU-ETS, ENTSO-E 2021',
    solar: 'INCER ACV',
    unknown: 'assumes thermal (coal, gas, oil or biomass)',
    wind: 'UNECE 2022, WindEurope "Wind energy in Europe, 2021 Statistics and the outlook for 2022-2026" Wind Europe Proceedings (2021)',
  },
  source: ['entsoe.eu'],
  storage: { battery: null, hydro: -395 },
  totalCo2Discharge: 53_894_853.608_163_215,
  totalCo2Export: 174_956_880,
  totalCo2Import: 0,
  totalCo2NetExchange: -174_956_880,
  totalCo2Production: 1_169_515_098.83,
  totalCo2Storage: 0,
  totalConsumption: 5597,
  totalDischarge: 395,
  totalExport: 934,
  totalImport: 0,
  totalProduction: 6136,
  totalStorage: 0,
  hasParser: true,
  center: [-7.8, 39.6],
  totalco2intensity: null,
  estimationMethod: null,
} as unknown as ZoneDetail;

export const Primary: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {
    selectedLayerKey: 'carbonIntensity',
    zoneDetail: zoneDetailMock,
  },
};