
class ElementBuilder {
    /**
     * @type {HTMLElement}
     */
    element = undefined

    /**
     * 
     * @param {string | HTMLElement} tag 
     */
    constructor(tag) {
        if (!(tag instanceof HTMLElement)) {
            tag = document.createElement(tag)
        }
        this.element = tag
    }

    /**
     * 
     * @param {string} value 
     */
    text(value) {
        this.element.innerText = value
        return this
    }

    /**
     * 
     * @param  {...string} names 
     */
    classes(...names) {
        this.element.classList.add(...names)
        return this
    }

    /**
     * 
     * @param  {...string} nameValuePairs 
     */
    attrs(...nameValuePairs) {
        if (nameValuePairs.length % 2 !== 0) {
            throw new Error("The number of string must be pair (for each name there should be a following value)")
        }
        for (let i = 0; i < nameValuePairs; i+=2) {
            const name = nameValuePairs[i]
            const value = nameValuePairs[i+1]
            this.element.setAttribute(name, value)
        }
        return this
    }

    /**
     * 
     * @param {string} type 
     * @param {Function} callback 
     */
    listener(type, callback) {
        this.element.addEventListener(type, callback)
        return this
    }

    /**
     * 
     * @param {string | HTMLElement} tag 
     */
    child(tag) {
        const child = new ElementBuilder(tag)
        this.element.appendChild(child.element)
        return child
    }
    
    /**
     * 
     * @param {...(HTMLElement | ElementBuilder)} children
     */
    append(...children) {
        children.forEach((child) => {
            const element = child instanceof ElementBuilder ? child.element : child;
            this.element.appendChild(element);
        })
        return this
    }
}

/**
 * 
 * @param {string} tag 
 */
export default function element(tag) {
    return new ElementBuilder(tag)
}