document.addEventListener('DOMContentLoaded', function () {
    // Full dataset
    const data = [
        { State: "Andhra Pradesh", AnnualDomesticIndustryDraft: 1.030, AnnualIrrigationDraft: 6.600, AnnualGroundwaterDraftTotal: 7.630, MonsoonRechargeRainfall: 8.930, MonsoonRechargeOther: 8.540, NonMonsoonRechargeRainfall: 0.850, NonMonsoonRechargeOther: 5.830, AnnualReplenishableGroundwaterResourcesTotal: 24.150, NaturalDischargeDuringNonMonsoonSeason: 1.210, NetGroundwaterAvailability: 22.940, ProjectedDemandForDomesticIndustrialUseUpto2025: 1.310, GroundwaterAvailabilityForFutureIrrigationUse: 15.910, StageOfGroundwaterDevelopmentPercent: 33.260 },
        { State: "Arunachal Pradesh", AnnualDomesticIndustryDraft: 0.010, AnnualIrrigationDraft: 0.003, AnnualGroundwaterDraftTotal: 0.010, MonsoonRechargeRainfall: 2.010, MonsoonRechargeOther: 0.070, NonMonsoonRechargeRainfall: 1.110, NonMonsoonRechargeOther: 0.002, AnnualReplenishableGroundwaterResourcesTotal: 3.190, NaturalDischargeDuringNonMonsoonSeason: 0.270, NetGroundwaterAvailability: 2.920, ProjectedDemandForDomesticIndustrialUseUpto2025: 0.010, GroundwaterAvailabilityForFutureIrrigationUse: 2.900, StageOfGroundwaterDevelopmentPercent: 0.360 },
        { State: "Assam", AnnualDomesticIndustryDraft: 0.610, AnnualIrrigationDraft: 1.970, AnnualGroundwaterDraftTotal: 2.580, MonsoonRechargeRainfall: 17.920, MonsoonRechargeOther: 0.960, NonMonsoonRechargeRainfall: 7.640, NonMonsoonRechargeOther: 0.530, AnnualReplenishableGroundwaterResourcesTotal: 27.050, NaturalDischargeDuringNonMonsoonSeason: 5.090, NetGroundwaterAvailability: 21.970, ProjectedDemandForDomesticIndustrialUseUpto2025: 0.660, GroundwaterAvailabilityForFutureIrrigationUse: 19.330, StageOfGroundwaterDevelopmentPercent: 11.730 },
        { State: "Bihar", AnnualDomesticIndustryDraft: 2.690, AnnualIrrigationDraft: 10.330, AnnualGroundwaterDraftTotal: 13.020, MonsoonRechargeRainfall: 21.020, MonsoonRechargeOther: 3.320, NonMonsoonRechargeRainfall: 1.290, NonMonsoonRechargeOther: 2.420, AnnualReplenishableGroundwaterResourcesTotal: 28.050, NaturalDischargeDuringNonMonsoonSeason: 2.600, NetGroundwaterAvailability: 25.460, ProjectedDemandForDomesticIndustrialUseUpto2025: 2.290, GroundwaterAvailabilityForFutureIrrigationUse: 12.230, StageOfGroundwaterDevelopmentPercent: 51.140 },
        { State: "Chandigarh", AnnualDomesticIndustryDraft: 0.032, AnnualIrrigationDraft: 0.010, AnnualGroundwaterDraftTotal: 0.050, MonsoonRechargeRainfall: 0.010, MonsoonRechargeOther: 0.020, NonMonsoonRechargeRainfall: 0.005, NonMonsoonRechargeOther: 0.030, AnnualReplenishableGroundwaterResourcesTotal: 0.060, NaturalDischargeDuringNonMonsoonSeason: 0.010, NetGroundwaterAvailability: 0.060, ProjectedDemandForDomesticIndustrialUseUpto2025: 0.030, GroundwaterAvailabilityForFutureIrrigationUse: 0.010, StageOfGroundwaterDevelopmentPercent: 80.600 },
        { State: "Delhi", AnnualDomesticIndustryDraft: 0.220, AnnualIrrigationDraft: 0.070, AnnualGroundwaterDraftTotal: 0.290, MonsoonRechargeRainfall: 0.050, MonsoonRechargeOther: 0.130, NonMonsoonRechargeRainfall: 0.004, NonMonsoonRechargeOther: 0.130, AnnualReplenishableGroundwaterResourcesTotal: 0.320, NaturalDischargeDuringNonMonsoonSeason: 0.030, NetGroundwaterAvailability: 0.290, ProjectedDemandForDomesticIndustrialUseUpto2025: 0.190, GroundwaterAvailabilityForFutureIrrigationUse: 0.020, StageOfGroundwaterDevelopmentPercent: 101.400 },
        { State: "Karnataka", AnnualDomesticIndustryDraft: 1.030, AnnualIrrigationDraft: 9.600, AnnualGroundwaterDraftTotal: 10.630, MonsoonRechargeRainfall: 7.470, MonsoonRechargeOther: 4.680, NonMonsoonRechargeRainfall: 2.230, NonMonsoonRechargeOther: 3.770, AnnualReplenishableGroundwaterResourcesTotal: 18.160, NaturalDischargeDuringNonMonsoonSeason: 1.760, NetGroundwaterAvailability: 16.400, ProjectedDemandForDomesticIndustrialUseUpto2025: 1.160, GroundwaterAvailabilityForFutureIrrigationUse: 7.080, StageOfGroundwaterDevelopmentPercent: 64.850 },
        { State: "Kerala", AnnualDomesticIndustryDraft: 1.480, AnnualIrrigationDraft: 1.160, AnnualGroundwaterDraftTotal: 2.650, MonsoonRechargeRainfall: 4.200, MonsoonRechargeOther: 0.130, NonMonsoonRechargeRainfall: 0.460, NonMonsoonRechargeOther: 0.860, AnnualReplenishableGroundwaterResourcesTotal: 5.650, NaturalDischargeDuringNonMonsoonSeason: 0.530, NetGroundwaterAvailability: 5.120, ProjectedDemandForDomesticIndustrialUseUpto2025: 2.250, GroundwaterAvailabilityForFutureIrrigationUse: 2.130, StageOfGroundwaterDevelopmentPercent: 51.680 },
        { State: "Lakshadweep", AnnualDomesticIndustryDraft: 0.003, AnnualIrrigationDraft: 0.000, AnnualGroundwaterDraftTotal: 0.003, MonsoonRechargeRainfall: 0.011, MonsoonRechargeOther: 0.000, NonMonsoonRechargeRainfall: 0.002, NonMonsoonRechargeOther: 0.000, AnnualReplenishableGroundwaterResourcesTotal: 0.010, NaturalDischargeDuringNonMonsoonSeason: 0.010, NetGroundwaterAvailability: 0.005, ProjectedDemandForDomesticIndustrialUseUpto2025: 0.005, GroundwaterAvailabilityForFutureIrrigationUse: 0.002, StageOfGroundwaterDevelopmentPercent: 58.470 },
        { State: "Ladakh", AnnualDomesticIndustryDraft: 0.020, AnnualIrrigationDraft: 0.001, AnnualGroundwaterDraftTotal: 0.020, MonsoonRechargeRainfall: 0.010, MonsoonRechargeOther: 0.050, NonMonsoonRechargeRainfall: 0.020, NonMonsoonRechargeOther: 0.040, AnnualReplenishableGroundwaterResourcesTotal: 0.120, NaturalDischargeDuringNonMonsoonSeason: 0.010, NetGroundwaterAvailability: 0.110, ProjectedDemandForDomesticIndustrialUseUpto2025: 0.020, GroundwaterAvailabilityForFutureIrrigationUse: 0.090, StageOfGroundwaterDevelopmentPercent: 17.900 },
        { State: "Dadara & Nagar Havelli", AnnualDomesticIndustryDraft: 0.030, AnnualIrrigationDraft: 0.010, AnnualGroundwaterDraftTotal: 0.030, MonsoonRechargeRainfall: 0.040, MonsoonRechargeOther: 0.010, NonMonsoonRechargeRainfall: 0.003, NonMonsoonRechargeOther: 0.020, AnnualReplenishableGroundwaterResourcesTotal: 0.070, NaturalDischargeDuringNonMonsoonSeason: 0.005, NetGroundwaterAvailability: 0.070, ProjectedDemandForDomesticIndustrialUseUpto2025: 0.020, GroundwaterAvailabilityForFutureIrrigationUse: 0.030, StageOfGroundwaterDevelopmentPercent: 45.990 },
        { State: "Chhattisgarh", AnnualDomesticIndustryDraft: 0.810, AnnualIrrigationDraft: 4.530, AnnualGroundwaterDraftTotal: 5.350, MonsoonRechargeRainfall: 8.330, MonsoonRechargeOther: 1.380, NonMonsoonRechargeRainfall: 1.110, NonMonsoonRechargeOther: 1.840, AnnualReplenishableGroundwaterResourcesTotal: 12.650, NaturalDischargeDuringNonMonsoonSeason: 1.110, NetGroundwaterAvailability: 11.550, ProjectedDemandForDomesticIndustrialUseUpto2025: 0.840, GroundwaterAvailabilityForFutureIrrigationUse: 4.840, StageOfGroundwaterDevelopmentPercent: 42.280 },
        { State: "Gujarat", AnnualDomesticIndustryDraft: 6.060, AnnualIrrigationDraft: 8.550, AnnualGroundwaterDraftTotal: 14.620, MonsoonRechargeRainfall: 23.630, MonsoonRechargeOther: 4.410, NonMonsoonRechargeRainfall: 3.740, NonMonsoonRechargeOther: 1.550, AnnualReplenishableGroundwaterResourcesTotal: 33.490, NaturalDischargeDuringNonMonsoonSeason: 1.990, NetGroundwaterAvailability: 31.500, ProjectedDemandForDomesticIndustrialUseUpto2025: 4.550, GroundwaterAvailabilityForFutureIrrigationUse: 24.900, StageOfGroundwaterDevelopmentPercent: 43.600 },
        { State: "Haryana", AnnualDomesticIndustryDraft: 0.370, AnnualIrrigationDraft: 2.920, AnnualGroundwaterDraftTotal: 3.290, MonsoonRechargeRainfall: 1.120, MonsoonRechargeOther: 0.200, NonMonsoonRechargeRainfall: 0.350, NonMonsoonRechargeOther: 0.080, AnnualReplenishableGroundwaterResourcesTotal: 1.800, NaturalDischargeDuringNonMonsoonSeason: 0.190, NetGroundwaterAvailability: 1.610, ProjectedDemandForDomesticIndustrialUseUpto2025: 0.210, GroundwaterAvailabilityForFutureIrrigationUse: 0.960, StageOfGroundwaterDevelopmentPercent: 55.680 },
        { State: "Himachal Pradesh", AnnualDomesticIndustryDraft: 0.070, AnnualIrrigationDraft: 0.640, AnnualGroundwaterDraftTotal: 0.710, MonsoonRechargeRainfall: 2.700, MonsoonRechargeOther: 0.060, NonMonsoonRechargeRainfall: 0.390, NonMonsoonRechargeOther: 0.060, AnnualReplenishableGroundwaterResourcesTotal: 3.230, NaturalDischargeDuringNonMonsoonSeason: 0.050, NetGroundwaterAvailability: 3.180, ProjectedDemandForDomesticIndustrialUseUpto2025: 0.060, GroundwaterAvailabilityForFutureIrrigationUse: 0.010, StageOfGroundwaterDevelopmentPercent: 0.640 },
        { State: "Jharkhand", AnnualDomesticIndustryDraft: 1.150, AnnualIrrigationDraft: 5.020, AnnualGroundwaterDraftTotal: 6.170, MonsoonRechargeRainfall: 13.370, MonsoonRechargeOther: 1.080, NonMonsoonRechargeRainfall: 0.930, NonMonsoonRechargeOther: 2.370, AnnualReplenishableGroundwaterResourcesTotal: 17.530, NaturalDischargeDuringNonMonsoonSeason: 2.340, NetGroundwaterAvailability: 15.190, ProjectedDemandForDomesticIndustrialUseUpto2025: 1.290, GroundwaterAvailabilityForFutureIrrigationUse: 6.740, StageOfGroundwaterDevelopmentPercent: 35.280 },
        { State: "Madhya Pradesh", AnnualDomesticIndustryDraft: 2.760, AnnualIrrigationDraft: 11.130, AnnualGroundwaterDraftTotal: 13.890, MonsoonRechargeRainfall: 22.750, MonsoonRechargeOther: 2.220, NonMonsoonRechargeRainfall: 0.880, NonMonsoonRechargeOther: 3.380, AnnualReplenishableGroundwaterResourcesTotal: 31.620, NaturalDischargeDuringNonMonsoonSeason: 4.210, NetGroundwaterAvailability: 27.410, ProjectedDemandForDomesticIndustrialUseUpto2025: 3.130, GroundwaterAvailabilityForFutureIrrigationUse: 20.410, StageOfGroundwaterDevelopmentPercent: 43.950 },
        { State: "Manipur", AnnualDomesticIndustryDraft: 0.060, AnnualIrrigationDraft: 0.310, AnnualGroundwaterDraftTotal: 0.370, MonsoonRechargeRainfall: 0.690, MonsoonRechargeOther: 0.070, NonMonsoonRechargeRainfall: 0.060, NonMonsoonRechargeOther: 0.010, AnnualReplenishableGroundwaterResourcesTotal: 0.960, NaturalDischargeDuringNonMonsoonSeason: 0.010, NetGroundwaterAvailability: 0.950, ProjectedDemandForDomesticIndustrialUseUpto2025: 0.050, GroundwaterAvailabilityForFutureIrrigationUse: 0.860, StageOfGroundwaterDevelopmentPercent: 11.120 },
        { State: "Meghalaya", AnnualDomesticIndustryDraft: 0.170, AnnualIrrigationDraft: 0.600, AnnualGroundwaterDraftTotal: 0.770, MonsoonRechargeRainfall: 2.150, MonsoonRechargeOther: 0.300, NonMonsoonRechargeRainfall: 0.050, NonMonsoonRechargeOther: 0.080, AnnualReplenishableGroundwaterResourcesTotal: 2.580, NaturalDischargeDuringNonMonsoonSeason: 0.150, NetGroundwaterAvailability: 2.430, ProjectedDemandForDomesticIndustrialUseUpto2025: 0.100, GroundwaterAvailabilityForFutureIrrigationUse: 0.570, StageOfGroundwaterDevelopmentPercent: 30.530 },
        { State: "Mizoram", AnnualDomesticIndustryDraft: 0.060, AnnualIrrigationDraft: 0.070, AnnualGroundwaterDraftTotal: 0.130, MonsoonRechargeRainfall: 0.380, MonsoonRechargeOther: 0.030, NonMonsoonRechargeRainfall: 0.050, NonMonsoonRechargeOther: 0.060, AnnualReplenishableGroundwaterResourcesTotal: 0.670, NaturalDischargeDuringNonMonsoonSeason: 0.060, NetGroundwaterAvailability: 0.610, ProjectedDemandForDomesticIndustrialUseUpto2025: 0.070, GroundwaterAvailabilityForFutureIrrigationUse: 0.290, StageOfGroundwaterDevelopmentPercent: 19.060 },
        { State: "Nagaland", AnnualDomesticIndustryDraft: 0.020, AnnualIrrigationDraft: 0.090, AnnualGroundwaterDraftTotal: 0.110, MonsoonRechargeRainfall: 0.110, MonsoonRechargeOther: 0.020, NonMonsoonRechargeRainfall: 0.030, NonMonsoonRechargeOther: 0.020, AnnualReplenishableGroundwaterResourcesTotal: 0.240, NaturalDischargeDuringNonMonsoonSeason: 0.010, NetGroundwaterAvailability: 0.230, ProjectedDemandForDomesticIndustrialUseUpto2025: 0.020, GroundwaterAvailabilityForFutureIrrigationUse: 0.190, StageOfGroundwaterDevelopmentPercent: 44.170 },
        { State: "Odisha", AnnualDomesticIndustryDraft: 0.890, AnnualIrrigationDraft: 3.460, AnnualGroundwaterDraftTotal: 4.350, MonsoonRechargeRainfall: 11.020, MonsoonRechargeOther: 0.810, NonMonsoonRechargeRainfall: 1.600, NonMonsoonRechargeOther: 2.550, AnnualReplenishableGroundwaterResourcesTotal: 16.140, NaturalDischargeDuringNonMonsoonSeason: 1.160, NetGroundwaterAvailability: 14.980, ProjectedDemandForDomesticIndustrialUseUpto2025: 0.800, GroundwaterAvailabilityForFutureIrrigationUse: 2.940, StageOfGroundwaterDevelopmentPercent: 28.870 },
        { State: "Puducherry", AnnualDomesticIndustryDraft: 0.090, AnnualIrrigationDraft: 0.210, AnnualGroundwaterDraftTotal: 0.300, MonsoonRechargeRainfall: 0.110, MonsoonRechargeOther: 0.010, NonMonsoonRechargeRainfall: 0.010, NonMonsoonRechargeOther: 0.000, AnnualReplenishableGroundwaterResourcesTotal: 0.160, NaturalDischargeDuringNonMonsoonSeason: 0.010, NetGroundwaterAvailability: 0.150, ProjectedDemandForDomesticIndustrialUseUpto2025: 0.090, GroundwaterAvailabilityForFutureIrrigationUse: 0.060, StageOfGroundwaterDevelopmentPercent: 48.570 },
        { State: "Punjab", AnnualDomesticIndustryDraft: 1.280, AnnualIrrigationDraft: 5.160, AnnualGroundwaterDraftTotal: 6.440, MonsoonRechargeRainfall: 11.320, MonsoonRechargeOther: 0.800, NonMonsoonRechargeRainfall: 1.280, NonMonsoonRechargeOther: 1.000, AnnualReplenishableGroundwaterResourcesTotal: 14.400, NaturalDischargeDuringNonMonsoonSeason: 0.900, NetGroundwaterAvailability: 13.500, ProjectedDemandForDomesticIndustrialUseUpto2025: 1.370, GroundwaterAvailabilityForFutureIrrigationUse: 11.000, StageOfGroundwaterDevelopmentPercent: 44.500 },
        { State: "Rajasthan", AnnualDomesticIndustryDraft: 1.090, AnnualIrrigationDraft: 16.510, AnnualGroundwaterDraftTotal: 17.600, MonsoonRechargeRainfall: 10.580, MonsoonRechargeOther: 0.500, NonMonsoonRechargeRainfall: 0.990, NonMonsoonRechargeOther: 1.170, AnnualReplenishableGroundwaterResourcesTotal: 13.730, NaturalDischargeDuringNonMonsoonSeason: 2.030, NetGroundwaterAvailability: 11.700, ProjectedDemandForDomesticIndustrialUseUpto2025: 1.070, GroundwaterAvailabilityForFutureIrrigationUse: 7.800, StageOfGroundwaterDevelopmentPercent: 128.240 },
        { State: "Sikkim", AnnualDomesticIndustryDraft: 0.030, AnnualIrrigationDraft: 0.130, AnnualGroundwaterDraftTotal: 0.160, MonsoonRechargeRainfall: 0.030, MonsoonRechargeOther: 0.010, NonMonsoonRechargeRainfall: 0.030, NonMonsoonRechargeOther: 0.020, AnnualReplenishableGroundwaterResourcesTotal: 0.070, NaturalDischargeDuringNonMonsoonSeason: 0.010, NetGroundwaterAvailability: 0.060, ProjectedDemandForDomesticIndustrialUseUpto2025: 0.020, GroundwaterAvailabilityForFutureIrrigationUse: 0.030, StageOfGroundwaterDevelopmentPercent: 2.380 },
        { State: "Tamil Nadu", AnnualDomesticIndustryDraft: 4.090, AnnualIrrigationDraft: 6.820, AnnualGroundwaterDraftTotal: 10.910, MonsoonRechargeRainfall: 15.520, MonsoonRechargeOther: 1.490, NonMonsoonRechargeRainfall: 3.430, NonMonsoonRechargeOther: 4.270, AnnualReplenishableGroundwaterResourcesTotal: 24.050, NaturalDischargeDuringNonMonsoonSeason: 2.700, NetGroundwaterAvailability: 21.350, ProjectedDemandForDomesticIndustrialUseUpto2025: 2.730, GroundwaterAvailabilityForFutureIrrigationUse: 9.010, StageOfGroundwaterDevelopmentPercent: 68.790 },
        { State: "Tripura", AnnualDomesticIndustryDraft: 0.070, AnnualIrrigationDraft: 0.330, AnnualGroundwaterDraftTotal: 0.400, MonsoonRechargeRainfall: 1.040, MonsoonRechargeOther: 0.150, NonMonsoonRechargeRainfall: 0.150, NonMonsoonRechargeOther: 0.060, AnnualReplenishableGroundwaterResourcesTotal: 1.670, NaturalDischargeDuringNonMonsoonSeason: 0.040, NetGroundwaterAvailability: 1.620, ProjectedDemandForDomesticIndustrialUseUpto2025: 0.080, GroundwaterAvailabilityForFutureIrrigationUse: 1.470, StageOfGroundwaterDevelopmentPercent: 15.760 },
        { State: "Uttar Pradesh", AnnualDomesticIndustryDraft: 7.100, AnnualIrrigationDraft: 22.860, AnnualGroundwaterDraftTotal: 29.960, MonsoonRechargeRainfall: 28.070, MonsoonRechargeOther: 4.260, NonMonsoonRechargeRainfall: 1.230, NonMonsoonRechargeOther: 1.050, AnnualReplenishableGroundwaterResourcesTotal: 40.760, NaturalDischargeDuringNonMonsoonSeason: 7.470, NetGroundwaterAvailability: 33.290, ProjectedDemandForDomesticIndustrialUseUpto2025: 7.870, GroundwaterAvailabilityForFutureIrrigationUse: 22.420, StageOfGroundwaterDevelopmentPercent: 73.400 },
        { State: "West Bengal", AnnualDomesticIndustryDraft: 1.960, AnnualIrrigationDraft: 8.340, AnnualGroundwaterDraftTotal: 10.300, MonsoonRechargeRainfall: 22.000, MonsoonRechargeOther: 1.200, NonMonsoonRechargeRainfall: 1.500, NonMonsoonRechargeOther: 2.700, AnnualReplenishableGroundwaterResourcesTotal: 28.600, NaturalDischargeDuringNonMonsoonSeason: 2.000, NetGroundwaterAvailability: 26.600, ProjectedDemandForDomesticIndustrialUseUpto2025: 1.950, GroundwaterAvailabilityForFutureIrrigationUse: 8.000, StageOfGroundwaterDevelopmentPercent: 36.000 }
    ];
    // Function to calculate average for a given column
    function calculateAverage(column) {
        const total = data.reduce((sum, row) => sum + row[column], 0);
        return total / data.length;
    }

    // Data for pie chart
    const labels = [
        'Annual Domestic & Industry Draft',
        'Annual Irrigation Draft',
        'Annual Groundwater Draft (Total)',
        'Monsoon Recharge Rainfall',
        'Monsoon Recharge Other',
        'Non-Monsoon Recharge Rainfall',
        'Non-Monsoon Recharge Other',
        'Annual Replenishable Groundwater Resources (Total)',
        'Natural Discharge During Non-Monsoon Season',
        'Net Groundwater Availability',
        'Projected Demand for Domestic & Industrial Use Upto 2025',
        'Groundwater Availability for Future Irrigation Use',
        'Stage of Groundwater Development (%)'
    ];

    const dataValues = [
        calculateAverage('AnnualDomesticIndustryDraft'),
        calculateAverage('AnnualIrrigationDraft'),
        calculateAverage('AnnualGroundwaterDraftTotal'),
        calculateAverage('MonsoonRechargeRainfall'),
        calculateAverage('MonsoonRechargeOther'),
        calculateAverage('NonMonsoonRechargeRainfall'),
        calculateAverage('NonMonsoonRechargeOther'),
        calculateAverage('AnnualReplenishableGroundwaterResourcesTotal'),
        calculateAverage('NaturalDischargeDuringNonMonsoonSeason'),
        calculateAverage('NetGroundwaterAvailability'),
        calculateAverage('ProjectedDemandForDomesticIndustrialUseUpto2025'),
        calculateAverage('GroundwaterAvailabilityForFutureIrrigationUse'),
        calculateAverage('StageOfGroundwaterDevelopmentPercent')
    ];

    // Create pie chart
    const ctx = document.getElementById('pieChart').getContext('2d');
    
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [{
                data: dataValues,
                backgroundColor: [
                    '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#FF9F40',
                    '#FFCD56', '#FF6F61', '#6B5B95', '#B9FBC0', '#F7C6C7',
                    '#C6E2B3', '#F8C471', '#D5A6BD'
                ],
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    callbacks: {
                        label: function(tooltipItem) {
                            return tooltipItem.label + ': ' + tooltipItem.raw.toFixed(2);
                        }
                    }
                }
            }
        }
    });
});
