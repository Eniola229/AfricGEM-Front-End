function SubscribeForm() {
  return (
    <form action="includes/meduimsubscription.inc.php" method="POST">
      <h1>Medium Plan</h1>
      <p>$2 per month</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <select name="Subscription_plan">
        <option value="medium">Medium Plan</option>
      </select>
      <button type="submit">Next</button>
    </form>
  );
}

export default SubscribeForm;
