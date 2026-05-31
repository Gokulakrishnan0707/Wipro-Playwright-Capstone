# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: checkout/checkout.spec.js >> Checkout Module >> Verify checkout page loads without console errors
- Location: tests/checkout/checkout.spec.js:174:3

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 0
Received: 3
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e3]:
    - navigation [ref=e7]:
      - generic [ref=e8]:
        - generic [ref=e9]:
          - img "Logo" [ref=e12] [cursor=pointer]
          - list [ref=e16]:
            - listitem [ref=e17]:
              - link "MEN" [ref=e18]:
                - /url: /men
            - listitem [ref=e19]:
              - link "WOMEN" [ref=e20]:
                - /url: /women
            - listitem [ref=e21]:
              - link "SNEAKERS" [ref=e22]:
                - /url: /sneakers
        - link "Logo" [ref=e25]:
          - /url: /
          - img "Logo" [ref=e27]
        - list [ref=e30]:
          - listitem [ref=e31]:
            - generic [ref=e32] [cursor=pointer]:
              - generic:
                - generic:
                  - generic:
                    - searchbox "What are you looking for?" [ref=e33]
                    - img "search" [ref=e35]
          - listitem [ref=e36]:
            - img "wishlist" [ref=e39] [cursor=pointer]
          - listitem [ref=e40]:
            - img "wishlist" [ref=e43] [cursor=pointer]
          - listitem [ref=e44]:
            - img "Cart" [ref=e47] [cursor=pointer]
    - generic [ref=e54]:
      - generic [ref=e55]: Login with The Souled Store
      - generic [ref=e56]:
        - list [ref=e57]:
          - listitem [ref=e58] [cursor=pointer]:
            - generic [ref=e59]: Login
          - listitem [ref=e60] [cursor=pointer]:
            - generic [ref=e61]: Register
        - generic [ref=e65]:
          - generic [ref=e67]:
            - button "Facebook" [ref=e70] [cursor=pointer]:
              - generic [ref=e72]: Facebook
            - button "Google" [ref=e75] [cursor=pointer]:
              - generic [ref=e77]: Google
          - generic [ref=e79]: "- OR -"
          - generic [ref=e80]:
            - textbox "Enter Phone Number" [ref=e83]
            - button "Proceed" [ref=e84] [cursor=pointer]
          - generic [ref=e86]:
            - text: New User ?
            - generic [ref=e87] [cursor=pointer]: Create Account
    - generic [ref=e88]:
      - generic [ref=e89]:
        - generic [ref=e90]: HOMEGROWN INDIAN BRAND
        - heading "Over 6 Million Happy Customers" [level=3] [ref=e93]
      - tablist [ref=e94]:
        - tabpanel [ref=e96]:
          - generic [ref=e97]:
            - generic [ref=e98]:
              - generic [ref=e99]:
                - generic [ref=e101]:
                  - heading "NEED HELP" [level=5] [ref=e102]
                  - list [ref=e103]:
                    - listitem [ref=e104]:
                      - link "Contact Us" [ref=e105]:
                        - /url: /contact-us
                    - listitem [ref=e106]:
                      - link "Track Order" [ref=e107]:
                        - /url: /orders
                    - listitem [ref=e108]:
                      - link "Returns & Refunds" [ref=e109]:
                        - /url: /faqs
                    - listitem [ref=e110]:
                      - link "FAQs" [ref=e111]:
                        - /url: /faqs
                    - listitem [ref=e112]:
                      - link "My Account" [ref=e113]:
                        - /url: /profile
                - generic [ref=e115]:
                  - heading "COMPANY" [level=5] [ref=e116]
                  - list [ref=e117]:
                    - listitem [ref=e118]:
                      - link "About Us" [ref=e119]:
                        - /url: /about-us
                    - listitem [ref=e120]:
                      - link "Investor Relation" [ref=e121]:
                        - /url: /investor-relation
                    - listitem [ref=e122]:
                      - link "Careers" [ref=e123]:
                        - /url: /careers
                    - listitem [ref=e124]:
                      - link "Gift Vouchers" [ref=e125]:
                        - /url: /gift-voucher
                    - listitem [ref=e126]:
                      - link "Community Initiatives" [ref=e127]:
                        - /url: /from-the-soul
                - generic [ref=e129]:
                  - heading "MORE INFO" [level=5] [ref=e130]
                  - list [ref=e131]:
                    - listitem [ref=e132]:
                      - link "T&C" [ref=e133]:
                        - /url: /terms-and-conditions
                    - listitem [ref=e134]:
                      - link "Privacy Policy" [ref=e135]:
                        - /url: /privacy-policy
                    - listitem [ref=e136]:
                      - link "Sitemap" [ref=e137]:
                        - /url: /sitemap
                    - listitem [ref=e138]:
                      - link "Get Notified" [ref=e139]:
                        - /url: /getnotified
                    - listitem [ref=e140]:
                      - link "Blogs" [ref=e141]:
                        - /url: https://www.thesouledstore.com/blog
                - generic [ref=e143]:
                  - heading "STORE NEAR ME" [level=5] [ref=e144]
                  - list [ref=e145]:
                    - listitem [ref=e146]:
                      - link "Mumbai" [ref=e147]:
                        - /url: /stores-near-me#Mumbai-9
                        - link "Mumbai" [ref=e148]:
                          - /url: "#Mumbai"
                    - listitem [ref=e149]:
                      - link "Pune" [ref=e150]:
                        - /url: /stores-near-me#Pune-93
                        - link "Pune" [ref=e151]:
                          - /url: "#Pune"
                    - listitem [ref=e152]:
                      - link "Bangalore" [ref=e153]:
                        - /url: /stores-near-me#Bangalore-95
                        - link "Bangalore" [ref=e154]:
                          - /url: "#Bangalore"
                    - listitem [ref=e155]:
                      - link "Ahmedabad" [ref=e156]:
                        - /url: /stores-near-me#Ahmedabad-94
                        - link "Ahmedabad" [ref=e157]:
                          - /url: "#Ahmedabad"
                  - button "View More" [ref=e158] [cursor=pointer]
                - list [ref=e161]:
                  - listitem [ref=e162]:
                    - generic [ref=e163]:
                      - generic [ref=e164]: 
                      - text: COD Available
                  - listitem [ref=e165]:
                    - generic [ref=e166]:
                      - generic [ref=e167]: 
                      - text: 30 Days Easy Returns & Exchanges
                  - listitem
              - generic [ref=e169]:
                - generic [ref=e172]:
                  - generic [ref=e173]: 
                  - text: experience the souled store app
                - generic [ref=e174]:
                  - link "Download app on google play store" [ref=e175]:
                    - /url: https://play.google.com/store/apps/details?id=com.thesouledstore
                    - img "Download app on google play store" [ref=e176]
                  - link "Download app on apple app store" [ref=e177]:
                    - /url: https://apps.apple.com/in/app/thesouledstore/id1493897434
                    - img "Download app on apple app store" [ref=e178]
              - generic [ref=e179]:
                - text: "Follow Us:"
                - generic [ref=e182]:
                  - link "Facebook" [ref=e183]:
                    - /url: https://www.facebook.com/SouledStore
                    - generic [ref=e184]: 
                  - link "Instagram" [ref=e185]:
                    - /url: https://www.instagram.com/TheSouledStore/
                    - generic [ref=e186]: 
                  - link "Snapchat" [ref=e187]:
                    - /url: https://www.snapchat.com/add/thesouledstore
                    - generic [ref=e188]: 
                  - link "X" [ref=e189]:
                    - /url: https://twitter.com/TheSouledStore
                    - generic [ref=e190]: 𝕏
            - separator [ref=e192]
            - tablist [ref=e195]:
              - tab " Who we are" [ref=e197]:
                - heading " Who we are" [level=5] [ref=e198]:
                  - link " Who we are" [ref=e199]:
                    - /url: "#footAccordTwo"
                    - text: 
                    - heading "Who we are" [level=2] [ref=e200]
            - generic [ref=e202]:
              - generic [ref=e204]: "100% Secure Payment:"
              - generic [ref=e206]:
                - generic [ref=e208]: "Shipping Partners:"
                - generic [ref=e209]:
                  - img "DTDC" [ref=e211]
                  - img "Delhivery" [ref=e213]
                  - img "Ecom Express" [ref=e215]
                  - img "XpressBees" [ref=e217]
            - paragraph [ref=e219]:
              - generic [ref=e220]:
                - generic [ref=e221]: 
                - text: The Souled Store 2026-27
  - status
```

# Test source

```ts
  82  |   });
  83  | 
  84  |   test('Verify page scroll works', async ({ page }) => {
  85  | 
  86  |     await page.mouse.wheel(0, 3000);
  87  | 
  88  |     await expect(page.locator('body')).toBeVisible();
  89  | 
  90  |   });
  91  | 
  92  |   test('Verify screenshot capture', async ({ page }) => {
  93  | 
  94  |     await page.screenshot({
  95  |       path: 'screenshots/checkout-module.png',
  96  |       fullPage: true
  97  |     });
  98  | 
  99  |   });
  100 | 
  101 |   test('Verify checkout UI loads properly', async ({ page }) => {
  102 | 
  103 |     await expect(page.locator('body')).toBeVisible();
  104 | 
  105 |   });
  106 | 
  107 |   test('Verify links available on checkout page', async ({ page }) => {
  108 | 
  109 |     const count = await page.locator('a').count();
  110 | 
  111 |     expect(count).toBeGreaterThanOrEqual(0);
  112 | 
  113 |   });
  114 | 
  115 |   test('Verify checkout page responds after reload', async ({ page }) => {
  116 | 
  117 |     await page.reload();
  118 | 
  119 |     await expect(page.locator('body')).toBeVisible();
  120 | 
  121 |   });
  122 | 
  123 |   test('Verify checkout page allows scrolling to bottom', async ({ page }) => {
  124 | 
  125 |     await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  126 | 
  127 |     await expect(page.locator('body')).toBeVisible();
  128 | 
  129 |   });
  130 | 
  131 |   test('Verify checkout page DOM loaded', async ({ page }) => {
  132 | 
  133 |     await page.waitForLoadState('domcontentloaded');
  134 | 
  135 |     await expect(page.locator('body')).toBeVisible();
  136 | 
  137 |   });
  138 | 
  139 |   test('Verify checkout page network idle state', async ({ page }) => {
  140 | 
  141 |     await page.waitForLoadState('networkidle');
  142 | 
  143 |     await expect(page.locator('body')).toBeVisible();
  144 | 
  145 |   });
  146 | 
  147 |   test('Verify soft assertion on checkout page', async ({ page }) => {
  148 | 
  149 |     await expect.soft(page.locator('body')).toBeVisible();
  150 | 
  151 |   });
  152 | 
  153 |   test('Verify checkout page screenshot after scroll', async ({ page }) => {
  154 | 
  155 |     await page.mouse.wheel(0, 2000);
  156 | 
  157 |     await page.screenshot({
  158 |       path: 'screenshots/checkout-scroll.png',
  159 |       fullPage: true
  160 |     });
  161 | 
  162 |   });
  163 | 
  164 |   test('Verify checkout page reload stability', async ({ page }) => {
  165 | 
  166 |     await page.reload();
  167 | 
  168 |     await page.waitForTimeout(3000);
  169 | 
  170 |     await expect(page.locator('body')).toBeVisible();
  171 | 
  172 |   });
  173 | 
  174 |   test('Verify checkout page loads without console errors', async ({ page }) => {
  175 | 
  176 |     const errors = [];
  177 | 
  178 |     page.on('pageerror', error => errors.push(error));
  179 | 
  180 |     await page.waitForTimeout(3000);
  181 | 
> 182 |     expect(errors.length).toBe(0);
      |                           ^ Error: expect(received).toBe(expected) // Object.is equality
  183 | 
  184 |   });
  185 | 
  186 | });
```