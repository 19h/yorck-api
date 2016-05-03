'use strict';

const defaultImage = new Buffer('iVBORw0KGgoAAAANSUhEUgAAAeAAAAE1CAMAAAAI+cM7AAAAb1BMVEUdHRtBOydBOic/OSZAOicfHxwvLCEjIh1AOycuKyE7NiU0MCIqKB89NyUwLSE9NyY3MyQ9OCYtKiA2MiM8NiU+OCY4MyQyLyI6NSU8NyY+OSY0MCMxLiIrKCA2MSMsKSAhIRwpJh86NiU5NCQmJR7vJ39GAAAFGElEQVR4XuzMSQ3AQAwEQfMYb27+GEMhh/ZXLdW3SwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAzLGNTpbjU+dVj9o7yev7WvrrZu/clhtFgig41TTiZl1tz8wuyEKI///GdcREzJtVQAmruzcrXx3mIYPjI5Vp8ipzYhhXTLjGh5dF4zBs5aro1Wn1a3hZOjcM2WhKsU6tCbgYruFRZKIR+2wVAaNYJkeSgWv5DYIzMYwfsbScPBOxkykB7cQyCDZwcbJ+RGdimhOalrMXbexFtzeW9A2aFpPLQ6a6K+AqCH4Wo5NHTH9XwEaEv8FP4iRixzU/DIKN35OBdnPZ2SsfVM/mig5PvIPdkCsCci+WaZ4ogL/Bzlf6VfqDF7fUsu/RtJzeJrjcX/KpVxrPv27v4uZe0FVYspDJwvHib9X8m6sfT209J7JfcWTiZWFG/x4NK4CPWQUdTBSbz+na9jAMw3a7nboaHiyXlIlTvrFneDjFUaaMM2wAark3mRMRl4n80xToWIGiXPnTafV1SJT1mI9/hiXwanSTUtrtlhb3ko+8TyZb9fPpIF/OEQHfwtUZdoSWBXSBgO9hmNZxlZ41+2vLDgHfRL/eFuAWT0DTs2RnSH8C+pnkhp6VUEDTsw4zBbR3lsoIiL9njWVkAU3P2j8q+HcICLNnzdnWNk55NAIC7FnTt4ZFyA2anmVfyB8J6LAYHrs33EmUAU3PejP/trJHQMh7w4t1y18hIOKepW/5awQE3rMaXUDv4w1oepYUhl/kgg9oepYesi8EdKB0MmXci7JEijyg6VnZ/Z71M/KA5skH1ylLJAI6WGrzM/55xpODAdObH2VpUwhoeta44BHkAQER9ayvBCQS0PSsnfKFdoQBTc/SC1MR8zHB9Cxd2FbZUUAIdIsfZamUb78gpp61Vx4VjSyg6Vn65n6IOKDpWbq1i0sroOlZr8oSiYAOlmbBuaG3wAIa7OdNvk16G0R5RUCkZ/+7y5Tq/RMBCfSsloCOi2Le4b+jI6Ajo5n1L5apBjQ9q1aWSFnkAU3Put7N83JEQOQ9K7u7RGoREHvPcrsflSQc0OwN/blMO6B53jDtgGZvmGRA07N0XIwBzd6QN2wkRUdA07OSC2h6FgFNzzoiIBJ63gJMz0rqvG96FgFNzyKgo6ImoOlZvJAhZjpHQNOzkjrvm3NKOe87LQYCmp6V8nnf9Kz0TyukZ6V/nCw9yxHQ8TIQ0GnT/+8Dmp7VICDpnuVHBCTdszwJHTnaLYyAyGkRnDabhAUDghGcIyBpwdmIAAQDggHBgGBAMNgEA4IBwYBgQDAgGBCMYAbBgGBAMCAYEAwmwYBgQDAgGBAMCAYE82wSIBgQDAiGEAQDggHBgGBAMHBGB3OTu+OvCIiYotqLMmVz7REQI+OuFi+i45x/a88FAiKT62TWeDkeTlGslojlm/eiDJbjpD+pcnW8vB8qLAdHfj5kSixjOV7yzsvDx0uLgDAovKwynnIdBKOsNK5HQADkXlYaj4AQOMha84qAAMhlrXFXBAT86hw7GQJCoJOVxl0QEAKtrDQDApIWvM8RkHJE/8sGMRDGVUpWzf0bCv0Ken2FgCBbls8+xyvytJ9xWcXtGxTdMNzabnMe/0yhRPrf2XxO137Ox/B3br/O/X/twDEBAAAAwiD7pzbGHlgKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO5y5ind6H78wAAAAASUVORK5CYII=', 'base64');

const cinemaRelationBaseMap = [
    ["Delphi Filmpalast", "54ed8d1968313849e8010000"],
    ["Cinema Paris", "54ed9d086831381d720f0000"],
    ["Kant Kino", "54eda1df6831381d72230000"],
    ["Babylon", "54ec8ea868313813e3190000"],
    ["Yorck", "54eeff36683138488b240000"],
    ["Kino International", "54ed9ff26831381d721c0000"],
    ["Neues Off", "54eda3cb6831381d722b0000"],
    ["Passage", "54eda6996831381d723a0000"],
    ["Rollberg", "54eef979683138488b0c0000"],
    ["Filmtheater am Friedrichshain", "54ed9e276831381d72150000"],
    ["Odeon", "54eda5536831381d72330000"],
    ["Sommerkino Kulturforum", "54eefd0b683138488b190000"],
    ["Capitol Dahlem", "54ed9a996831381d72060000"]
];

const cinemaRelation = {
    "id": new Map(cinemaRelationBaseMap),
    "name": new Map(cinemaRelationBaseMap.map(entry => entry.reverse()))
};

const locationRelation = {
    '54ed9d086831381d720f0000': {
        'lat': 52.502183,
        'lon': 13.3247677,
        'name': 'Cinema Paris'
    },
    '54ed8d1968313849e8010000': {
        'lat': 52.505545,
        'lon': 13.328269,
        'name': 'Delphi Filmpalast'
    },
    '54eda1df6831381d72230000': {
        'lat': 52.506062,
        'lon': 13.316964,
        'name': 'Kant Kino'
    },
    '54ec8ea868313813e3190000': {
        'lat': 52.525791,
        'lon': 13.411329,
        'name': 'Babylon'
    },
    '54eeff36683138488b240000': {
        'lat': 52.493208,
        'lon': 13.385434,
        'name': 'Yorck'
    },
    '54ed9ff26831381d721c0000': {
        'lat': 52.520239,
        'lon': 13.422758,
        'name': 'Kino International'
    },
    '54eda3cb6831381d722b0000': {
        'lat': 52.4834,
        'lon': 13.424825,
        'name': 'Neues Off'
    },
    '54eda6996831381d723a0000': {
        'lat': 52.47756,
        'lon': 13.438634,
        'name': 'Passage'
    },
    '54eef979683138488b0c0000': {
        'lat': 52.478716,
        'lon': 13.426056,
        'name': 'Rollberg'
    },
    '54ed9e276831381d72150000': {
        'lat': 52.529077,
        'lon': 13.430798,
        'name': 'Filmtheater am Friedrichshain'
    },
    '54eda5536831381d72330000': {
        'lat': 52.482305,
        'lon': 13.349166,
        'name': 'Odeon'
    },
    '54ed9a996831381d72060000': {
        'lat': 52.452881,
        'lon': 13.286455,
        'name': 'Capitol Dahlem'
    }
};

module.exports = {
    defaultImage,

    cinemaRelation,
    locationRelation
};
