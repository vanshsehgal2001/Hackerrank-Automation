const puppeteer = require('puppeteer')
const googleLink = "https://www.google.com"
let currPage;

const config = {
    headless: false,
    args: ['--start-maximized'],
    defaultViewport: null
}



const browserOpenPromise = puppeteer.launch(config)

browserOpenPromise.then(browser => {
    let pagesPromise = browser.pages()
    return pagesPromise
}).then(pages => {
    currPage = pages[0]
    const openGooglePromise = currPage.goto(googleLink)
    return openGooglePromise
}).then(() => {
    const waitPromise = currPage.waitForSelector("input[type='text']", { visible: true })
    return waitPromise
}).then(() => {
    const enterWordPromise = currPage.type("input[type='text']", "hackerrank")
    return enterWordPromise
}).then(() => {
    const pressEnterPromise = currPage.keyboard.press("Enter")
    return pressEnterPromise
}).then(() => {
    const waitPromise = currPage.waitForSelector("div.yuRUbf a", { visible: true })
    return waitPromise
}).then(() => {
    const pressLinkPromise = currPage.click("div.yuRUbf a")
    return pressLinkPromise
}).then(() => {
    const waitPromise = currPage.waitForSelector("a[data-event-action='Login']", { visible: true })
    return waitPromise
}).then(() => {
    const pressLoginPromise = currPage.click("a[data-event-action='Login']")
    return pressLoginPromise
}).then(() => {
    const waitPromise = currPage.waitForSelector("div.fl-button-wrap.fl-button-width-auto.fl-button-left a", { visible: true })
    return waitPromise
}).then(() => {
    const pressLoginPromise = currPage.click("div.fl-button-wrap.fl-button-width-auto.fl-button-left a")
    return pressLoginPromise
}).then(() => {
    const waitPromise = currPage.waitForSelector("input[name='username']", { visible: true })
    return waitPromise
}).then(() => {
    const enterUsernamePromise = currPage.type("input[name='username']", "demodemo1009")
    return enterUsernamePromise
}).then(() => {
    const enterPasswordPromise = currPage.type("input[name='password']", "a1b2c3d4e5f6#")
    return enterPasswordPromise
}).then(() => {
    const pressLoginPromise = currPage.click("button[data-analytics='LoginPassword']")
    return pressLoginPromise
}).then(() => {
    const waitPromise = currPage.waitForSelector("a[data-attr1='algorithms']", { visible: true })
    return waitPromise
}).then(() => {
    const pressAlgosPromise = currPage.click("a[data-attr1='algorithms']")
    return pressAlgosPromise
}).then(async () => {
    await currPage.waitForSelector("input[value='warmup']");
    await currPage.waitForTimeout(2000)
    await currPage.evaluate(async () => {
        document.querySelector("input[value='warmup']").parentElement.click()
    })

    await currPage.waitForTimeout(2000)
    await currPage.evaluate(async () => {
        document.querySelector("input[value='solved']").parentElement.click()
    })
    await currPage.waitForTimeout(3000)

    // button.ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled

    await currPage.waitForSelector("button.ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled");
    await currPage.click("button.ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled")

    await currPage.waitForSelector("a.restoreScreen.active-link.no-select");
    await currPage.click("a.restoreScreen.active-link.no-select")


    // div.dropdown-handle.theme-change-handle
    await currPage.waitForSelector("div.dropdown-handle.theme-change-handle");
    await currPage.click("div.dropdown-handle.theme-change-handle")

    // button[data-automation="btn-dark"]
    await currPage.waitForSelector("button[data-automation='btn-dark']");
    await currPage.click("button[data-automation='btn-dark']")

    await currPage.waitForSelector("div.dropdown-handle.theme-change-handle");
    await currPage.click("div.dropdown-handle.theme-change-handle")

    await currPage.waitForSelector("input.checkbox-input");
    await currPage.click("input.checkbox-input")

    await currPage.waitForSelector("textarea#input-1");
    await currPage.click("textarea#input-1")

    await currPage.type("textarea#input-1", `#include <cmath>
    #include <cstdio>
    #include <vector>
    #include <iostream>
    #include <algorithm>
    using namespace std;
    
    
    int solveMeFirst(int a, int b) {
      return a+b;
    }
    int main() {
      int num1, num2;
      int sum;
      cin>>num1>>num2;
      sum = solveMeFirst(num1,num2);
      cout<<sum;
      return 0;
    }`, { delay: 10 })

    await currPage.keyboard.down('Control')
    await currPage.keyboard.press('A', { delay: 100 })
    await currPage.keyboard.press('X', { delay: 100 })
    await currPage.keyboard.up('Control')

    await currPage.waitForSelector("div.monaco-editor.no-user-select.vs-dark");
    await currPage.click("div.monaco-editor.no-user-select.vs-dark")
    await currPage.keyboard.down('Control')
    await currPage.keyboard.press('A', { delay: 100 })
    await currPage.keyboard.press('V', { delay: 100 })
    await currPage.keyboard.up('Control')


    await currPage.click("button.ui-btn.ui-btn-normal.ui-btn-primary.pull-right.hr-monaco-submit.ui-btn-styled")

})





//can be alternative for so many waitForSelector func calls

const waitAndClickFunction = (selector, currPage) => {
    return new Promise((resolve, reject) => {
        const waitPromise = currPage.waitForSelector(selector)
        waitPromise.then(() => {
            const clickPromise = currPage.click(selector)
            return clickPromise
        }).then(() => {
            resolve()
        }).catch(() => {
            reject()
        })
    })
}