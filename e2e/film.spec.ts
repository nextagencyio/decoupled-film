import { test, expect } from '@playwright/test'

test.describe('Homepage', () => {
  test('renders hero section with content from Drupal', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('h1:has-text("Stories Worth Telling")')).toBeVisible()
  })

  test('renders stats section', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByText('120+', { exact: true })).toBeVisible()
    await expect(page.getByText('Festival Selections')).toBeVisible()
  })

  test('renders CTA section', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByText('Have a Story to Tell?')).toBeVisible()
  })

  test('has navigation links', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('nav').getByText('Projects')).toBeVisible()
    await expect(page.locator('nav').getByText('Team')).toBeVisible()
    await expect(page.locator('nav').getByText('Services')).toBeVisible()
    await expect(page.locator('nav').getByText('News')).toBeVisible()
  })
})

test.describe('Projects', () => {
  test('listing page shows projects', async ({ page }) => {
    await page.goto('/projects')
    await expect(page.locator('h1:has-text("Projects")')).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Salt & Stone' })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Beneath the Ice' })).toBeVisible()
    await expect(page.getByRole('heading', { name: /Ember Whiskey/ })).toBeVisible()
  })

  test('detail page renders project content', async ({ page }) => {
    await page.goto('/projects/salt-and-stone')
    await expect(page.getByRole('heading', { name: /Salt.*Stone/ })).toBeVisible()
    await expect(page.getByText('Carmen Reyes').first()).toBeVisible()
    await expect(page.getByText('127 min')).toBeVisible()
  })
})

test.describe('Team', () => {
  test('listing page shows team members', async ({ page }) => {
    await page.goto('/team')
    await expect(page.locator('h1:has-text("Our Team")')).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Carmen Reyes' })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Marcus Lindberg' })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Yuki Nakamura' })).toBeVisible()
  })

  test('detail page renders team member', async ({ page }) => {
    await page.goto('/team/carmen-reyes')
    await expect(page.getByRole('heading', { name: 'Carmen Reyes' }).first()).toBeVisible()
    await expect(page.getByText('Co-Founder').first()).toBeVisible()
  })
})

test.describe('Services', () => {
  test('listing page shows services', async ({ page }) => {
    await page.goto('/services')
    await expect(page.locator('h1:has-text("Services")')).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Full Production Services' })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Post-Production' })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Visual Effects' })).toBeVisible()
  })

  test('detail page renders service', async ({ page }) => {
    await page.goto('/services/full-production')
    await expect(page.getByRole('heading', { name: /Full Production/ }).first()).toBeVisible()
    await expect(page.getByText('Capabilities').first()).toBeVisible()
  })
})

test.describe('News', () => {
  test('listing page shows news articles', async ({ page }) => {
    await page.goto('/news')
    await expect(page.locator('h1:has-text("News")')).toBeVisible()
    await expect(page.getByRole('heading', { name: /Venice Film Festival/ })).toBeVisible()
    await expect(page.getByRole('heading', { name: /Grand Jury Prize/ })).toBeVisible()
  })

  test('detail page renders news article', async ({ page }) => {
    await page.goto('/news/salt-stone-venice-selection')
    await expect(page.getByRole('heading', { name: /Venice/ }).first()).toBeVisible()
  })
})

test.describe('Static Pages', () => {
  test('about page renders', async ({ page }) => {
    await page.goto('/about')
    await expect(page.getByRole('heading', { name: /About Iron Gate Films/ })).toBeVisible()
    await expect(page.getByText('Brooklyn').first()).toBeVisible()
  })

  test('contact page renders', async ({ page }) => {
    await page.goto('/contact')
    await expect(page.locator('h1:has-text("Contact")')).toBeVisible()
    await expect(page.getByText('Get in Touch').first()).toBeVisible()
  })
})
