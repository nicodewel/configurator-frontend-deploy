


export const getExclusionsFromPreviousSteps = (configuration, step) => {
    let exclusionList = [];
    for (var i = 0; i <= step; i++) {
        let configurationType = Object.values(configuration)[i]

        if (typeof configurationType === "object" && !Array.isArray(configurationType)) {
            if (configurationType.exclusions) {
                exclusionList = [...exclusionList, ...configurationType.exclusions]
            }
        } else {
            // eslint-disable-next-line
            configurationType.map(configAttribute => exclusionList = [...exclusionList, ...configAttribute.exclusions])
        }

    }
    return [...new Set(exclusionList)];
}

export const getCategories = (configurationAttributes) => {
    let categories = new Set();
    configurationAttributes.forEach(element => categories.add(element.category))
    return [...categories]
}

export const getConfigurationAsList = (configuration) => {
    let config = [];
    Object.values(configuration).map(attr => {
        if (Array.isArray(attr)) {
            attr.map(innerAttr => config = [...config, innerAttr])
        } else {
            config = [...config, attr]
        }
        return null
    }
    )
    return config;
}

export const getSummaryFromConfiguration = (configuration) => {
    let configList = getConfigurationAsList(configuration);

    return configList.map(attr => {
        if (attr.title) {
            return attr.type + ": " + attr.title + " (" + attr.priceInCents / 100 + "€)"
        } else if (typeof attr === 'string' || attr instanceof String) {
            return "Price: " + attr
        } else {
            return "ID: " + attr
        }
    })
}

export const isConfigurationValid = (configuration, step = 5) => {
    let exclusionList = getExclusionsFromPreviousSteps(configuration, step);
    let validConfiguration = true;
    Object.values(configuration).forEach(value => {
        if (value.id) {
            if (exclusionList.includes(value.id)) {
                validConfiguration = false;
            }
        }
    })
    return validConfiguration;
}

export const isConfigurationValidThisStep = (configuration, step = 5) => {
    let exclusionList = getExclusionsFromPreviousSteps(configuration, step);
    let validConfiguration = true;
    for (var i = 0; i <= step; i++) {
        let value = Object.values(configuration)[i];
        if (value.id) {
            if (exclusionList.includes(value.id)) {
                validConfiguration = false;
            }
        }
    }
    return validConfiguration;
}