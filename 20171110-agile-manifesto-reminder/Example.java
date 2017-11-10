
/**
 * Value Object. <br/>
 * The value is mandatory and read-only.
 */
public class AgileClass {

	private String value;

	public String getValue() {
		return value;
	}

	public AgileClass(String requiredValue) {
		if(requiredValue == null | requiredValue.isEmpty())
			thorw new IllegalArgumentException("value must not be empty!");
		this.value = requiredValue;
	}
}

public class ClassicClass {

	/**
	 * The value
	 */
	private String value;

	/**
	 * @return the value
	 */
	public String getValue() {
		return value;
	}

	/**
	 * @param value
	 *            the value to set
	 */
	public void setValue(String value) {
		this.value = value;
	}

}